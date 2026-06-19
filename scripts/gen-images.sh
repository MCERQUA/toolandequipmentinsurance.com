#!/usr/bin/env bash
# Generate all images for toolandequipmentinsurance.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/toolandequipmentinsurance.com/public/images"
mkdir -p "$OUT"

gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps)..."
    curl -s --max-time 180 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" '{inputs:$p, parameters:{num_inference_steps:$s}}')" \
      -o "$dest"
    local ftype
    ftype=$(file -b "$dest" 2>/dev/null)
    local sz
    sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then
      head -c 200 "$dest"; echo ""
    fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — contractor tools & equipment insurance ===

gen "hero.jpg" \
  "Photorealistic cinematic wide shot of an organized contractor work truck bed loaded with neatly arranged power tools, nail guns, miter saw, generators and air compressor, deep organized tool chests, professional construction equipment. Industrial graphite steel and safety amber yellow accent tones, golden hour light, high-end commercial photography, no text, no watermark" 4

gen "truck-tools.jpg" \
  "Photorealistic photo of a contractor pickup truck with a locked tool box in the bed full of organized power tools, cordless nailers and saws, professional gear secured for the jobsite. Bright clear daylight, professional commercial photography, industrial steel and amber tones, no text" 4

gen "jobsite-tools.jpg" \
  "Photorealistic photo of an active residential jobsite with a miter saw station on sawhorses, air compressor, pneumatic nail guns, a laser level and stacked cordless tool batteries, organized and ready. Professional construction photography, warm natural light, no text" 4

gen "nail-guns.jpg" \
  "Photorealistic close-up of a row of professional pneumatic framing nail guns and cordless nailers arranged neatly in a padded tool case, sharp detail, shallow depth of field, industrial graphite and amber tones. Professional product photography, no text" 4

gen "compressor-genset.jpg" \
  "Photorealistic photo of a portable air compressor and a contractor generator sitting on a residential jobsite, power cords and air hoses connected, ready to run tools. Bright daylight, professional commercial photography, industrial tones, no text" 4

gen "locked-box.jpg" \
  "Photorealistic photo of a heavy-duty locked steel jobsite tool storage box on a construction site, padlocked, with a contractor work truck in the background. Focus on security and theft prevention, industrial steel tones with amber hazard accents, professional photography, no text" 4

gen "lift-equipment.jpg" \
  "Photorealistic photo of mobile construction equipment on a jobsite — a towable boom lift and a welder generator, heavy equipment used by contractors. Bright industrial daylight, professional commercial photography, no text" 4

gen "crew-portrait.jpg" \
  "Photorealistic professional portrait of a confident contractor wearing a hard hat and branded work shirt, arms crossed, standing on a jobsite with organized tools and a work truck behind him. Warm friendly genuine trustworthy expression, golden hour light, commercial photography, no text" 4

gen "stolen-tools.jpg" \
  "Photorealistic photo of a broken truck window and an empty tool box in the bed of a contractor pickup truck at night under a streetlight, depicting a tool theft scene. Moody dramatic lighting, focus on loss and prevention, professional commercial photography, no text" 4

gen "saws-lasers.jpg" \
  "Photorealistic close-up of professional contractor tools arranged on a workbench: a miter saw, a rotary laser level on a tripod, a tape measure and a circular saw, sharp detail, shallow depth of field. Professional product photography, industrial steel and amber tones, no text" 4

gen "caliper-marks.jpg" \
  "Photorealistic abstract close-up of a precision measurement caliper and steel ruler with engraved tick marks, industrial graphite steel surface with safety amber yellow hazard stripe accent, shallow depth of field, technical product photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic cinematic wide banner image of an organized contractor truck bed full of professional power tools, nail guns, saws and a generator, deep organized gear, industrial steel and safety amber yellow tones, wide composition, professional commercial photography, no text, no watermark" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
