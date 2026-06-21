import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const station_en_5_6: Story = {
  id: "station_en_5_6",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["5-6"],
  title: "The Station House",
  subtitle: "A Building from 1897",
  location: { ...LOCATIONS.STATION, label: "Station" },
  audio: "/audio/station_en_5_6.mp3",
  emoji: "🚉",
  accent: "rust",
  sources: ["1", "4"],
  text: `The station building was built in 1897.

For over a hundred years, passengers arrived and departed here.

People travelled to Eskilstuna, Flen, and beyond.

Goods were loaded and unloaded.

A sawmill stood opposite, making the most of the railway connection.

But then the railway company did not need the building anymore.

In 2011, the building was torn down.

Today, only the platform remains.

But trains still stop here every day.

And every time you stand on this platform, you are standing on a piece of history.`,
  mission: [
    "Point to where the station building once stood",
    "Make your best train whistle sound",
    "Imagine you are a passenger boarding the train in 1897",
  ],
  reward: "Station Master",
};
