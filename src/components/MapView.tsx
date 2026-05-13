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

  return L.divIcon({
    className: "",
    iconSize: [44, 54],
    iconAnchor: [22, 52],
    html: `
      <div style="position:relative;width:44px;height:54px;">
        <svg viewBox="0 0 44 54" width="44" height="54">
          <path d="M22 2 C 10 2 2 11 2 22 C 2 36 22 52 22 52 C 22 52 42 36 42 22 C 42 11 34 2 22 2 Z"
                fill="${c}" stroke="white" stroke-width="2.5"/>
          <circle cx="22" cy="22" r="8" fill="white"/>
        </svg>

        <div
          style="
            position:absolute;
            inset:0;
            display:flex;
            align-items:flex-start;
            justify-content:center;
            padding-top:13px;
            font-size:14px;
          "
        >
          ${
            status === "completed"
              ? "✨"
              : status === "unlocked"
                ? "🫎"
                : "🌲"
          }
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

function distanceMeters(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
) {
  const R = 6371000;

  const toRad = (d: number) => (d * Math.PI) / 180;

  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);

  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);

  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(dLng / 2) ** 2;

  return 2 * R * Math.asin(Math.sqrt(h));
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

  const storyMarkersRef = useRef<Map<string, L.Marker>>(
    new Map(),
  );

  const navigate = useNavigate();

  const hasCenteredRef = useRef(false);

  // INIT MAP
  useEffect(() => {
    if (!ref.current || mapRef.current) return;

    const map = L.map(ref.current, {
      center: [village.center.lat, village.center.lng],
      zoom: 16,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
      },
    ).addTo(map);

    L.control
      .attribution({ prefix: false })
      .addAttribution("© OpenStreetMap")
      .addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [village]);

  // STORY MARKERS
  useEffect(() => {
    const map = mapRef.current;

    if (!map || !position) return;

    const visibleIds = new Set<string>();

    statuses.forEach((s) => {
      const d = distanceMeters(
        position,
        s.story.location,
      );

      if (d > 3000) return;

      const id = s.story.id;

      visibleIds.add(id);

      const status = s.completed
        ? "completed"
        : s.unlocked
          ? "unlocked"
          : "available";

      // update existing marker
      if (storyMarkersRef.current.has(id)) {
        const marker =
          storyMarkersRef.current.get(id)!;

        marker.setIcon(pinIcon(status));

        return;
      }

      // create marker
      const marker = L.marker(
        [
          s.story.location.lat,
          s.story.location.lng,
        ],
        {
          icon: pinIcon(status),
        },
      ).addTo(map);

      marker.on("click", () => {
        navigate({
          to: "/story/$storyId",
          params: {
            storyId: s.story.id,
          },
        });
      });

      storyMarkersRef.current.set(id, marker);

      // radius circle
      L.circle(
        [
          s.story.location.lat,
          s.story.location.lng,
        ],
        {
          radius: s.story.location.radius,
          color: "#7ea66a",
          fillColor: "#7ea66a",
          fillOpacity: 0.08,
          weight: 1,
        },
      ).addTo(map);
    });

    // remove out-of-range markers
    storyMarkersRef.current.forEach(
      (marker, id) => {
        if (!visibleIds.has(id)) {
          map.removeLayer(marker);

          storyMarkersRef.current.delete(id);
        }
      },
    );
  }, [statuses, position, navigate]);

  // USER / MOOSE MARKER
  useEffect(() => {
    const map = mapRef.current;

    if (!map || !position) return;

    const latLng: [number, number] = [
      position.lat,
      position.lng,
    ];

    // create or move moose
    if (!userMarkerRef.current) {
      userMarkerRef.current = L.marker(
        latLng,
        {
          icon: userIcon(),
        },
      ).addTo(map);
    } else {
      userMarkerRef.current.setLatLng(
        latLng,
      );
    }

    // center map on user
    if (!hasCenteredRef.current) {
      map.setView(latLng, 13);

      hasCenteredRef.current = true;
    } else {
      map.panTo(latLng, {
        animate: true,
      });
    }
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