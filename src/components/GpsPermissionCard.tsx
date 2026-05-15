import type { GeoStatus } from "@/hooks/useGeolocation";
import { useAppState } from "@/hooks/useAppState";
import { t } from "@/i18n";
import { MapPin } from "lucide-react";

export function GpsPermissionCard({
  status,
  onEnable,
}: {
  status: GeoStatus;
  onEnable: () => void;
}) {
  const { state } = useAppState();
  if (status === "watching") return null;

  return (
    <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <MapPin className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-base text-foreground">
            {t(state.language, "gps.permission.title")}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {status === "unavailable"
              ? t(state.language, "gps.denied")
              : t(state.language, "gps.permission.body")}
          </p>
          <button
            onClick={onEnable}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cozy)] active:scale-95"
          >
            {t(state.language, "gps.enable")}
          </button>
        </div>
      </div>
    </div>
  );
}
