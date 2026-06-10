import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Variant = "hero" | "card" | "popup" | "reward";

interface StoryImageProps {
  imageUrl?: string;
  emoji: string;
  alt: string;
  variant: Variant;
  accent?: string;
  unlocked?: boolean;
}

const variantStyles: Record<Variant, { container: string; img: string; emoji: string }> = {
  hero: {
    container:
      "mt-6 flex aspect-[4/3] max-h-80 w-full items-center justify-center overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]",
    img: "h-full w-full object-cover",
    emoji: "text-6xl",
  },
  card: {
    container: "flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl",
    img: "h-full w-full object-cover",
    emoji: "text-2xl",
  },
  popup: {
    container:
      "mx-auto mt-3 flex h-32 w-32 items-center justify-center overflow-hidden rounded-2xl",
    img: "h-full w-full object-cover",
    emoji: "text-5xl",
  },
  reward: {
    container: "mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-full",
    img: "h-full w-full object-cover",
    emoji: "text-3xl",
  },
};

export function StoryImage({
  imageUrl,
  emoji,
  alt,
  variant,
  accent,
  unlocked = true,
}: StoryImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const styles = variantStyles[variant];
  const showImage = imageUrl && !failed;

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <div
      className={cn(styles.container, !showImage && !accent ? "bg-accent/40" : "")}
      style={
        !showImage && accent
          ? { background: `color-mix(in oklab, ${accent} 18%, transparent)` }
          : undefined
      }
    >
      {showImage ? (
        <>
          {!loaded && <div className="h-full w-full animate-pulse bg-muted" />}
          <img
            ref={imgRef}
            src={imageUrl}
            alt={alt}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={cn(styles.img, !loaded && "hidden")}
          />
        </>
      ) : (
        <span className={cn(styles.emoji, unlocked ? "" : "opacity-60")}>{emoji}</span>
      )}
    </div>
  );
}
