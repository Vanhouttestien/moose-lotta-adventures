import { useState, type ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { ProfileBadge } from "./ProfileBadge";
import { ProfileSwitcher } from "./ProfileSwitcher";
import { CreateProfile } from "./CreateProfile";

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

  if (showCreate) {
    return <CreateProfile onDone={() => setShowCreate(false)} />;
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      {!hideProfile && (
        <div className="sticky top-0 z-[900] flex items-center justify-end px-4 pt-3 pb-1">
          <ProfileBadge onPress={() => setShowSwitcher(true)} />
        </div>
      )}
      <main id="main-content" className={`flex-1 ${hideNav ? "" : "pb-24"}`}>
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
