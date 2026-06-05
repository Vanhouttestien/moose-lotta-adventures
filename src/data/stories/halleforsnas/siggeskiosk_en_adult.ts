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
  text: 'Today, almost nothing remains of Sigge\'s kiosk.\n\nOnly traces.\nA concrete foundation visible behind the railing.\nA memory beside the water.\n\nBut in the 1950s and 60s, this was a lively meeting place.\n\nThe kiosk stood beside the river opposite the mill.\nYellow walls.\nBrown corners.\nA bridge leading visitors toward the small building.\n\nWhen the factory siren sounded, workers came here to shop.\n\nCandy.\nTobacco.\nNewspapers.\nAnd Luffare — mashed potatoes with ketchup and mustard, served on a hot dog bun.\nWorker food. Fast food. A taste of everyday life.\n\nLocal children often searched for coins under the bridge.\nThey had learned that money easily slipped between the wooden planks.\n\nBelow the bridge, water from Brukssjön flowed by — polluted by the mill, brown as iron itself. The stream, locally called Bruksån, carried the marks of the industry that had shaped the entire community.\n\nOn the hill behind the kiosk stood the Blåsut worker housing.\n\nThe kiosk disappeared in the late 1970s.\n\nMuch of the text is based on Thore Gustavsson, "Bruket – Arbetsplats och samhälle". The photograph from 1958 was taken by Olle Pettersson.\n\nBut places like this rarely disappear completely.\n\nThey remain in stories.\n\nIn photographs.\n\nAnd in the memories of the people who once stood here listening for the factory siren.',
  mission: [
    "Look toward the river and find the concrete foundation",
    "Imagine the sound of the factory siren",
    "Consider how a simple dish like Luffare became part of the mill's culture",
  ],
  reward: "Kiosk Rememberer",
  sources: ["4", "10"],
};
