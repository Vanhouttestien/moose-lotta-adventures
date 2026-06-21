import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const station_en_7_9: Story = {
  id: "station_en_7_9",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["7-9"],
  title: "The Heart of the Station Community",
  subtitle: "How the Railway Shaped Hälleforsnäs",
  location: { ...LOCATIONS.STATION, label: "Station" },
  audio: "/audio/station_en_7_9.mp3",
  emoji: "🚉",
  accent: "rust",
  sources: ["1", "4", "6"],
  text: `The station building in Hälleforsnäs was opened in 1897.

For over a century, it was the heart of travel in the area.

People caught trains to Eskilstuna, Flen, and beyond.

Goods were loaded and unloaded.

A sawmill stood opposite, making the most of the railway connection.

The station was so important that the whole northern part of Hälleforsnäs grew up around it, forming a separate "station community" that later merged with the bruk village.

Eventually, the station was no longer needed.

In 2011, the building was torn down.

Today, trains still stop here.

And you are standing where a historic building once stood — a building that connected this village to the rest of the world.`,
  mission: [
    "Point to where the station building once stood",
    "Observe the station area from a safe distance",
    "Discuss: what would you have done with the building?",
  ],
  reward: "Railway Scholar",
};
