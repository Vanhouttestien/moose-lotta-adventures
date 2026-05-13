import { useEffect, useState } from "react";

export interface LatLng {
  lat: number;
  lng: number;
}

/** Bearing in degrees from `from` to `to` (0 = North, clockwise). */
export function bearingDeg(from: LatLng, to: LatLng): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const toDeg = (r: number) => (r * 180) / Math.PI;
  const φ1 = toRad(from.lat);
  const φ2 = toRad(to.lat);
  const Δλ = toRad(to.lng - from.lng);
  const y = Math.sin(Δλ) * Math.cos(φ2);
  const x =
    Math.cos(φ1) * Math.sin(φ2) -
    Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

/**
 * Listens to device orientation. Returns compass heading in degrees
 * (0 = device pointing North), or null if unavailable.
 */
export function useDeviceHeading(): number | null {
  const [heading, setHeading] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handler = (e: DeviceOrientationEvent) => {
      // iOS Safari exposes webkitCompassHeading (already adjusted to true north)
      const wk = (e as DeviceOrientationEvent & {
        webkitCompassHeading?: number;
      }).webkitCompassHeading;
      if (typeof wk === "number") {
        setHeading(wk);
        return;
      }
      if (typeof e.alpha === "number") {
        // Other browsers: alpha is rotation around z, 0 = device north when absolute
        setHeading((360 - e.alpha) % 360);
      }
    };

    // iOS 13+ requires explicit permission gesture
    const DOE = window.DeviceOrientationEvent as unknown as {
      requestPermission?: () => Promise<"granted" | "denied">;
    };
    if (typeof DOE?.requestPermission === "function") {
      // Will throw if not in user gesture; we silently swallow.
      DOE.requestPermission()
        .then((res) => {
          if (res === "granted") {
            window.addEventListener("deviceorientation", handler, true);
          }
        })
        .catch(() => {});
    } else {
      window.addEventListener(
        "deviceorientationabsolute" as keyof WindowEventMap,
        handler as EventListener,
        true,
      );
      window.addEventListener("deviceorientation", handler, true);
    }

    return () => {
      window.removeEventListener(
        "deviceorientationabsolute" as keyof WindowEventMap,
        handler as EventListener,
        true,
      );
      window.removeEventListener("deviceorientation", handler, true);
    };
  }, []);

  return heading;
}