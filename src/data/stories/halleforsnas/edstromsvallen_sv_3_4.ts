import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const edstromsvallen_sv_3_4: Story = {
  id: "edstromsvallen_sv_3_4",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["3-4"],
  title: "Planen som föddes ur aska",
  subtitle: "Edströmsvallen",
  location: { ...LOCATIONS.EDSTROMSVALLEN, label: "Edströmsvallen" },
  audio: "/audio/edstromsvallen_sv_3_4.mp3",
  emoji: "⚽",
  accent: "moss",
  sources: ["1", "6"],
  text: "Den här planen har två liv.\n\nPå sommaren är den grön och mjuk — en fotbollsplan.\n\nPå vintern fryser den och blir en bandyplan.\n\nBandy är som hockey men på en större plan med boll.\n\nHemmalaget hette Brukets Blå.\n\nDe var berömda!\n\nPlanen byggdes på 1930-talet.\n\nUnder gräset finns något oväntat.\n\nAska och bråte från en stor brand som förstörde fabriken 1934.\n\nBranden var hemsk — men ur den kom den här planen.\n\nEn plats där barn leker, lag tävlar och hela byn samlas.",
  mission: ["Stå mitt på planen", "Låtsas sparka en fotboll", "Snurra runt ett varv"],
  reward: "Idrottsplan-äventyrare",
};
