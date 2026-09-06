import { useState, type ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { ProfileBadge } from "./ProfileBadge";
import { ProfileSwitcher } from "./ProfileSwitcher";
import { CreateProfile } from "./CreateProfile";
import { useAppState } from "@/hooks/useAppState";
import { useViewportHeight } from "@/hooks/useViewportHeight";

export function AppShell({
  children,
  hideNav,
  hideProfile,
}: {
  children: ReactNode;
  hideNav?: boolean;
  hideProfile?: boolean;
}) {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const { update } = useAppState();
  const minHeightStyle = useViewportHeight(true);

  if (showCreate) {
    return (
      <CreateProfile
        onDone={() => setShowCreate(false)}
        onShowOnboarding={() => update({ onboarded: false })}
      />
    );
  }

  return (
    <div className="mx-auto flex max-w-md flex-col bg-background" style={minHeightStyle}>
      {!hideProfile && (
        <div className="sticky top-0 z-[900] flex items-center justify-end px-4 pt-1 pb-1">
          <ProfileBadge onPress={() => setShowSwitcher(true)} />
        </div>
      )}
      <main id="main-content" className={`flex flex-1 flex-col ${hideNav ? "" : "pb-24"}`}>
        {children}
      </main>
      {!hideNav && <BottomNav />}
      <ProfileSwitcher
        open={showSwitcher}
        onClose={() => setShowSwitcher(false)}
        onCreate={() => {
          setShowSwitcher(false);
          setShowCreate(true);
        }}
      />
    </div>
  );
}
