import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const station_en_adult: Story = {
  id: "station_en_adult",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["adult"],
  title: "The Station That Disappeared",
  subtitle: "Hälleforsnäs Station",
  location: { ...LOCATIONS.STATION, label: "Hälleforsnäs Station" },
  audio: "/audio/station_en_adult.mp3",
  emoji: "🚉",
  accent: "rust",
  sources: ["1", "4"],
  text: `At the turn of the century, the station was a busy place in Hälleforsnäs.

People arrived.
People left.
Goods traveled through the village toward the ironworks and sawmill.

The railway connected this small industrial community to the rest of Sweden.

At first there was only one station building.
But over time, more side buildings appeared.

The soundscape here would once have been completely different.

Steam.
Metal.
Voices.
Wooden carts.
The sharp whistle of trains.

Across from the station stood the sawmill, making transport easier for the industries that shaped the entire village.

The old station building was demolished in 2011.

But trains still stop here.

The platform is still in use, even without the building that once defined it.

The station has become what it always was underneath — a place where people arrive and leave.

No building needed.`,
  mission: [
    "Observe the railway from a safe distance, or imagine a train passing",
    "Look across the landscape from a safe spot",
    "Think about where people here once traveled",
  ],
  reward: "Railway Witness",
};
