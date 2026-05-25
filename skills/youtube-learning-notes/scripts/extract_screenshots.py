#!/usr/bin/env python3
"""extract_screenshots.py — 시점 목록을 받아 ffmpeg로 일괄 스크린샷을 뽑는다.

사용 예:
    # JSON 입력 (stdin)
    echo '[
      {"index": 1, "time": "00:00:45"},
      {"index": 2, "time": "00:02:10", "label": "intro-slide"}
    ]' | python extract_screenshots.py <video.mp4> --outdir screenshots

    # CSV-스러운 인자
    python extract_screenshots.py <video.mp4> --outdir screenshots \
        --shot 1:00:00:45 --shot 2:00:02:10:intro-slide

각 항목은 `{index, time[, label]}` 형식. 출력 파일명은
    scene_{index:02d}_{HHhMMmSSs}[_label].jpg

ffmpeg 호출:
    ffmpeg -y -ss <time> -i <video> -vframes 1 -q:v 2 <out.jpg>

검증(QA) 단계에서 단일 장면을 다시 뽑을 때는 이 스크립트를 한 항목으로 호출하면 된다.
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path


def _safe_label(label: str | None) -> str:
    if not label:
        return ""
    cleaned = re.sub(r"[^a-zA-Z0-9_-]+", "-", label).strip("-")
    return f"_{cleaned}" if cleaned else ""


def _time_to_filename(time: str) -> str:
    # "HH:MM:SS" or "MM:SS" → "HHhMMmSSs"
    parts = time.split(":")
    if len(parts) == 2:
        parts = ["00"] + parts
    h, m, s = parts
    return f"{int(h):02d}h{int(m):02d}m{int(float(s)):02d}s"


def extract_one(video: Path, time: str, out: Path) -> bool:
    out.parent.mkdir(parents=True, exist_ok=True)
    cmd = [
        "ffmpeg", "-y",
        "-ss", time,
        "-i", str(video),
        "-vframes", "1",
        "-q:v", "2",
        str(out),
    ]
    proc = subprocess.run(cmd, capture_output=True, text=True)
    if proc.returncode != 0:
        print(f"[FAIL] {time} → {out.name}\n{proc.stderr.strip().splitlines()[-1] if proc.stderr else ''}", file=sys.stderr)
        return False
    print(f"[OK]   {time} → {out.name}")
    return True


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("video", type=Path, help="입력 mp4")
    ap.add_argument("--outdir", type=Path, default=Path("screenshots"))
    ap.add_argument(
        "--shot",
        action="append",
        default=[],
        help='반복 사용. 형식 "index:time[:label]" 예: "1:00:02:10:intro"',
    )
    args = ap.parse_args()

    shots: list[dict] = []

    if args.shot:
        for raw in args.shot:
            # index와 라벨에는 콜론이 없다고 가정. 시간 부분은 HH:MM:SS.
            parts = raw.split(":")
            if len(parts) < 4:
                print(f"--shot 형식 오류: {raw}", file=sys.stderr)
                return 1
            index = int(parts[0])
            time = ":".join(parts[1:4])
            label = parts[4] if len(parts) >= 5 else None
            shots.append({"index": index, "time": time, "label": label})
    else:
        # stdin JSON
        data = sys.stdin.read().strip()
        if not data:
            print("입력 시점 없음. --shot 또는 stdin JSON을 주세요.", file=sys.stderr)
            return 1
        shots = json.loads(data)

    if not args.video.exists():
        print(f"영상 파일을 찾을 수 없음: {args.video}", file=sys.stderr)
        return 1

    args.outdir.mkdir(parents=True, exist_ok=True)
    ok, fail = 0, 0
    for shot in shots:
        index = int(shot["index"])
        time = str(shot["time"])
        label = shot.get("label")
        fname = f"scene_{index:02d}_{_time_to_filename(time)}{_safe_label(label)}.jpg"
        out = args.outdir / fname
        if extract_one(args.video, time, out):
            ok += 1
        else:
            fail += 1

    print(f"\n완료: {ok}장 성공 / {fail}장 실패", file=sys.stderr)
    return 0 if fail == 0 else 2


if __name__ == "__main__":
    raise SystemExit(main())
