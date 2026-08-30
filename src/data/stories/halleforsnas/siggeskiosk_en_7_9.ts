import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const siggeskiosk_en_7_9: Story = {
  id: "siggeskiosk_en_7_9",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["7-9"],
  title: "The Whistle, the Queue and the Luffare",
  subtitle: "Life at Sigge's Kiosk",
  location: { ...LOCATIONS.SIGGES_KIOSK, label: "Sigge's Kiosk" },
  audio: "/audio/siggeskiosk_en_7_9.mp3",
  image: "images/stories/siggeskiosk.jpeg",
  emoji: "🍦",
  accent: "ember",
  text: `Imagine the sound: WHOOO.

A loud factory whistle cuts through the air.

All over the bruk, workers stop what they are doing.

They head for the little yellow kiosk by the stream.

Sigge's Kiosk.

It stood here from the 1950s to the 1970s, with yellow walls and brown corners. A narrow bridge led across the water to the front door.

Workers came for newspapers, tobacco, and candy.

But the most popular item was Luffare.

Luffare was simple: mashed potatoes with ketchup and mustard, served on a hot dog bun. It was fast, cheap, and filling — perfect for a hungry factory worker.

Kids had their own game. They knew that when adults pulled out coins to pay, money sometimes slipped through the wooden planks of the bridge. So they searched underneath, hoping to find treasure.

The kiosk owner at the time was Sigge (later Janne in the 1970s). The business stayed the same for decades.

Behind the kiosk, on the hill, stood the Blåsut worker housing.

The water flowing under the bridge came from Brukssjön. It was brown — coloured by pollution from the bruk.

The kiosk was demolished in the late 1970s.

Today, only the concrete foundation remains.`,
  mission: [
    "Find the concrete foundation of the kiosk",
    "Imagine the bridge that once crossed the water",
    "Describe what a Luffare tastes like using three words",
  ],
  reward: "Kiosk Time Traveller",
  sources: ["4", "10"],
};
