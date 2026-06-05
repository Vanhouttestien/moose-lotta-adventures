import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const abinenoijs_en_3_4: Story = {
  id: "abinenoijs_en_3_4",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["3-4"],
  title: "The Park That Was Almost a Dump",
  subtitle: "Abine Noijs Park",
  location: { ...LOCATIONS.ABINE_NOIJS_PARK, label: "Abine Noijs Park" },
  audio: "/audio/abinenoijs_en_3_4.mp3",
  emoji: "🌳",
  accent: "moss",
  sources: ["2", "4", "7"],
  text: "This park is special.\n\nIt was not always a park.\n\nA long time ago, it was a dump.\n\nTrucks dropped old factory waste here.\n\nThe ground was dirty and not safe.\n\nThen people cleaned it all up.\n\nThey took the bad stuff away.\n\nThey brought good soil.\n\nThey planted trees and grass.\n\nNow it is a beautiful park.\n\nThere are sculptures to look at.\n\nYou can walk and play here.\n\nThe park is named after Abine Noij.\n\nHe started the whole bruk a very, very long time ago!\n\nHe would be happy to see this place today.",
  mission: [
    "Find a sculpture in the park",
    "Touch the grass",
    "Look for something that was once underground",
  ],
  reward: "Park Explorer",
};
