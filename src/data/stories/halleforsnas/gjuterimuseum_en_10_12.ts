import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const gjuterimuseum_en_10_12: Story = {
  id: "gjuterimuseum_en_10_12",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["10-12"],
  title: "The Legacy of Iron",
  subtitle: "The Foundry Museum",
  location: { ...LOCATIONS.FOUNDRY_MUSEUM, label: "Hälleforsnäs Foundry Museum" },
  audio: "/audio/gjuterimuseum_en_10_12.mp3",
  emoji: "⚒️",
  accent: "ember",
  sources: ["1", "5"],
  text: "Hälleforsnäs Foundry Museum is no ordinary museum. It is a living working-life museum housed in the very mill buildings where iron was once shaped.\n\nThe ironworks operated for over 330 years. During that time, everything from iron stoves and manhole covers to advanced machine components was manufactured here and exported worldwide.\n\nThe museum's exhibits show workplaces and tools from different eras: how casting was done, how models were made, and how the finished product was ground and finished. Photographs and archival material offer insight into the workers' daily lives — a hard existence shaped by heat, soot, noise, and long shifts.\n\nOne of the most fascinating parts is the laboratory.\n\nThe museum also houses the \"Brukets blå\" exhibition about Hälleforsnäs IF's legendary bandy team, which put the town on the map.\n\nThe association behind the museum has around 100 members and offers guided tours with people who themselves worked at the mill.\n\nThe Foundry Museum is more than a collection of objects. It is a story of labour, community, and an era that shaped an entire society.",
  mission: [
    "Go inside and study tools from different eras",
    "Visit the laboratory — why is it unique?",
    "Find out what Brukets blå was all about",
  ],
  reward: "Iron Historian",
};
