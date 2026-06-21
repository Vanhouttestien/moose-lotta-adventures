import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const siggeskiosk_en_adult: Story = {
  id: "siggeskiosk_en_adult",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["adult"],
  title: "The Kiosk by the Brown River",
  subtitle: "Sigge's Kiosk",
  location: { ...LOCATIONS.SIGGES_KIOSK, label: "Sigge's Kiosk" },
  audio: "/audio/siggeskiosk_en_adult.mp3",
  emoji: "🍦",
  accent: "water",
  text: `Today, almost nothing remains of Sigge's kiosk.

Only traces.
A concrete foundation visible behind the railing.
A memory beside the water.

But in the 1950s and 60s, this was a lively meeting place.

The kiosk stood beside the river opposite the mill.
Yellow walls.
Brown corners.
A bridge leading visitors toward the small building.

When the factory siren sounded, workers came here to shop.

Candy.
Tobacco.
Newspapers.
And Luffare — mashed potatoes with ketchup and mustard, served on a hot dog bun.
Worker food. Fast food. A taste of everyday life.

Local children often searched for coins under the bridge.
They had learned that money easily slipped between the wooden planks.

Below the bridge, water from Brukssjön flowed by — polluted by the mill, brown as iron itself. The stream, locally called Bruksån, carried the marks of the industry that had shaped the entire community.

On the hill behind the kiosk stood the Blåsut worker housing.

The kiosk disappeared in the late 1970s.

Much of the text is based on Thore Gustavsson, "Bruket – Arbetsplats och samhälle". The photograph from 1958 was taken by Olle Pettersson.

But places like this rarely disappear completely.

They remain in stories.

In photographs.

And in the memories of the people who once stood here listening for the factory siren.`,
  mission: [
    "Look toward the river and find the concrete foundation",
    "Imagine the sound of the factory siren",
    "Consider how a simple dish like Luffare became part of the mill's culture",
  ],
  reward: "Kiosk Rememberer",
  sources: ["4", "10"],
};
