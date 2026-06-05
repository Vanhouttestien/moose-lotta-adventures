import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const abinenoijs_en_5_6: Story = {
  id: "abinenoijs_en_5_6",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["5-6"],
  title: "From Trash to Treasure",
  subtitle: "How a Dump Became a Park",
  location: { ...LOCATIONS.ABINE_NOIJS_PARK, label: "Abine Noijs Park" },
  audio: "/audio/abinenoijs_en_5_6.mp3",
  emoji: "🌳",
  accent: "water",
  sources: ["2", "4", "7"],
  text: 'This park has an amazing secret.\n\nIt was once a dumping ground for the bruk\'s waste.\n\nFor hundreds of years, slag and tar were thrown here.\n\nThe ground became poisoned.\n\nNothing could grow.\n\nThen something incredible happened.\n\nA huge cleanup project started.\n\nIt was called "Rena Bruket" — Clean the Bruk.\n\nThe polluted soil was removed.\n\nThe stream was rerouted.\n\nIt cost 74 million Swedish crowns!\n\nAfter years of work, the park was born.\n\nOn September 17, 2009, a sculpture park was opened here.\n\nIt was named Abine Noijs park, after the man who founded the bruk in 1659.\n\nNow people come here to walk, play, and enjoy art.\n\nA place that was once poison is now beautiful.',
  mission: [
    "Find a sculpture you like",
    "Walk across the park and imagine it covered in waste",
    "Tell someone why this place is special",
  ],
  reward: "Trash-to-Treasure Hero",
};
