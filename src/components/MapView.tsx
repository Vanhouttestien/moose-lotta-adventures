import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { distanceMeters } from "@/hooks/useGeolocation";
import type { StoryStatus, DiscoveryTier } from "@/engine/storyEngine";
import type { Village } from "@/data/stories";
import { useNavigate } from "@tanstack/react-router";

type PinKind = "hint" | "visible" | "warm" | "unlocked" | "completed";

function pinIcon(kind: PinKind, emoji: string, tierUp?: boolean) {
  const palette: Record<PinKind, { fill: string; glyph: string; opacity: number; ring: string }> = {
    hint: { fill: "#b9b3a4", glyph: "?", opacity: 0.55, ring: "" },
    visible: { fill: "#a89070", glyph: emoji, opacity: 1, ring: "" },
    warm: { fill: "#d49a5c", glyph: emoji, opacity: 1, ring: "ml-warm-ring" },
    unlocked: { fill: "#7ea66a", glyph: emoji, opacity: 1, ring: "" },
    completed: { fill: "#d49a5c", glyph: "✨", opacity: 1, ring: "" },
  };
  const p = palette[kind];
  const anim = tierUp ? "ml-pin-tier-up" : "ml-pin-appear";
  return L.divIcon({
    className: "",
    iconSize: [44, 54],
    iconAnchor: [22, 52],
    html: `
      <div class="${anim} ${p.ring}" style="position:relative;width:44px;height:54px;opacity:${p.opacity};">
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
  const prevTiersRef = useRef<Map<string, DiscoveryTier>>(new Map());
  const animFrameRef = useRef<number | null>(null);
  const navigate = useNavigate();
  const hasFittedRef = useRef(false);
  const lastPanTargetRef = useRef<{ lat: number; lng: number } | null>(null);

  // Seeded hash for consistent hint-pin jitter per story ID
  function hashId(s: string): number {
    let h = 0;
    for (let i = 0; i < s.length; i++) {
      h = (h * 31 + s.charCodeAt(i)) | 0;
    }
    return h;
  }

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

    L.control
      .attribution({ prefix: false, position: "bottomright" })
      .addAttribution("© OpenStreetMap")
      .addTo(map);
    // Keep attribution visible above overflow-hidden container
    map
      .getContainer()
      .querySelector(".leaflet-control-attribution")
      ?.setAttribute(
        "style",
        "margin-bottom:4px;background:oklch(0.985 0.01 95 / 0.85);border-radius:8px;padding:2px 6px;font-size:10px;",
      );

    mapRef.current = map;

    // Mobile: recalculate tile dimensions after container fully renders
    setTimeout(() => map.invalidateSize(), 200);

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

    // Small jitter offset for hint pins so nearby ones don't overlap
    function jitter(id: string, coord: number): number {
      return coord + ((hashId(id) % 41) - 20) * 0.000004;
    }

    statuses.forEach((s) => {
      if (s.tier === "hidden") return;

      const id = s.story.id;
      visibleIds.add(id);

      const prevTier = prevTiersRef.current.get(id);
      const kind: PinKind = s.completed
        ? "completed"
        : s.unlocked
          ? "unlocked"
          : (s.tier as PinKind);
      const tierUp = prevTier != null && prevTier !== s.tier;
      prevTiersRef.current.set(id, s.tier);

      const icon = pinIcon(kind, s.story.emoji, tierUp);

      // Hint-tier pins: snap to 0.001° grid + per-story jitter for declustering
      let lat = s.story.location.lat;
      let lng = s.story.location.lng;
      if (s.tier === "hint") {
        lat = jitter(id, Math.round(lat * 1000) / 1000);
        lng = jitter(id, Math.round(lng * 1000) / 1000);
      }

      if (storyMarkersRef.current.has(id)) {
        const marker = storyMarkersRef.current.get(id)!;
        marker.setIcon(icon);
        marker.setLatLng([lat, lng]);
        return;
      }

      const marker = L.marker([lat, lng], { icon }).addTo(map);
      marker.on("click", () => {
        if (s.tier !== "unlocked" && !s.completed) return;
        navigate({ to: "/story/$storyId", params: { storyId: s.story.id } });
      });
      storyMarkersRef.current.set(id, marker);
    });

    // remove out-of-range markers and their prevTier entries
    storyMarkersRef.current.forEach((marker, id) => {
      if (!visibleIds.has(id)) {
        map.removeLayer(marker);
        storyMarkersRef.current.delete(id);
        prevTiersRef.current.delete(id);
      }
    });
  }, [statuses, navigate]);

  // FIT BOUNDS — only on first load, then user controls zoom/pan
  useEffect(() => {
    const map = mapRef.current;
    if (!map || hasFittedRef.current) return;
    const bounds = L.latLngBounds([]);

    bounds.extend([village.center.lat, village.center.lng]);
    if (position) {
      bounds.extend([position.lat, position.lng]);
    }
    statuses.forEach((s) => {
      if (s.tier === "hidden") return;
      bounds.extend([s.story.location.lat, s.story.location.lng]);
    });

    map.fitBounds(bounds, { padding: [60, 60], maxZoom: 14 });
    hasFittedRef.current = true;
  }, [statuses, position, village]);

  // USER / MOOSE MARKER — animate between positions and follow the user
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !position) return;

    const target: [number, number] = [position.lat, position.lng];

    if (!userMarkerRef.current) {
      userMarkerRef.current = L.marker(target, { icon: userIcon(), zIndexOffset: 1000 }).addTo(map);
      map.setView(target, map.getZoom(), { animate: false });
      lastPanTargetRef.current = position;
      // GPS just arrived — map may have been behind a permission card
      setTimeout(() => map.invalidateSize(), 200);
      return;
    }

    const marker = userMarkerRef.current;

    // Only re-centre the map when the user moves significantly
    // (300 m) from the last auto-panned position.  Small GPS jitter
    // or manual pan/zoom by the player no longer fights the map.
    if (lastPanTargetRef.current) {
      const dist = distanceMeters(lastPanTargetRef.current, position);
      if (dist < 300) {
        marker.setLatLng(target);
        return;
      }
    }
    lastPanTargetRef.current = position;

    const start = marker.getLatLng();
    const startTime = performance.now();
    const duration = 800;

    if (animFrameRef.current != null) cancelAnimationFrame(animFrameRef.current);

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const e = 1 - Math.pow(1 - t, 3);
      const lat = start.lat + (target[0] - start.lat) * e;
      const lng = start.lng + (target[1] - start.lng) * e;
      marker.setLatLng([lat, lng]);
      // Follow the user: pan map to keep marker centered
      map.panTo([lat, lng], { animate: false });
      if (t < 1) animFrameRef.current = requestAnimationFrame(tick);
    };
    animFrameRef.current = requestAnimationFrame(tick);
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
