import { useState } from "react";
import { AppStateProvider, useAppState } from "@/hooks/useAppState";
import { RouterProvider } from "@tanstack/react-router";
import { ProfilePicker } from "@/components/ProfilePicker";
import { CreateProfile } from "@/components/CreateProfile";
import { SplashPage } from "@/components/SplashPage";
import { router } from "./router";

function AppGate() {
  const { profiles, activeProfile } = useAppState();
  const [showSplash, setShowSplash] = useState(true);
  const [showCreate, setShowCreate] = useState(false);

  if (showSplash) {
    return <SplashPage onStart={() => setShowSplash(false)} />;
  }

  if (activeProfile) {
    return <RouterProvider router={router} />;
  }

  const namedProfiles = profiles.filter((p) => p.name.trim());

  if (namedProfiles.length === 0 || showCreate) {
    return <CreateProfile onDone={() => setShowCreate(false)} />;
  }

  return (
    <ProfilePicker
      onSelect={() => {}}
      onCreate={() => setShowCreate(true)}
    />
  );
}

export default function App() {
  return (
    <AppStateProvider>
      <AppGate />
    </AppStateProvider>
  );
}
