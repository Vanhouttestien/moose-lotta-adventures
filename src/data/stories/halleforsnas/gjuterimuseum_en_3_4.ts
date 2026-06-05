import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const gjuterimuseum_en_3_4: Story = {
  id: "gjuterimuseum_en_3_4",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["3-4"],
  title: "Fire and Iron",
  subtitle: "The Foundry Museum",
  location: { ...LOCATIONS.FOUNDRY_MUSEUM, label: "Hälleforsnäs Foundry Museum" },
  audio: "/audio/gjuterimuseum_en_3_4.mp3",
  emoji: "⚒️",
  accent: "ember",
  sources: ["1", "5"],
  text: "Look at the big building!\n\nA very long time ago, many people worked here.\n\nThey made things out of iron.\n\nIron is super strong!\n\nThe machines banged and roared.\n\nFire and heat were everywhere.\n\nToday it is quiet.\n\nBut inside the museum, you can see the tools people used.\n\nAnd maybe… if you listen very carefully…\n\nyou can hear the echo of everyone who worked here.",
  mission: ["Look at the building", "Find something made of iron", "Pretend to be a worker"],
  reward: "Little Iron Worker",
};
