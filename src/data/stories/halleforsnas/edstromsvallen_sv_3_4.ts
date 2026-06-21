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
  text: `Den här planen har två liv.

På sommaren är den grön och mjuk — en fotbollsplan.

På vintern fryser den och blir en bandyplan.

Bandy är som hockey men på en större plan med boll.

Hemmalaget hette Brukets Blå.

De var berömda!

Planen byggdes på 1930-talet.

Under gräset finns något oväntat.

Aska och bråte från en stor brand som förstörde fabriken 1934.

Branden var hemsk — men ur den kom den här planen.

En plats där barn leker, lag tävlar och hela byn samlas.`,
  mission: ["Stå mitt på planen", "Låtsas sparka en fotboll", "Snurra runt ett varv"],
  reward: "Idrottsplan-äventyrare",
};
