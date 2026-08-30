import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const storahuset_sv_3_4: Story = {
  id: "storahuset_sv_3_4",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["3-4"],
  title: "Stora Huset",
  subtitle: "Herrgården",
  location: { ...LOCATIONS.STORA_HUSET, label: "Stora Huset" },
  audio: "/audio/storahuset_sv_3_4.mp3",
  image: "images/stories/storahuset.jpeg",
  emoji: "🏡",
  accent: "moss",
  sources: ["3"],
  ambience: "birds",
  text: `Titta på det här stora, fina huset.

Det kallas Stora Huset.

För länge sedan bodde den som ägde fabriken här.

Huset har vackra trädgårdar med blommor och höga träd.

Det finns till och med ett litet hus som kallas orangeri där apelsinträd växte på vintern.

Kan du föreställa dig att bo i ett så här stort hus?

Vad skulle du fylla alla rum med?

Huset är väldigt gammalt — över 250 år.

Men det står fortfarande kvar.

Och det är fortfarande ett av de mest speciella husen i Hälleforsnäs.`,
  mission: [
    "Räkna hur många fönster du ser",
    "Hitta något grönt i trädgården",
    "Låtsas att du bor här och vinka från dörren",
  ],
  reward: "Stora Huset-utforskare",
};
