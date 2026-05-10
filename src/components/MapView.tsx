import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { StoryStatus } from "@/engine/storyEngine";
import type { Village } from "@/data/stories";
import { useNavigate } from "@tanstack/react-router";

function pinIcon(status: "available" | "unlocked" | "completed") {
  const colors = {
    available: "#a89070",
    unlocked: "#7ea66a",
    completed: "#d49a5c",
  } as const;
  const c = colors[status];
  const html = `
    <div style="position:relative;width:44px;height:54px;">
      <svg viewBox="0 0 44 54" width="44" height="54">
        <path d="M22 2 C 10 2 2 11 2 22 C 2 36 22 52 22 52 C 22 52 42 36 42 22 C 42 11 34 2 22 2 Z"
              fill="${c}" stroke="white" stroke-width="2.5"/>
        <circle cx="22" cy="22" r="8" fill="white"/>
      </svg>
      <div style="position:absolute;inset:0;display:flex;align-items:flex-start;justify-content:center;padding-top:13px;font-size:14px;">
        ${status === "completed" ? "✨" : status === "unlocked" ? "🫎" : "🌲"}
      </div>
    </div>`;
  return L.divIcon({ html, className: "", iconSize: [44, 54], iconAnchor: [22, 52] });
}

function userIcon() {
  const html = `<div style="width:22px;height:22px;border-radius:50%;background:#5d8a4f;border:4px solid white;box-shadow:0 0 0 4px rgba(93,138,79,0.3);"></div>`;
  return L.divIcon({ html, className: "", iconSize: [22, 22], iconAnchor: [11, 11] });
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
  const navigate = useNavigate();

  useEffect(() => {
    if (!ref.current || mapRef.current) return;
    const map = L.map(ref.current, {
      center: [village.center.lat, village.center.lng],
      zoom: 16,
      zoomControl: false,
      attributionControl: false,
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);
    L.control.attribution({ prefix: false }).addAttribution("© OpenStreetMap").addTo(map);
    mapRef.current = map;

    statuses.forEach((s) => {
      const status = s.completed ? "completed" : s.unlocked ? "unlocked" : "available";
      const marker = L.marker([s.story.location.lat, s.story.location.lng], {
        icon: pinIcon(status),
      }).addTo(map);
      marker.on("click", () => {
        navigate({ to: "/story/$storyId", params: { storyId: s.story.id } });
      });
      L.circle([s.story.location.lat, s.story.location.lng], {
        radius: s.story.location.radius,
        color: "#7ea66a",
        fillColor: "#7ea66a",
        fillOpacity: 0.08,
        weight: 1,
      }).addTo(map);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !position) return;
    if (!userMarkerRef.current) {
      userMarkerRef.current = L.marker([position.lat, position.lng], {
        icon: userIcon(),
      }).addTo(map);
    } else {
      userMarkerRef.current.setLatLng([position.lat, position.lng]);
    }
  }, [position]);

  return (
    <div ref={ref} className="h-full w-full" style={{ background: "var(--forest-mist)" }} />
  );
}
