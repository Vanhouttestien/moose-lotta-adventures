import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const abinenoijs_en_7_9: Story = {
  id: "abinenoijs_en_7_9",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["7-9"],
  title: "Cleaning Up 300 Years of Mess",
  subtitle: "The Rena Bruket Project",
  location: { ...LOCATIONS.ABINE_NOIJS_PARK, label: "Abine Noijs Park" },
  audio: "/audio/abinenoijs_en_7_9.mp3",
  emoji: "🌳",
  accent: "water",
  sources: ["2", "4", "7"],
  text: 'For over 300 years, the bruk made iron.\n\nAnd for over 300 years, waste from the bruk was dumped right here.\n\nSlag, tar, heavy metals, and other toxins soaked into the ground.\n\nThe area became known as Tjärtippen — the Tar Dump.\n\nIt was a poisoned place.\n\nRainwater carried toxins into the Bruksån stream and the groundwater.\n\nSomething had to be done.\n\nIn 2004, a massive environmental project began.\n\nIt was called "Rena Bruket" — "Clean the Bruk."\n\nThis is what happened:\n\nThe stream was rerouted through a new channel.\n\nThe contaminated soil was dug up and removed.\n\nClean soil was brought in.\n\nGrass, flowers, and trees were planted.\n\nThe total cost was 74.4 million SEK, paid by the Swedish state.\n\nWhen the work was finished in 2006, the land was safe again.\n\nOn September 17, 2009, a sculpture park was inaugurated on the site.\n\nIt was named Abine Noijs park, after the Walloon immigrant who founded the bruk in 1659.\n\nToday, you can walk here without any danger.\n\nA place that was once poison is now full of life and art.',
  mission: [
    "Observe the Bruksån stream from the path",
    "Count the sculptures you can see",
    "Imagine what this place smelled like before the cleanup",
  ],
  reward: "Environmental Hero",
};
