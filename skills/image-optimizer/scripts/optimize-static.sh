#!/usr/bin/env bash
# 정적 이미지(PNG/JPG/JPEG/대형 WebP)를 WebP(q82, 최대 가로 1600px)로 최적화한다.
# - 결과가 원본보다 작을 때만 채택한다.
# - PNG/JPG는 .webp로 대체하고 원본은 삭제한다. WebP는 제자리 재인코딩.
# - SVG/GIF는 건드리지 않는다(GIF는 SKILL.md의 GIF 레시피 참고).
# 사용법: bash optimize-static.sh <dir> [maxwidth] [quality]
set -euo pipefail

DIR="${1:?사용법: optimize-static.sh <dir> [maxwidth] [quality]}"
MAXW="${2:-1600}"
Q="${3:-82}"

command -v cwebp >/dev/null || { echo "cwebp 필요: brew install webp" >&2; exit 1; }

human() { ls -lh "$1" | awk '{print $5}'; }
width() { sips -g pixelWidth "$1" 2>/dev/null | awk '/pixelWidth/{print $2}'; }

find "$DIR" -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.webp' \) |
while IFS= read -r f; do
  base="${f%.*}"; ext="${f##*.}"
  w="$(width "$f")"; before="$(human "$f")"
  args=( -quiet -q "$Q" )
  if [ -n "$w" ] && [ "$w" -gt "$MAXW" ]; then
    args+=( -resize "$MAXW" 0 -resize_mode down_only )
  fi
  tmp="$(mktemp /tmp/optimg.XXXXXX).webp"
  if ! cwebp "${args[@]}" "$f" -o "$tmp" 2>/dev/null || [ ! -s "$tmp" ]; then
    echo "FAIL  ${f#"$DIR"/}"; rm -f "$tmp"; continue
  fi
  out="$base.webp"
  newsz="$(stat -f%z "$tmp" 2>/dev/null || stat -c%s "$tmp")"
  cursz="$(stat -f%z "$f" 2>/dev/null || stat -c%s "$f")"
  # WebP 입력: 더 작을 때만 교체. PNG/JPG 입력: webp가 원본보다 작을 때만 변환(아니면 원본 유지).
  if [ "$newsz" -lt "$cursz" ]; then
    mv "$tmp" "$out"
    [ "$ext" != "webp" ] && rm -f "$f"
    printf "OK    %-44s %7s -> %7s\n" "${out#"$DIR"/}" "$before" "$(human "$out")"
  else
    rm -f "$tmp"
    printf "KEEP  %-44s %7s (재인코딩이 더 큼)\n" "${f#"$DIR"/}" "$before"
  fi
done

echo "---"
echo "총 용량: $(du -sh "$DIR" | awk '{print $1}')"
