import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const PIXEL_ID = '1427059765837148';
const ACCESS_TOKEN = process.env.META_CAPI_TOKEN;
const ALLOWED_EVENTS = new Set(['PageView', 'Lead', 'Contact', 'CompleteRegistration', 'Purchase']);
const ALLOWED_SOURCE_HOSTS = new Set(['www.ezpok168.net', 'ezpok168.net', 'ezpok168.com', 'www.ezpok168.com']);

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function hash(value: string): string {
  return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

function normalizeSourceUrl(sourceUrl: unknown): string {
  if (typeof sourceUrl !== 'string') return 'https://www.ezpok168.net';

  try {
    const url = new URL(sourceUrl);
    if (url.protocol === 'https:' && ALLOWED_SOURCE_HOSTS.has(url.hostname)) {
      return url.toString();
    }
  } catch {
    // Fall through to the canonical source URL.
  }

  return 'https://www.ezpok168.net';
}

export async function POST(req: NextRequest) {
  try {
    if (!ACCESS_TOKEN) {
      return NextResponse.json({ ok: false, error: 'Meta CAPI is not configured' }, { status: 503 });
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
    }

    const { eventName, eventId, email, phone, value, currency = 'THB', sourceUrl } = body;
    if (typeof eventName !== 'string' || !ALLOWED_EVENTS.has(eventName)) {
      return NextResponse.json({ ok: false, error: 'Unsupported eventName' }, { status: 400 });
    }

    const user_data: Record<string, string> = {
      client_ip_address: req.headers.get('x-forwarded-for')?.split(',')[0] || req.headers.get('x-real-ip') || '',
      client_user_agent: req.headers.get('user-agent') || '',
    };

    if (typeof email === 'string' && email.includes('@')) user_data.em = hash(email);
    if (typeof phone === 'string') {
      const normalizedPhone = phone.replace(/\D/g, '');
      if (normalizedPhone.length >= 8) user_data.ph = hash(normalizedPhone);
    }

    const fbp = req.cookies.get('_fbp')?.value;
    const fbc = req.cookies.get('_fbc')?.value;
    if (fbp) user_data.fbp = fbp;
    if (fbc) user_data.fbc = fbc;

    const eventPayload: Record<string, unknown> = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: normalizeSourceUrl(sourceUrl),
      user_data,
    };

    if (typeof eventId === 'string' && eventId.length <= 120) eventPayload.event_id = eventId;
    if (value !== undefined) {
      const numericValue = Number(value);
      if (!Number.isFinite(numericValue) || numericValue < 0) {
        return NextResponse.json({ ok: false, error: 'Invalid value' }, { status: 400 });
      }
      eventPayload.custom_data = {
        value: numericValue,
        currency: typeof currency === 'string' && /^[A-Z]{3}$/.test(currency) ? currency : 'THB',
      };
    }

    const res = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [eventPayload] }),
      }
    );

    const result = await res.json();

    if (!res.ok) {
      console.error('Meta CAPI error:', result);
      return NextResponse.json({ ok: false, error: 'Meta CAPI request failed' }, { status: 502 });
    }

    return NextResponse.json({ ok: true, result });
  } catch (err) {
    console.error('CAPI route error:', err);
    return NextResponse.json({ ok: false, error: 'Internal error' }, { status: 500 });
  }
}
