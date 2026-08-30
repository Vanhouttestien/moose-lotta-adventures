import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const gjuterimuseum_sv_3_4: Story = {
  id: "gjuterimuseum_sv_3_4",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["3-4"],
  title: "Elden och järnet",
  subtitle: "Gjuterimuseet",
  location: { ...LOCATIONS.FOUNDRY_MUSEUM, label: "Hälleforsnäs Gjuterimuseum" },
  audio: "/audio/gjuterimuseum_sv_3_4.mp3",
  image: "images/stories/gjuterimuseet.jpeg",
  emoji: "⚒️",
  accent: "ember",
  sources: ["1", "5"],
  text: `Titta på den stora byggnaden!

För väldigt länge sedan arbetade många människor här.

De gjorde saker av järn.

Järn är superstarkt!

Det small och dånade från maskinerna.

Eld och värme fanns överallt.

Idag är det tyst.

Men inne i museet kan du se verktygen som människorna använde.

Och kanske… om du lyssnar riktigt noga…

kan du höra ekot av alla som arbetade här.`,
  mission: ["Titta på byggnaden", "Hitta något av järn", "Låtsas vara en arbetare"],
  reward: "Lilla järnarbetaren",
};
