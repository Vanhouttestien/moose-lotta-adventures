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
  emoji: "⚒️",
  accent: "ember",
  sources: ["1", "5"],
  text: "Titta på den stora byggnaden!\n\nFör väldigt länge sedan arbetade många människor här.\n\nDe gjorde saker av järn.\n\nJärn är superstarkt!\n\nDet small och dånade från maskinerna.\n\nEld och värme fanns överallt.\n\nIdag är det tyst.\n\nMen inne i museet kan du se verktygen som människorna använde.\n\nOch kanske… om du lyssnar riktigt noga…\n\nkan du höra ekot av alla som arbetade här.",
  mission: ["Titta på byggnaden", "Hitta något av järn", "Låtsas vara en arbetare"],
  reward: "Lilla järnarbetaren",
};
