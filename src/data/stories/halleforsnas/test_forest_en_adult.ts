import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const test_forest_en_adult: Story = {
  id: "test_forest_en_adult",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["adult"],
  title: "The Forest That Transmits",
  subtitle: "Forest Signal",
  location: { ...LOCATIONS.FOREST_SIGNAL_POINT, label: "Forest Signal Point" },
  audio: "/audio/test_forest_en_adult.mp3",
  emoji: "📡",
  accent: "moss",
  text: 'On a hill at the forest edge opposite the ironworks lies a place that has served as a signal point for centuries.\n\nFrom here, you have an unobstructed view across Hälleforsnäs: from Brukssjön in the south to the old mill area in the north. A strategic position in a community shaped by the iron industry.\n\nLong before telephones, the mill used optical signals to communicate across the valley. Fires lit at dusk. Flags raised at shift changes. Smoke signals carrying messages across the rooftops.\n\nBut the forest has always had its own signals.\n\nModern research has shown that trees communicate through underground fungal networks — mycorrhiza. Old trees warn younger ones of drought and disease. They send nutrients to neighbours in need. Scientists call this phenomenon the "Wood Wide Web."\n\nSo here you stand at a point where people for generations have sent and received signals, while the trees beneath your feet do exactly the same thing — using methods we are only beginning to understand.\n\nThe place is a reminder that communication is not uniquely human. It is a fundamental force in all living things.',
  mission: [
    "Survey the landscape from the signal point",
    "Reflect on the site's strategic importance",
    "Consider the difference between human and natural signals",
  ],
  reward: "Signal Observer",
  sources: [],
};
