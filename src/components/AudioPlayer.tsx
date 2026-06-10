import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { useAppState } from "@/hooks/useAppState";
import { t } from "@/i18n";

export function AudioPlayer({ src, label }: { src: string; label?: string }) {
  const { state } = useAppState();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onEnd = () => setPlaying(false);
    const onErr = () => setAvailable(false);
    a.addEventListener("ended", onEnd);
    a.addEventListener("error", onErr);
    return () => {
      a.removeEventListener("ended", onEnd);
      a.removeEventListener("error", onErr);
    };
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      try {
        await a.play();
        setPlaying(true);
      } catch {
        setAvailable(false);
      }
    }
  };

  const replay = () => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = 0;
    a.play()
      .then(() => setPlaying(true))
      .catch(() => setAvailable(false));
  };

  return (
    <div className="flex items-center gap-3 rounded-3xl bg-secondary/60 p-4 shadow-[var(--shadow-soft)]">
      <audio ref={audioRef} src={src} preload="none" />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause" : "Play"}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-cozy)] transition-transform active:scale-95"
      >
        {playing ? <Pause className="h-7 w-7" /> : <Play className="ml-1 h-7 w-7" />}
      </button>
      <div className="flex-1">
        <p className="text-sm font-semibold text-secondary-foreground">
          {label ?? t(state.language, "ui.audio.tells")}
        </p>
        <p className="text-xs text-muted-foreground">
          {available
            ? t(state.language, "ui.audio.pressToListen")
            : t(state.language, "ui.audio.missing")}
        </p>
      </div>
      <button
        onClick={replay}
        aria-label="Replay"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-card text-foreground/70 transition-transform active:scale-95"
      >
        <RotateCcw className="h-5 w-5" />
      </button>
    </div>
  );
}
