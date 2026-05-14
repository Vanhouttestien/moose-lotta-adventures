import { useCallback, useEffect, useRef, useState } from "react";

export type GeoStatus = "idle" | "watching" | "unavailable";

export interface GeoPosition {
  lat: number;
  lng: number;
  accuracy: number;
}

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

    const onSuccess = (pos: GeolocationPosition) => {
      setPosition({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        accuracy: pos.coords.accuracy,
      });
      setStatus("watching");

      if (watchIdRef.current == null) {
        watchIdRef.current = navigator.geolocation.watchPosition(
          (p) => {
            setPosition({
              lat: p.coords.latitude,
              lng: p.coords.longitude,
              accuracy: p.coords.accuracy,
            });
          },
          () => setStatus("unavailable"),
          { enableHighAccuracy: true, timeout: 30000, maximumAge: 5000 },
        );
      }
    };

    const onError = () => {
      setStatus("unavailable");
    };

    setStatus("watching");
    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: true,
      timeout: 30000,
      maximumAge: 60000,
    });
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
