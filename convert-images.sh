#!/bin/bash
# ─────────────────────────────────────────────────────────────────
# convert-images.sh
# รันใน root ของ Next.js project: bash scripts/convert-images.sh
# ต้องติดตั้ง: ffmpeg, cwebp (libwebp)
#   macOS:  brew install ffmpeg webp
#   Ubuntu: sudo apt install ffmpeg webp
# ─────────────────────────────────────────────────────────────────

set -e
PUBLIC="./public"
QUALITY=82   # WebP quality 0-100 (82 = สมดุล คุณภาพ/ขนาด)

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo " EZPOK168 Image Optimizer"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# ── 1. JPG / JPEG → WebP ────────────────────────────────────────
echo ""
echo "[1/3] Converting JPG/JPEG → WebP (quality=$QUALITY)..."
find "$PUBLIC" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r file; do
  out="${file%.*}.webp"
  cwebp -q "$QUALITY" "$file" -o "$out" 2>/dev/null
  original=$(du -sh "$file"  | cut -f1)
  compressed=$(du -sh "$out" | cut -f1)
  echo "  ✓ $(basename "$file") ($original) → $(basename "$out") ($compressed)"
done

# ── 2. PNG → WebP (lossless สำหรับ PNG โปร่งใส) ───────────────
echo ""
echo "[2/3] Converting PNG → WebP (lossless)..."
find "$PUBLIC" -type f -iname "*.png" | while read -r file; do
  out="${file%.*}.webp"
  cwebp -lossless "$file" -o "$out" 2>/dev/null
  original=$(du -sh "$file"  | cut -f1)
  compressed=$(du -sh "$out" | cut -f1)
  echo "  ✓ $(basename "$file") ($original) → $(basename "$out") ($compressed)"
done

# ── 3. GIF → WebM + MP4 + WebP (still frame fallback) ──────────
echo ""
echo "[3/3] Converting GIF → WebM + MP4 + WebP fallback..."
find "$PUBLIC" -type f -iname "*.gif" | while read -r file; do
  base="${file%.*}"
  name=$(basename "$base")

  # WebM (VP9) — เบาสุด, รองรับ Chrome/Firefox/Edge
  ffmpeg -i "$file" \
    -c:v libvpx-vp9 -b:v 0 -crf 33 \
    -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
    -loop 0 -an -y \
    "${base}.webm" 2>/dev/null
  echo "  ✓ ${name}.gif → ${name}.webm ($(du -sh "${base}.webm" | cut -f1))"

  # MP4 (H.264) — fallback สำหรับ Safari เก่า
  ffmpeg -i "$file" \
    -c:v libx264 -pix_fmt yuv420p -crf 28 \
    -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
    -movflags faststart -an -y \
    "${base}.mp4" 2>/dev/null
  echo "  ✓ ${name}.gif → ${name}.mp4  ($(du -sh "${base}.mp4" | cut -f1))"

  # WebP still frame (first frame — fallback <img> ใน <video>)
  ffmpeg -i "$file" -vframes 1 -y "${base}_frame.png" 2>/dev/null
  cwebp -q "$QUALITY" "${base}_frame.png" -o "${base}.webp" 2>/dev/null
  rm -f "${base}_frame.png"
  echo "  ✓ ${name}.gif → ${name}.webp (poster/fallback)"
done

# ── สรุป ────────────────────────────────────────────────────────
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo " Done! ไฟล์เดิมยังอยู่ (ไม่ได้ลบ)"
echo " หลัง verify บน browser แล้วลบได้ด้วย:"
echo "   find ./public -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.gif' | xargs rm"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
