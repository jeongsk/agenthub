#!/usr/bin/env bash
# Markdown 본문의 이미지 참조를 실제 파일명(확장자 포함)과 맞춘다.
# 최적화로 확장자가 바뀌어도(.png/.jpg/.gif -> .webp) 참조가 깨지지 않게 한다.
# 전제: 이미지 base 이름은 고유하고, 본문 참조 경로는 /<webroot>/<base>.<ext> 형태.
# 사용법: bash reconcile-refs.sh <image-dir> <content-dir> [url-prefix]
#   예) bash reconcile-refs.sh public/tool-screenshots src/content/tools /tool-screenshots
set -euo pipefail

IMGDIR="${1:?사용법: reconcile-refs.sh <image-dir> <content-dir> [url-prefix]}"
CONTENT="${2:?content-dir 필요}"
PREFIX="${3:-/$(basename "$IMGDIR")}"

changed=0
for img in "$IMGDIR"/*; do
  [ -f "$img" ] || continue
  fn="${img##*/}"; base="${fn%.*}"
  for md in "$CONTENT"/*.md; do
    if grep -qE "$PREFIX/${base}\.[A-Za-z0-9]+" "$md"; then
      ref="$(grep -oE "$PREFIX/${base}\.[A-Za-z0-9]+" "$md" | head -1)"
      if [ "$ref" != "$PREFIX/$fn" ]; then
        sed -i '' -E "s#$PREFIX/${base}\.[A-Za-z0-9]+#$PREFIX/$fn#g" "$md" 2>/dev/null \
          || sed -i -E "s#$PREFIX/${base}\.[A-Za-z0-9]+#$PREFIX/$fn#g" "$md"
        echo "FIX ${md##*/}: $ref -> $PREFIX/$fn"
        changed=$((changed+1))
      fi
    fi
  done
done
echo "--- 총 ${changed}건 수정 ---"

echo "=== 깨진 참조 검사 ==="
broken=0
for md in "$CONTENT"/*.md; do
  while IFS= read -r ref; do
    p="$IMGDIR/${ref##*/}"
    [ -f "$p" ] || { echo "BROKEN ${md##*/}: $ref"; broken=$((broken+1)); }
  done < <(grep -oE "$PREFIX/[^)\"' ]+" "$md" 2>/dev/null)
done
[ "$broken" -eq 0 ] && echo "(깨진 참조 없음)"
