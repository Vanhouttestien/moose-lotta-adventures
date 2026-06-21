import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const station_en_3_4: Story = {
  id: "station_en_3_4",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["3-4"],
  title: "The Little Train House",
  subtitle: "Where the Trains Stop",
  location: { ...LOCATIONS.STATION, label: "Station" },
  audio: "/audio/station_en_3_4.mp3",
  emoji: "🚂",
  accent: "bark",
  sources: ["1", "4"],
  text: `Choo choo!

This is where the trains come and go.

A long time ago, there was a pretty building here.

People bought tickets inside.

They waited for their train.

Then the train came and took them away.

The building is gone now.

But the trains still stop here.

Listen.

Can you hear a train coming?`,
  mission: [
    "Listen for a train sound",
    "Make a train sound — Choo choo!",
    "Pretend you are a train driver",
  ],
  reward: "Train Spotter",
};
