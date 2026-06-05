import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const gjuterimuseum_en_5_6: Story = {
  id: "gjuterimuseum_en_5_6",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["5-6"],
  title: "The Foundry That Built the Town",
  subtitle: "The Foundry Museum",
  location: { ...LOCATIONS.FOUNDRY_MUSEUM, label: "Hälleforsnäs Foundry Museum" },
  audio: "/audio/gjuterimuseum_en_5_6.mp3",
  emoji: "⚒️",
  accent: "ember",
  sources: ["1", "5"],
  text: "Inside here, you would once have heard a deafening noise.\n\nHammering hammers.\nHissing steam.\nPeople shouting to each other.\n\nFor more than 300 years, things were made of iron here — everything from stoves to machine parts.\n\nPeople came from near and far to work.\n\nThey got sweaty and sooty.\nBut they had each other.\n\nIt was hard work.\nThe heat from the furnaces was enormous.\n\nToday, the foundry is a museum.\nYou can see the tools that were used, photographs from the past, and even a laboratory.\n\nAnd if you ask someone who worked here — they can tell you exactly what it sounded like.",
  mission: ["Look inside the museum", "Find something rusty", "Imagine the sound of the machines"],
  reward: "Foundry Explorer",
};
