// lib/metaEvent.ts
// เรียกใช้ฟังก์ชันนี้จากทุกหน้าเพื่อส่ง event ไป Meta ผ่าน CAPI

interface MetaEventOptions {
  eventName: string;       // ชื่อ event เช่น 'Lead', 'Purchase', 'PageView'
  eventId?: string;        // ใช้ dedup กับ Pixel (ควรใส่เสมอ)
  email?: string;          // ถ้ามีข้อมูลผู้ใช้ (จะถูก hash อัตโนมัติ)
  phone?: string;
  value?: number;          // มูลค่า เช่น 500 (บาท)
  currency?: string;       // default: 'THB'
  sourceUrl?: string;      // URL ที่เกิด event
}

export async function sendMetaEvent(options: MetaEventOptions): Promise<void> {
  try {
    await fetch('/api/meta-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(options),
    });
  } catch (err) {
    console.error('sendMetaEvent error:', err);
  }
}

// ตัวอย่างการใช้งาน:
//
// 1. ส่ง Lead event เมื่อผู้ใช้สมัครสมาชิก:
//    await sendMetaEvent({
//      eventName: 'Lead',
//      eventId: `lead_${Date.now()}`,
//      email: 'user@email.com',
//      phone: '0812345678',
//      sourceUrl: 'https://www.ezpok168.net',
//    });
//
// 2. ส่ง Purchase event เมื่อมีการฝากเงิน:
//    await sendMetaEvent({
//      eventName: 'Purchase',
//      eventId: `purchase_${orderId}`,
//      value: 500,
//      currency: 'THB',
//    });
//
// 3. ใช้คู่กับ Pixel บน browser (dedup):
//    const eventId = `lead_${Date.now()}`;
//    fbq('track', 'Lead', {}, { eventID: eventId });   // browser
//    await sendMetaEvent({ eventName: 'Lead', eventId }); // server
