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
  image: "images/stories/hastkon.jpeg",
  emoji: "🐴",
  accent: "ember",
  sources: ["4", "9"],
  text: `The building beside Kolhuset was once known simply as Hästskon — The Horseshoe.

From above, the shape of the building curved like a horseshoe around a courtyard.

Long ago, this was the stable area of the ironworks.

But in 1920, the building changed.

Workers moved in.

Single laborers rented tiny rooms.
Families lived in small apartments.
A dining hall opened for tired workers returning from long shifts at the mill.

For a time, the building also became a library.

Imagine that contrast.

Heavy industry outside.
Books and silence inside.

Then came the fire in 2020.

Flames damaged the old building badly.

And suddenly, something that had survived generations of workers, families, and changing times almost disappeared.

But Hästskon was not abandoned.

Today, plans exist to restore it.

As if the village itself decided the building still had stories left to tell.`,
  mission: [
    "Walk around the shape of the building",
    "Imagine life here 100 years ago",
    "Look for old details that survived the fire",
  ],
  reward: "Keeper of Hästskon",
};
