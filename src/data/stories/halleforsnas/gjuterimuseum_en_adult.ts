import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const gjuterimuseum_en_adult: Story = {
  id: "gjuterimuseum_en_adult",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["adult"],
  title: "Iron and Fire",
  subtitle: "The Foundry",
  location: { ...LOCATIONS.FOUNDRY_MUSEUM, label: "Hälleforsnäs Foundry Museum" },
  audio: "/audio/gjuterimuseum_en_adult.mp3",
  emoji: "⚒️",
  accent: "ember",
  sources: ["1", "5"],
  text: "This is where iron shaped Hälleforsnäs.\n\nThe sound must have been overwhelming.\n\nHammering metal.\nFire.\nSteam.\nWorkers shouting across the factory floor.\n\nFor generations, people worked here at the mill.\n\nThe heat from the furnaces could be felt far outside the buildings.\nAnd everywhere there was soot, metal dust, and the smell of oil.\n\nThe work was hard.\nBut the mill also gave people homes, food, and community.\n\nThe entire village grew around iron.\n\nToday, much of it is gone.\nThe machines have fallen silent.\n\nBut if you close your eyes for a moment…\n\nyou can almost hear the factory waking up again.",
  mission: [
    "Listen for metallic sounds",
    "Find something made of iron",
    "Imagine working here 100 years ago",
  ],
  reward: "Iron Walker",
};
