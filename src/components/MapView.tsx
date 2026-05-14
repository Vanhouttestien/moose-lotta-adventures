import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { StoryStatus } from "@/engine/storyEngine";
import type { Village } from "@/data/stories";
import { useNavigate } from "@tanstack/react-router";

type PinKind = "hint" | "visible" | "warm" | "unlocked" | "completed";

function pinIcon(kind: PinKind, emoji: string) {
  const palette: Record<PinKind, { fill: string; glyph: string; opacity: number; ring: string }> = {
    hint: { fill: "#b9b3a4", glyph: "?", opacity: 0.55, ring: "" },
    visible: { fill: "#a89070", glyph: emoji, opacity: 1, ring: "" },
    warm: { fill: "#d49a5c", glyph: emoji, opacity: 1, ring: "ml-warm-ring" },
    unlocked: { fill: "#7ea66a", glyph: emoji, opacity: 1, ring: "" },
    completed: { fill: "#d49a5c", glyph: "✨", opacity: 1, ring: "" },
  };
  const p = palette[kind];
  return L.divIcon({
    className: "",
    iconSize: [44, 54],
    iconAnchor: [22, 52],
    html: `
      <div class="${p.ring}" style="position:relative;width:44px;height:54px;opacity:${p.opacity};">
        <svg viewBox="0 0 44 54" width="44" height="54">
          <path d="M22 2 C 10 2 2 11 2 22 C 2 36 22 52 22 52 C 22 52 42 36 42 22 C 42 11 34 2 22 2 Z"
                fill="${p.fill}" stroke="white" stroke-width="2.5"/>
          <circle cx="22" cy="22" r="8" fill="white"/>
        </svg>
        <div style="position:absolute;inset:0;display:flex;align-items:flex-start;justify-content:center;padding-top:11px;font-size:15px;">
          ${p.glyph}
        </div>
      </div>
    `,
  });
}

function userIcon() {
  return L.icon({
    iconUrl: "/moose-lotta-pointer.png",
    iconSize: [65, 48],
    iconAnchor: [24, 48],
  });
}

export function MapView({
  village,
  statuses,
  position,
}: {
  village: Village;
  statuses: StoryStatus[];
  position: { lat: number; lng: number } | null;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);
  const storyMarkersRef = useRef<Map<string, L.Marker>>(new Map());
  const animFrameRef = useRef<number | null>(null);
  const navigate = useNavigate();
  const hasCenteredRef = useRef(false);

  // INIT MAP
  useEffect(() => {
    if (!ref.current || mapRef.current) return;

    const map = L.map(ref.current, {
      center: [village.center.lat, village.center.lng],
      zoom: 14,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    L.control.attribution({ prefix: false }).addAttribution("© OpenStreetMap").addTo(map);

    mapRef.current = map;

    return () => {
      if (animFrameRef.current != null) cancelAnimationFrame(animFrameRef.current);
      map.remove();
      mapRef.current = null;
    };
  }, [village]);

  // STORY MARKERS — only render hint+ tiers; tier drives icon style
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const visibleIds = new Set<string>();
    const bounds = L.latLngBounds([]);

    statuses.forEach((s) => {
      // Hidden stories never appear on the map.
      if (s.tier === "hidden") return;

      const id = s.story.id;
      visibleIds.add(id);

      const kind: PinKind = s.completed
        ? "completed"
        : s.unlocked
          ? "unlocked"
          : (s.tier as PinKind);

      const icon = pinIcon(kind, s.story.emoji);

      // Hint pins are intentionally offset / fuzzy — show approximate area
      // by snapping to nearest 0.001 deg (≈100m) so children "search" for it.
      const lat =
        s.tier === "hint" ? Math.round(s.story.location.lat * 1000) / 1000 : s.story.location.lat;
      const lng =
        s.tier === "hint" ? Math.round(s.story.location.lng * 1000) / 1000 : s.story.location.lng;

      bounds.extend([lat, lng]);

      if (storyMarkersRef.current.has(id)) {
        const marker = storyMarkersRef.current.get(id)!;
        marker.setIcon(icon);
        marker.setLatLng([lat, lng]);
        return;
      }

      const marker = L.marker([lat, lng], { icon }).addTo(map);
      marker.on("click", () => {
        if (s.tier === "hint") return; // can't tap a vague hint
        navigate({ to: "/story/$storyId", params: { storyId: s.story.id } });
      });
      storyMarkersRef.current.set(id, marker);
    });

    // remove out-of-range markers
    storyMarkersRef.current.forEach((marker, id) => {
      if (!visibleIds.has(id)) {
        map.removeLayer(marker);
        storyMarkersRef.current.delete(id);
      }
    });

    // Fit map to story bounds, padded so markers aren't cropped
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [60, 60], maxZoom: 16 });
    }
  }, [statuses, navigate]);

  // USER / MOOSE MARKER — animate between positions for buttery motion
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !position) return;

    const target: [number, number] = [position.lat, position.lng];

    if (!userMarkerRef.current) {
      userMarkerRef.current = L.marker(target, { icon: userIcon() }).addTo(map);
      map.setView(target, map.getZoom(), { animate: false });
      hasCenteredRef.current = true;
      return;
    }

    const marker = userMarkerRef.current;
    const start = marker.getLatLng();
    const startTime = performance.now();
    const duration = 800;

    if (animFrameRef.current != null) cancelAnimationFrame(animFrameRef.current);

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      // ease-out cubic
      const e = 1 - Math.pow(1 - t, 3);
      const lat = start.lat + (target[0] - start.lat) * e;
      const lng = start.lng + (target[1] - start.lng) * e;
      marker.setLatLng([lat, lng]);
      if (t < 1) animFrameRef.current = requestAnimationFrame(tick);
    };
    animFrameRef.current = requestAnimationFrame(tick);

    map.panTo(target, { animate: true, duration: 0.8 });
  }, [position]);

  return (
    <div
      ref={ref}
      className="h-full w-full"
      style={{
        background: "var(--forest-mist)",
      }}
    />
  );
}
