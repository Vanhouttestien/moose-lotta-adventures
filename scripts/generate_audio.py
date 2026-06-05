import re
import sys
import asyncio
from pathlib import Path

VOICE_MAP = {
    "en": "en-GB-SoniaNeural",
    "sv": "sv-SE-SofieNeural",
}

AUDIO_DIR = Path(__file__).resolve().parent.parent / "public" / "audio"


def _extract_text(content: str):
    tl = re.search(r"text:\s*`((?:[^`\\]|\\.)*)`", content, re.DOTALL)
    if tl:
        return tl.group(1)
    dq = re.search(r'text:\s*"((?:[^"\\]|\\.)*)"', content)
    if dq:
        return dq.group(1).replace("\\n", "\n").replace('\\"', '"')
    sq = re.search(r"text:\s*'((?:[^'\\]|\\.)*)'", content)
    if sq:
        return sq.group(1).replace("\\n", "\n").replace("\\'", "'")
    return None


def extract_fields(content: str, filename: str):
    story_id = re.search(r'^\s*id:\s*"([^"]+)"', content, re.MULTILINE)
    language = re.search(r'^\s*language:\s*"([^"]+)"', content, re.MULTILINE)
    audio = re.search(r'^\s*audio:\s*"([^"]*)"', content, re.MULTILINE)

    if not story_id:
        print(f"  ERROR: no id in {filename}")
        return None
    if not language:
        print(f"  ERROR: no language in {filename}")
        return None

    text = _extract_text(content)
    if text is None:
        print(f"  ERROR: no text in {filename}")
        return None

    return {
        "id": story_id.group(1),
        "language": language.group(1),
        "text": text,
        "current_audio": audio.group(1) if audio else "",
    }


def needs_update(story_id: str, current_audio: str, audio_path: Path) -> bool:
    expected = f"/audio/{story_id}.mp3"
    if current_audio == expected and audio_path.exists():
        return False
    return True


def update_audio_field(content: str, story_id: str) -> str:
    new_line = f'  audio: "/audio/{story_id}.mp3",'
    return re.sub(
        r'^\s*audio:\s*"[^"]*",',
        new_line,
        content,
        count=1,
        flags=re.MULTILINE,
    )


async def generate_audio(text: str, story_id: str, language: str) -> bool:
    import edge_tts

    voice = VOICE_MAP.get(language)
    if not voice:
        print(f"  ERROR: unknown language '{language}' for {story_id}")
        return False

    output = AUDIO_DIR / f"{story_id}.mp3"
    try:
        communicate = edge_tts.Communicate(text, voice)
        await communicate.save(str(output))
        if not output.exists():
            print(f"  ERROR: {output} not created")
            return False
        return True
    except Exception as e:
        print(f"  ERROR edge-tts: {e}")
        return False


async def process_file(filepath: Path, sem: asyncio.Semaphore, dry_run: bool = False) -> bool:
    filename = filepath.name

    with open(filepath, "r") as f:
        content = f.read()

    fields = extract_fields(content, filename)
    if fields is None:
        return False

    story_id = fields["id"]
    language = fields["language"]
    text = fields["text"]
    current_audio = fields["current_audio"]
    audio_path = AUDIO_DIR / f"{story_id}.mp3"

    if not needs_update(story_id, current_audio, audio_path):
        return True  # skip silently

    print(f"\n  [{story_id}] generating ({len(text)} chars, {language})...")

    if not dry_run:
        async with sem:
            ok = await generate_audio(text, story_id, language)
            if not ok:
                return False
            size = audio_path.stat().st_size / 1024
            print(f"  [{story_id}] → {audio_path.name} ({size:.0f} KB)")

            new_content = update_audio_field(content, story_id)
            with open(filepath, "w") as f:
                f.write(new_content)
            print(f"  [{story_id}] audio field updated")
    else:
        print(f"  [DRY RUN] would generate {audio_path.name}")

    return True


async def main():
    dry_run = "--dry-run" in sys.argv
    concurrency = 5

    story_dir = Path(__file__).resolve().parent.parent / "src" / "data" / "stories" / "halleforsnas"
    AUDIO_DIR.mkdir(parents=True, exist_ok=True)

    files = sorted(story_dir.glob("*.ts"))
    files = [f for f in files if f.name != "index.ts"]

    if dry_run:
        print("DRY RUN — no files will be modified")
    print(f"Processing {len(files)} story files (concurrency={concurrency})...")

    sem = asyncio.Semaphore(concurrency)
    tasks = [process_file(f, sem, dry_run) for f in files]
    results = await asyncio.gather(*tasks)

    success = sum(1 for r in results if r)
    failed = sum(1 for r in results if not r)

    print(f"\n{'='*50}")
    print(f"Done: {success} OK, {failed} failed")
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
