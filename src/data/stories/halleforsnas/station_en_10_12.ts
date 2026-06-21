import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const station_en_10_12: Story = {
  id: "station_en_10_12",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["10-12"],
  title: "Rails and a Divided Village",
  subtitle: "How the Railway Shaped Hälleforsnäs",
  location: { ...LOCATIONS.STATION, label: "Station" },
  audio: "/audio/station_en_10_12.mp3",
  emoji: "🚉",
  accent: "rust",
  sources: ["1", "4", "6"],
  text: `The railway changed Hälleforsnäs.

Before the tracks were laid, the bruk was the entire town. Workers lived in torps nearby. Everything revolved around iron.

The original station building was inaugurated in 1897.

Suddenly, the area around the station became attractive. A sawmill was established opposite. A new community grew up around the railway, separate from the bruk village in the south. This "station community" had its own school, shops, and identity.

For decades, the two halves of Hälleforsnäs — the bruk village and the station community — existed side by side. Eventually they merged into one town.

The bruk itself was saved by the railway. When European competition intensified in the late 1800s, many Swedish bruk closed. Hälleforsnäs survived partly because it could now transport goods by rail.

In 2011, the station building was torn down.

Today, trains still stop here. Nothing remains of the original building but the memory — and the story of a town shaped by iron and rails.`,
  mission: [
    "Observe the old platform area from a safe distance",
    "Look for the sawmill site opposite",
    "Trace the old railway embankment (gamla banvallen) on a map",
  ],
  reward: "Railway Historian",
};
