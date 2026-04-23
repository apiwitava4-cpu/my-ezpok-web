import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const PIXEL_ID = '1427059765837148';
const ACCESS_TOKEN = process.env.META_CAPI_TOKEN!;

function hash(value: string): string {
  return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { eventName, eventId, email, phone, value, currency = 'THB', sourceUrl } = body;

    const user_data: Record<string, string> = {
      client_ip_address: req.headers.get('x-forwarded-for')?.split(',')[0] || req.headers.get('x-real-ip') || '',
      client_user_agent: req.headers.get('user-agent') || '',
    };

    if (email) user_data.em = hash(email);
    if (phone) user_data.ph = hash(phone.replace(/\D/g, ''));

    const fbp = req.cookies.get('_fbp')?.value;
    const fbc = req.cookies.get('_fbc')?.value;
    if (fbp) user_data.fbp = fbp;
    if (fbc) user_data.fbc = fbc;

    const eventPayload: Record<string, unknown> = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: sourceUrl || 'https://www.ezpok168.net',
      user_data,
    };

    if (eventId) eventPayload.event_id = eventId;
    if (value !== undefined) {
      eventPayload.custom_data = { value, currency };
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
      return NextResponse.json({ ok: false, error: result }, { status: 500 });
    }

    return NextResponse.json({ ok: true, result });
  } catch (err) {
    console.error('CAPI route error:', err);
    return NextResponse.json({ ok: false, error: 'Internal error' }, { status: 500 });
  }
}
