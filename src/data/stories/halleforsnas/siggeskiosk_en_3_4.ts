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
  text: "There was once a little yellow kiosk here.\n\nIt had brown corners and stood by the water.\n\nA tiny bridge led to the front door.\n\nWhen a loud whistle blew at the factory, workers hurried here.\n\nThey bought something called Luffare.\n\nIt was warm mashed potatoes with ketchup and mustard on a soft bun.\n\nYummy!\n\nChildren looked for coins under the bridge.\n\nSometimes they found money to buy candy!\n\nThe kiosk is gone now.\n\nOnly a concrete square remains.\n\nBut if you close your eyes, you can almost hear the whistle.",
  mission: [
    "Find the concrete foundation",
    "Pretend to buy a Luffare",
    "Count your steps across the concrete foundation",
  ],
  reward: "Little Shopper",
  sources: ["4", "10"],
};
