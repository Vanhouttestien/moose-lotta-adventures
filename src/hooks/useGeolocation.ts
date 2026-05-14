import { useEffect, useRef, useState } from "react";

export type GeoStatus = "idle" | "prompt" | "watching" | "denied" | "unavailable";

export interface GeoPosition {
  lat: number;
  lng: number;
  accuracy: number;
}

export function useGeolocation(enabled: boolean) {
  const [status, setStatus] = useState<GeoStatus>("idle");
  const [position, setPosition] = useState<GeoPosition | null>(null);
  const watchId = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setStatus("unavailable");
      return;
    }
    setStatus("watching");
    watchId.current = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        });
        setStatus("watching");
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) setStatus("denied");
        else setStatus("unavailable");
      },
      { enableHighAccuracy: true, maximumAge: 5000, timeout: 20000 },
    );
    return () => {
      if (watchId.current != null) navigator.geolocation.clearWatch(watchId.current);
    };
  }, [enabled]);

  return { status, position };
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
