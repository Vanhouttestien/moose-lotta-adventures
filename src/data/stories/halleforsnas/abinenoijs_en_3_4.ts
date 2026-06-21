import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const abinenoijs_en_3_4: Story = {
  id: "abinenoijs_en_3_4",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["3-4"],
  title: "The Park That Was Almost a Dump",
  subtitle: "Abine Noijs Park",
  location: { ...LOCATIONS.ABINE_NOIJS_PARK, label: "Abine Noijs Park" },
  audio: "/audio/abinenoijs_en_3_4.mp3",
  emoji: "🌳",
  accent: "moss",
  sources: ["2", "4", "7"],
  text: `This park is special.

It was not always a park.

A long time ago, it was a dump.

Trucks dropped old factory waste here.

The ground was dirty and not safe.

Then people cleaned it all up.

They took the bad stuff away.

They brought good soil.

They planted trees and grass.

Now it is a beautiful park.

There are sculptures to look at.

You can walk and play here.

The park is named after Abine Noij.

He started the whole bruk a very, very long time ago!

He would be happy to see this place today.`,
  mission: [
    "Find a sculpture in the park",
    "Touch the grass",
    "Look for something that was once underground",
  ],
  reward: "Park Explorer",
};
