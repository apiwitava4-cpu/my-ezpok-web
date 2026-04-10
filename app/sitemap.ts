import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // เปลี่ยน URL นี้เป็นโดเมนจริงของคุณได้เลยครับ
  const baseUrl = 'https://ezpok168.net'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    }
    // ถ้าอนาคตมีหน้าอื่นเพิ่ม เช่น /promotion ก็คัดลอกปีกกานี้เพิ่มเข้าไปได้ครับ
  ]
}