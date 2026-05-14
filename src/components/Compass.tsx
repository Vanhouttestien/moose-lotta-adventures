import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

interface CompassProps {
  /** Bearing from user to target in degrees (0 = north). */
  bearing: number | null;
  /** Device heading in degrees. If null, shows north-up bearing. */
  heading: number | null;
  /** Distance to target in meters. */
  distance: number | null;
  /** Story title (or village name) shown below the arrow. */
  label: string | null;
  /** True when within "warm" range — make compass glow. */
  warm?: boolean;
}

/** Smoothly rotates compass arrow toward target with shortest-path interpolation. */
export function Compass({ bearing, heading, distance, label, warm }: CompassProps) {
  const arrowRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef(0);

  useEffect(() => {
    if (bearing == null || !arrowRef.current) return;
    const target = heading != null ? (bearing - heading + 360) % 360 : bearing;
    // Shortest-path delta
    const cur = currentRef.current;
    let delta = target - (((cur % 360) + 360) % 360);
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    const next = cur + delta;
    currentRef.current = next;
    arrowRef.current.style.transform = `rotate(${next}deg)`;
  }, [bearing, heading]);

  if (bearing == null) {
    return (
      <div className="pointer-events-none flex items-center gap-2 rounded-full bg-card/85 px-4 py-2 text-xs text-muted-foreground shadow-[var(--shadow-soft)] backdrop-blur">
        <Sparkles className="h-3.5 w-3.5" />
        Letar efter äventyr i närheten…
      </div>
    );
  }

  const distanceLabel =
    distance == null
      ? ""
      : distance < 1000
        ? `${Math.round(distance)} m`
        : `${(distance / 1000).toFixed(1)} km`;

  return (
    <div
      className={[
        "pointer-events-none flex items-center gap-3 rounded-full bg-card/90 px-3 py-2 pr-4 shadow-[var(--shadow-soft)] backdrop-blur transition-all",
        warm ? "ring-2 ring-[var(--ember)] animate-pulse-ring" : "",
      ].join(" ")}
    >
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[var(--forest-mist)]">
        <div
          className="absolute inset-1 rounded-full opacity-60"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, oklch(0.55 0.08 145 / 0.25), transparent)",
          }}
        />
        <div
          ref={arrowRef}
          className="relative h-full w-full"
          style={{ transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)" }}
        >
          <svg viewBox="0 0 48 48" className="h-full w-full">
            <defs>
              <linearGradient id="ml-needle" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--ember)" />
                <stop offset="100%" stopColor="var(--moss)" />
              </linearGradient>
            </defs>
            <path
              d="M24 5 L29 26 L24 22 L19 26 Z"
              fill="url(#ml-needle)"
              stroke="white"
              strokeWidth="1"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="24" r="2.5" fill="white" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-display text-sm text-forest-deep">
          {label ?? "Något i närheten…"}
        </span>
        <span className="text-[11px] uppercase tracking-wider text-moss">
          {warm ? "✨ alldeles nära" : distanceLabel}
        </span>
      </div>
    </div>
  );
}
