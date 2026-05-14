import { useAppState } from "@/hooks/useAppState";
import { User, ChevronDown } from "lucide-react";

export function ProfileBadge({ onPress }: { onPress: () => void }) {
  const { activeProfile } = useAppState();

  if (!activeProfile) return null;

  return (
    <button
      onClick={onPress}
      className="flex items-center gap-1.5 rounded-full bg-card/80 px-3 py-1.5 text-xs font-medium text-foreground shadow-[var(--shadow-soft)] backdrop-blur transition-colors hover:bg-card"
    >
      <User size={14} />
      <span className="max-w-[100px] truncate">{activeProfile.name}</span>
      <ChevronDown size={12} />
    </button>
  );
}
