import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const hastskon_en_adult: Story = {
  id: "hastskon_en_adult",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["adult"],
  title: "The Horseshoe Building",
  subtitle: "Hästskon",
  location: { ...LOCATIONS.HASTSKON, label: "Hästskon" },
  audio: "/audio/hastskon_en_adult.mp3",
  emoji: "🐴",
  accent: "ember",
  sources: ["4", "9"],
  text: "The building beside Kolhuset was once known simply as Hästskon — The Horseshoe.\n\nFrom above, the shape of the building curved like a horseshoe around a courtyard.\n\nLong ago, this was the stable area of the ironworks.\n\nBut in 1920, the building changed.\n\nWorkers moved in.\n\nSingle laborers rented tiny rooms.\nFamilies lived in small apartments.\nA dining hall opened for tired workers returning from long shifts at the mill.\n\nFor a time, the building also became a library.\n\nImagine that contrast.\n\nHeavy industry outside.\nBooks and silence inside.\n\nThen came the fire in 2020.\n\nFlames damaged the old building badly.\n\nAnd suddenly, something that had survived generations of workers, families, and changing times almost disappeared.\n\nBut Hästskon was not abandoned.\n\nToday, plans exist to restore it.\n\nAs if the village itself decided the building still had stories left to tell.",
  mission: [
    "Walk around the shape of the building",
    "Imagine life here 100 years ago",
    "Look for old details that survived the fire",
  ],
  reward: "Keeper of Hästskon",
};
