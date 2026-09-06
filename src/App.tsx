import { useState } from "react";
import { AppStateProvider, useAppState } from "@/hooks/useAppState";
import { RouterProvider } from "@tanstack/react-router";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ProfilePicker } from "@/components/ProfilePicker";
import { CreateProfile } from "@/components/CreateProfile";
import { SplashPage } from "@/components/SplashPage";
import { OnboardingSequence } from "@/components/OnboardingSequence";
import { router } from "./router";

function AppGate() {
  const { profiles, activeProfile, state, update } = useAppState();
  const [showSplash, setShowSplash] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  const finishOnboarding = () => {
    update({ onboarded: true });
    setShowOnboarding(false);
  };

  if (showSplash) {
    return <SplashPage onStart={() => setShowSplash(false)} />;
  }

  if (activeProfile) {
    if (showOnboarding) {
      return <OnboardingSequence onComplete={finishOnboarding} onSkip={finishOnboarding} />;
    }
    return <RouterProvider router={router} />;
  }

  if (showOnboarding) {
    return <OnboardingSequence onComplete={finishOnboarding} onSkip={finishOnboarding} />;
  }

  const namedProfiles = profiles.filter((p) => p.name.trim());

  if (namedProfiles.length === 0 || showCreate) {
    return (
      <CreateProfile
        onDone={() => {
          setShowCreate(false);
          setShowOnboarding(true);
        }}
        onShowOnboarding={() => setShowOnboarding(true)}
      />
    );
  }

  return <ProfilePicker onSelect={() => {}} onCreate={() => setShowCreate(true)} />;
}

export default function App() {
  return (
    <AppStateProvider>
      <ErrorBoundary>
        <AppGate />
      </ErrorBoundary>
    </AppStateProvider>
  );
}
