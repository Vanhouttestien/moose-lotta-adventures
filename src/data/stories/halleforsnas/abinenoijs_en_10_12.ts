import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const abinenoijs_en_10_12: Story = {
  id: "abinenoijs_en_10_12",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["10-12"],
  title: "The 74 Million Crown Cleanup",
  subtitle: "How Hälleforsnäs Reclaimed Its Land",
  location: { ...LOCATIONS.ABINE_NOIJS_PARK, label: "Abine Noijs Park" },
  audio: "/audio/abinenoijs_en_10_12.mp3",
  emoji: "🌳",
  accent: "water",
  sources: ["2", "4", "7"],
  text: `What do you do with land that has been poisoned for 300 years?

You clean it.

But cleaning it is not cheap.

The Tjärtippen ("Tar Dump") was the place where the bruk had dumped its waste for centuries: slag, tar, heavy metals, and industrial byproducts. Rainwater carried these toxins into Bruksån, the stream that runs through Hälleforsnäs, and into the groundwater.

The area was unusable and dangerous.

In the 1990s, a first remediation effort used EU funds to clean a smaller dump site along the stream and partially reroute the water.

But the main problem remained.

In May 2004, the "Rena Bruket" project began. The scope was massive:
- The stream was diverted through a new channel
- Contaminated soil and waste were excavated and removed
- Clean topsoil was brought in
- Trees, grass, and plants were established

The total cost was 74.4 million SEK, funded entirely by the Swedish state.

By autumn 2006, the project was complete. The land was declared safe.

On September 17, 2009, a sculpture park was inaugurated on the site. It was named Abine Noijs park after the bruk's founder, Abine (Albin) Noij, a Walloon miner who received the original mining privilege in 1659.

The park transformed a toxic wasteland into public space. Today it is used for walking, sculpture exhibitions, and recreation — a symbol of how industrial heritage and environmental responsibility can coexist.`,
  mission: [
    "Walk the entire park and observe the landscape",
    "Find the Bruksån and note where it was rerouted",
    "Discuss: who should pay for industrial pollution cleanup?",
  ],
  reward: "Environmental Scholar",
};
