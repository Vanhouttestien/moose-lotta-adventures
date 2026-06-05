import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const test_forest_en_10_12: Story = {
  id: "test_forest_en_10_12",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["10-12"],
  title: "The Point Where Signals Meet",
  subtitle: "Forest Signal",
  location: { ...LOCATIONS.FOREST_SIGNAL_POINT, label: "Forest Signal Point" },
  audio: "/audio/test_forest_en_10_12.mp3",
  emoji: "📡",
  accent: "moss",
  text: 'In the forest area opposite the ironworks, there is a point that has been used for communication for generations.\n\nFrom this spot, you have a clear view across large parts of Hälleforsnäs — from Brukssjön in the south to the mill area in the north. It is easy to see why this hill was chosen as a signal point.\n\nDuring the mill era, optical signals were used to coordinate work. Fires, flags, and smoke signals were the fastest way to send messages across distances before the telegraph and telephone became common.\n\nToday, a different type of signal passes through this place — radio waves, mobile signals, and perhaps even GPS signals from satellites far above us.\n\nThe forest itself is also full of signals. Trees communicate with each other through underground fungal networks — so-called mycorrhizal networks. Scientists call it the "Wood Wide Web." Through these networks, trees warn each other of dangers and share nutrients.\n\nSo here you stand at the signal point, surrounded by trees that themselves send signals beneath your feet, with invisible radio waves passing through the air around you.\n\nThis place has always been about communication. The only thing that has changed is the methods.',
  mission: [
    "Stand at the signal point and survey the landscape",
    "Consider why this particular spot was chosen",
    "Discuss: how has the way we communicate changed over time?",
  ],
  reward: "Signal Master",
  sources: [],
};
