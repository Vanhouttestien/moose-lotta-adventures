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
  emoji: "🍦",
  accent: "bark",
  text: "This spot used to be very busy.\n\nA yellow kiosk with brown corners stood right here, by the stream.\n\nA small bridge crossed the water so people could reach it.\n\nWhen the factory whistle blew, workers came running.\n\nThey were hungry!\n\nThey bought candy, newspapers, and something special called Luffare.\n\nLuffare was warm mashed potatoes with ketchup and mustard, served on a hot dog bun.\n\nIt was the perfect quick snack.\n\nChildren in the neighbourhood loved to search for coins under the bridge.\n\nMoney often fell through the cracks in the wooden planks.\n\nFinding a coin meant they could buy candy too!\n\nThe kiosk closed in the 1970s.\n\nToday, only a concrete foundation is left.\n\nBut the story of the little yellow kiosk and the workers' snack lives on.",
  mission: [
    "Spot the concrete foundation",
    "Pretend to order a Luffare",
    "Imagine the queue of workers waiting for lunch",
  ],
  reward: "Kiosk Explorer",
  sources: ["4", "10"],
};
