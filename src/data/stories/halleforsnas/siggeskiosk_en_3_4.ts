import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const siggeskiosk_en_3_4: Story = {
  id: "siggeskiosk_en_3_4",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["3-4"],
  title: "The Little Yellow Kiosk",
  subtitle: "Sigge's Snack Shop",
  location: { ...LOCATIONS.SIGGES_KIOSK, label: "Sigge's Kiosk" },
  audio: "/audio/siggeskiosk_en_3_4.mp3",
  emoji: "🍦",
  accent: "moss",
  text: `There was once a little yellow kiosk here.

It had brown corners and stood by the water.

A tiny bridge led to the front door.

When a loud whistle blew at the factory, workers hurried here.

They bought something called Luffare.

It was warm mashed potatoes with ketchup and mustard on a soft bun.

Yummy!

Children looked for coins under the bridge.

Sometimes they found money to buy candy!

The kiosk is gone now.

Only a concrete square remains.

But if you close your eyes, you can almost hear the whistle.`,
  mission: [
    "Find the concrete foundation",
    "Pretend to buy a Luffare",
    "Count your steps across the concrete foundation",
  ],
  reward: "Little Shopper",
  sources: ["4", "10"],
};
