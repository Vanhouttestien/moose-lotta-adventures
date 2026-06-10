import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

const { mockStories, mockVillages } = vi.hoisted(() => ({
  mockStories: [
    { id: "s1", villageId: "v1", location: { label: "Place 1" }, reward: "Star" },
    { id: "s2", villageId: "v1", location: { label: "Place 2" }, reward: "Shield" },
    { id: "s3", villageId: "v1", location: { label: "Place 3" }, reward: "Crown" },
    { id: "s4", villageId: "v1", location: { label: "Place 4" }, reward: "Gem" },
    { id: "s5", villageId: "v1", location: { label: "Place 5" }, reward: "Key" },
  ],
  mockVillages: [{ id: "v1", name: "Test Village", region: "", center: { lat: 0, lng: 0 } }],
}));

vi.mock("@/hooks/useAppState", () => ({
  useAppState: () => ({
    state: {
      language: "en" as const,
      ageGroup: "5-6" as const,
      completedStoryIds: ["s1", "s2", "s_other"],
      rewards: [] as string[],
      onboarded: true,
    },
    currentVillageId: "v1",
    profiles: [],
    activeProfile: null,
    selectProfile: vi.fn(),
    createProfile: vi.fn(),
    deleteProfile: vi.fn(),
    updateProfileData: vi.fn(),
    setCurrentVillageId: vi.fn(),
    update: vi.fn(),
    completeStory: vi.fn(),
  }),
}));

vi.mock("@/data/stories", () => ({
  getStories: vi.fn().mockResolvedValue(mockStories),
  villages: mockVillages,
}));

vi.mock("@/i18n", () => ({
  t: (_lang: string, key: string) => {
    const map: Record<string, string> = {
      "ui.rewards": "Treasures",
      "ui.collected": "collected treasures",
      "ui.progress": "progress",
      "ui.noRewards": "No treasures yet. Go explore!",
    };
    return map[key] ?? key;
  },
}));

vi.mock("@/components/AppShell", () => ({
  AppShell: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to, className }: { children: React.ReactNode; to: string; className?: string }) =>
    <a href={to} className={className}>{children}</a>,
  createFileRoute: () => () => ({}),
}));

vi.mock("@/components/BottomNav", () => ({
  BottomNav: () => null,
}));

vi.mock("@/components/ProfileBadge", () => ({
  ProfileBadge: () => null,
}));

vi.mock("@/components/ProfileSwitcher", () => ({
  ProfileSwitcher: () => null,
}));

vi.mock("@/components/CreateProfile", () => ({
  CreateProfile: () => null,
}));

describe("RewardsPage", () => {
  it("shows correct count for completed stories in current village", async () => {
    const { RewardsPage } = await import("./rewards");
    render(<RewardsPage />);

    const collected = await screen.findByText(/2 collected treasures/);
    expect(collected).toBeInTheDocument();
  });

  it("shows correct remaining count", async () => {
    const { RewardsPage } = await import("./rewards");
    render(<RewardsPage />);

    const remaining = await screen.findByText(/3 more adventures/);
    expect(remaining).toBeInTheDocument();
  });

  it("shows correct percentage matching village-scoped progress", async () => {
    const { RewardsPage } = await import("./rewards");
    render(<RewardsPage />);

    const pct = await screen.findByText(/40%/);
    expect(pct).toBeInTheDocument();
  });

  it("keeps numbers consistent: doneHere + remaining = total", async () => {
    const { RewardsPage } = await import("./rewards");
    render(<RewardsPage />);

    const collected = await screen.findByText(/(\d+) collected treasures/);
    const remaining = await screen.findByText(/(\d+) more adventures/);

    const doneMatch = collected.textContent?.match(/(\d+)/);
    const remainingMatch = remaining.textContent?.match(/(\d+)/);

    const doneHere = doneMatch ? Number(doneMatch[1]) : 0;
    const remainingCount = remainingMatch ? Number(remainingMatch[1]) : 0;

    expect(doneHere + remainingCount).toBe(mockStories.length);
  });
});
