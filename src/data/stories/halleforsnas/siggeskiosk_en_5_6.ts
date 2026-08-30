import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const siggeskiosk_en_5_6: Story = {
  id: "siggeskiosk_en_5_6",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["5-6"],
  title: "Where the Workers Went to Eat",
  subtitle: "Sigge's Kiosk",
  location: { ...LOCATIONS.SIGGES_KIOSK, label: "Sigge's Kiosk" },
  audio: "/audio/siggeskiosk_en_5_6.mp3",
  image: "images/stories/siggeskiosk.jpeg",
  emoji: "🍦",
  accent: "bark",
  text: `This spot used to be very busy.

A yellow kiosk with brown corners stood right here, by the stream.

A small bridge crossed the water so people could reach it.

When the factory whistle blew, workers came running.

They were hungry!

They bought candy, newspapers, and something special called Luffare.

Luffare was warm mashed potatoes with ketchup and mustard, served on a hot dog bun.

It was the perfect quick snack.

Children in the neighbourhood loved to search for coins under the bridge.

Money often fell through the cracks in the wooden planks.

Finding a coin meant they could buy candy too!

The kiosk closed in the 1970s.

Today, only a concrete foundation is left.

But the story of the little yellow kiosk and the workers' snack lives on.`,
  mission: [
    "Spot the concrete foundation",
    "Pretend to order a Luffare",
    "Imagine the queue of workers waiting for lunch",
  ],
  reward: "Kiosk Explorer",
  sources: ["4", "10"],
};
