import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const storahuset_sv_5_6: Story = {
  id: "storahuset_sv_5_6",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["5-6"],
  title: "Stora huset vid sjön",
  subtitle: "Stora Huset",
  location: { ...LOCATIONS.STORA_HUSET, label: "Stora Huset" },
  audio: "/audio/storahuset_sv_5_6.mp3",
  emoji: "🏡",
  accent: "moss",
  sources: ["3"],
  ambience: "birds",
  text: `Det här pampiga huset heter Stora Huset.

Det byggdes 1754 för familjen som ägde järnbruket.

I över 250 år har det stått här vid sjön och sett Hälleforsnäs förändras runtomkring.

Huset byggdes först i trä, kläddes sedan med tegel och målades gult och vitt.

Inuti fanns 25 rum, med en stor sal och en vacker trappa.

Runt huset fanns trädgårdar med ovanliga träd, växthus och ett orangeri där apelsinträd hölls varma på vintern.

En lång allé ledde besökare fram till ytterdörren.

Människorna som bodde här var brukets ledare — först ägarfamiljerna, sedan disponenterna.

Idag är huset ett privat hem.

Men det står fortfarande kvar, en av de viktigaste byggnaderna i Hälleforsnäs.

En påminnelse om tiden då en stor familj styrde över järnbruket.`,
  mission: [
    "Titta på de gula och vita färgerna på huset",
    "Hitta trädallén",
    "Föreställ dig hur det skulle vara att bo här",
  ],
  reward: "Herrgårdsbesökare",
};
