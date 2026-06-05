import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const gjuterimuseum_en_7_9: Story = {
  id: "gjuterimuseum_en_7_9",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["7-9"],
  title: "The Museum That Remembers the Mill",
  subtitle: "The Foundry Museum",
  location: { ...LOCATIONS.FOUNDRY_MUSEUM, label: "Hälleforsnäs Foundry Museum" },
  audio: "/audio/gjuterimuseum_en_7_9.mp3",
  emoji: "⚒️",
  accent: "ember",
  sources: ["1", "5"],
  text: 'Welcome to Hälleforsnäs Foundry Museum — a working-life museum that tells the story of the ironworks and the people who worked here.\n\nFor more than 300 years, iron objects were made here: everything from cast-iron stoves and manhole covers to machine components exported around the world.\n\nThe foundry was not just a workplace. It was the very heart of the community. All of Hälleforsnäs grew around the industry — housing, railway, schools, and shops.\n\nInside the museum, you can see how it really looked. Tools and workplaces from different eras. Photographs showing people at work. And the untouched laboratory.\n\nThere is also an exhibition about "Brukets blå" — Hälleforsnäs\'s famous bandy team.\n\nThe museum is run by a non-profit association with about 100 members. You can book guided tours with people who actually worked here.\n\nHere, the iron and fire are not just history. They still live on in the stories.',
  mission: [
    "Go inside and look at the tools",
    "Find the laboratory — what makes it special?",
    "Ask a guide what it was like to work here",
  ],
  reward: "Mill Expert",
};
