import { useCallback, useEffect, useRef, useState } from "react";

export type GeoStatus = "idle" | "watching" | "unavailable";

export interface GeoPosition {
  lat: number;
  lng: number;
  accuracy: number;
}

const WATCH_OPTIONS: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 30000,
  maximumAge: 5000,
};

export function useGeolocation() {
  const [status, setStatus] = useState<GeoStatus>("idle");
  const [position, setPosition] = useState<GeoPosition | null>(null);
  const watchIdRef = useRef<number | null>(null);

  const stop = useCallback(() => {
    if (watchIdRef.current != null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setStatus("unavailable");
      return;
    }

    stop();

    setStatus("watching");

    watchIdRef.current = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        });
        setStatus("watching");
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          setStatus("idle");
        } else {
          setStatus("unavailable");
        }
      },
      WATCH_OPTIONS,
    );
  }, [stop]);

  useEffect(() => {
    return () => stop();
  }, [stop]);

  return { status, position, start };
}

export function distanceMeters(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): number {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
