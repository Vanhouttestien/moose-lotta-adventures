import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const abinenoijs_en_adult: Story = {
  id: "abinenoijs_en_adult",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["adult"],
  title: "Waste, Wealth and Rebirth",
  subtitle: "Environmental Legacy of the Bruk",
  location: { ...LOCATIONS.ABINE_NOIJS_PARK, label: "Abine Noijs Park" },
  audio: "/audio/abinenoijs_en_adult.mp3",
  emoji: "🌳",
  accent: "water",
  sources: ["2", "4", "7"],
  text: `For more than three centuries, Hälleforsnäs bruk produced iron. It also produced waste — slag, green slag, foundry sand, tar, soot, and heavy metals.

Tjärdippen (the Tar Dump) was the primary repository. Located at what is now Abine Noijs park, it received the bruk's industrial byproducts for generations. The contamination was severe: heavy metals leached into Bruksån and the groundwater. The area was classified as a high-risk contaminated site.

Additional dump sites existed around Hälleforsnäs: Hjärpstugetippen near Simmelsjön (closed since the 1970s, now recreational woodland, MIFO class 2), Kattkärret near the old sewage plant (2 hectares, suspected heavy metal leakage into Bruksån), and Edströmsvallen sports ground itself (built on slag fill containing remains from the 1934 fire).

Foundry sand (sotsand) and green slag were used as general fill material across the town. Testing found that the sand contained no elevated metal levels, and the chromium in the green slag was tightly bound and not bioavailable.

The "Rena Bruket" project (2004–2006) was the largest single remediation effort. Costing 74.4 million SEK and fully state-funded, it involved excavating contaminated material, rerouting Bruksån through a new channel, and capping with clean soil.

The result is Abine Noijs park, inaugurated September 17, 2009. Named after the Walloon miner who founded the bruk in 1659, the park today features sculptures, walking paths, and green space — a landscape of recovery.

The site demonstrates the long tail of industrial pollution and the possibility of remediation. But it also raises questions: other dump sites remain unaddressed, and the full extent of contamination across the town — from slag-filled sports grounds to diffuse fill material — is still not completely mapped.`,
  mission: [
    "Survey the park and consider the scale of the remediation",
    "Walk along Bruksån and observe the rerouted channel",
    "Reflect: what other former industrial sites carry a similar hidden cost?",
  ],
  reward: "Environmental Analyst",
};
