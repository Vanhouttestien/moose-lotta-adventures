import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const edstromsvallen_sv_5_6: Story = {
  id: "edstromsvallen_sv_5_6",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["5-6"],
  title: "Planen som byter skepnad",
  subtitle: "Edströmsvallen",
  location: { ...LOCATIONS.EDSTROMSVALLEN, label: "Edströmsvallen" },
  audio: "/audio/edstromsvallen_sv_5_6.mp3",
  image: "/images/edstromsvallen.jpg",
  emoji: "⚽",
  accent: "bark",
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
  mission: ["Hitta idrottsplanen", "Låtsas göra ett mål", "Föreställ dig planen täckt av is"],
  reward: "Tvåsäsongsidrottare",
};
