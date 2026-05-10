// src/routes/__tests__/story.test.tsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";

vi.mock("@tanstack/react-router", () => {
  return {
    createFileRoute: () => (cfg: any) => {
      return {
        ...cfg,
        useLoaderData: () => (cfg.loader ? cfg.loader({ params: { storyId: "test" } }) : undefined),
      };
    },
    Link: (props: any) => <a {...props} />, // simple anchor
    notFound: () => Symbol("notFound"),
    useNavigate: () => () => {},
  };
});

vi.mock("@/components/AudioPlayer", () => {
  return {
    AudioPlayer: ({ label }: { label?: string }) => {
      return <div data-testid="audio-player">{label ?? "audio"}</div>;
    },
  };
});

vi.mock("@/hooks/useAppState", () => {
  return {
    useAppState: () => ({
      state: { language: "sv", completedStoryIds: [], rewards: [] },
      update: vi.fn(),
      completeStory: vi.fn(),
    }),
  };
});

vi.mock("@/data/i18n", () => {
  return {
    t: (lang: string, key: string) => {
      const map: Record<string, string> = {
        searching: "Searching",
        locked: "Locked",
        feels: "Feels",
        iAmHere: "I am here",
        toMap: "To map",
        mission: "Mission",
        reward: "Reward",
        markComplete: "Mark complete",
      };
      return map[key] ?? key;
    },
  };
});

// Mock AppShell which is imported via alias @/components/AppShell
vi.mock("@/components/AppShell", () => {
  return {
    AppShell: ({ children }: any) => <div>{children}</div>,
  };
});

// Mock hooks/useGeolocation alias so imports inside the route resolve
vi.mock("@/hooks/useGeolocation", () => {
  return {
    useGeolocation: vi.fn(),
    distanceMeters: vi.fn(),
  };
});

import { Route } from "../story.$storyId";
import type { Story } from "@/data/stories";
import * as geolocationMod from "@/hooks/useGeolocation";

const SAMPLE_STORY: Story = {
  id: "test_story",
  villageId: "v1",
  language: "sv",
  ageGroup: "5-6",
  title: "Test Title",
  subtitle: "Test Subtitle",
  location: { lat: 59.0, lng: 16.0, radius: 40, label: "Test Place" },
  audio: "/audio/test.mp3",
  text: "This is the story text.",
  mission: ["one", "two"],
  reward: "A reward",
  emoji: "🫎",
  accent: "bark",
};

describe("Story page proximity gate", () => {
  const useGeolocationMock = (geolocationMod as any).useGeolocation;
  const distanceMetersMock = (geolocationMod as any).distanceMeters;

  beforeEach(() => {
    vi.resetAllMocks();
    Route.useLoaderData = () => SAMPLE_STORY;
  });

  test("renders audio player and story text when within 200m", async () => {
    useGeolocationMock.mockImplementation(() => ({ position: { lat: 59.0, lng: 16.0, accuracy: 5 }, status: "watching" }));
    distanceMetersMock.mockImplementation(() => 100);

    render(<Route.component />);

    expect(screen.queryByTestId("audio-player")).toBeInTheDocument();
    expect(screen.getByText(SAMPLE_STORY.text)).toBeInTheDocument();
  });

  test("hides audio player and story text when farther than 200m", async () => {
    useGeolocationMock.mockImplementation(() => ({ position: { lat: 58.0, lng: 15.0, accuracy: 5 }, status: "watching" }));
    distanceMetersMock.mockImplementation(() => 1000);

    render(<Route.component />);

    expect(screen.queryByTestId("audio-player")).not.toBeInTheDocument();
    expect(screen.queryByText(SAMPLE_STORY.text)).not.toBeInTheDocument();

    expect(screen.getByText(/Du är ungefär|Searching|Locked/i)).toBeInTheDocument();
  });

  test("manual override button reveals text and audio when pressed", async () => {
    useGeolocationMock.mockImplementation(() => ({ position: { lat: 58.0, lng: 15.0, accuracy: 5 }, status: "watching" }));
    distanceMetersMock.mockImplementation(() => 1000);

    render(<Route.component />);

    expect(screen.queryByTestId("audio-player")).not.toBeInTheDocument();
    expect(screen.queryByText(SAMPLE_STORY.text)).not.toBeInTheDocument();

    const btn = screen.getByRole("button", { name: /I am here|Jag är här|I'm here/i });
    fireEvent.click(btn);

    await waitFor(() => {
      expect(screen.queryByTestId("audio-player")).toBeInTheDocument();
      expect(screen.getByText(SAMPLE_STORY.text)).toBeInTheDocument();
    });
  });
});
