import { useEffect, useRef, useState } from "react";

export interface LatLng {
  lat: number;
  lng: number;
}

/**
 * Low-pass smoothing for noisy GPS readings.
 * Blends new readings with previous smoothed value.
 * Snaps when distance jumps (>200m) — likely a real move.
 */
export function useSmoothPosition(raw: LatLng | null, alpha = 0.25): LatLng | null {
  const [smooth, setSmooth] = useState<LatLng | null>(null);
  const ref = useRef<LatLng | null>(null);

  useEffect(() => {
    if (!raw) return;
    const prev = ref.current;
    if (!prev) {
      ref.current = raw;
      setSmooth(raw);
      return;
    }
    const dLat = raw.lat - prev.lat;
    const dLng = raw.lng - prev.lng;
    const jumpDeg = Math.hypot(dLat, dLng);
    // ~200m threshold in degrees ≈ 0.0018
    if (jumpDeg > 0.0018) {
      ref.current = raw;
      setSmooth(raw);
      return;
    }
    const next = {
      lat: prev.lat + dLat * alpha,
      lng: prev.lng + dLng * alpha,
    };
    ref.current = next;
    setSmooth(next);
  }, [raw, alpha]);

  return smooth;
}
