import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const siggeskiosk_en_10_12: Story = {
  id: "siggeskiosk_en_10_12",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["10-12"],
  title: "Snack Break at the Bruk",
  subtitle: "Sigge's Kiosk and Worker Culture",
  location: { ...LOCATIONS.SIGGES_KIOSK, label: "Sigge's Kiosk" },
  audio: "/audio/siggeskiosk_en_10_12.mp3",
  emoji: "🍦",
  accent: "water",
  text: "The work was heavy, noisy, and dirty. Cast iron, smoke, and sweat filled every hall.\n\nWhen the factory siren sounded, workers had a short break.\n\nMany of them headed here.\n\nSigge's Kiosk was a small yellow building with brown trim, standing beside the stream opposite the bruk. A wooden bridge connected it to the road.\n\nThe menu was simple: candy, tobacco, newspapers, and Luffare.\n\nLuffare was mashed potatoes with ketchup and mustard, served on a hot dog bun. It was cheap, fast, and filling — the bruk's version of fast food.\n\nBut there's another detail that makes this place special.\n\nThe stream below the bridge was called Bruksån. It flowed from Brukssjön, the mill pond, and was stained brown by iron and pollution from the bruk. The water itself told the story of the industry.\n\nOn the hill behind the kiosk stood Blåsut — the worker housing that was also demolished.\n\nLocal children had learned that coins sometimes fell through the cracks in the bridge's wooden planks. The kiosk was a place of small transactions, and losing a coin was easy. For kids, finding one meant candy.\n\nThe kiosk was originally run by Sigge, and later by Janne in the 1970s. It remained essentially unchanged for decades.\n\nIt was demolished in the late 1970s.\n\nToday, only the concrete foundation remains.\n\nSigge's Kiosk was more than a shop — it was a break from the heat of the foundry, a place where workers could be people again for a few minutes.",
  mission: [
    "Find the concrete foundation and measure its size with your steps",
    "Imagine the queue of workers crossing the bridge at lunchtime",
    "Discuss: what foods today might future generations remember as 'worker food'?",
  ],
  reward: "Social Historian",
  sources: ["4", "10"],
};
