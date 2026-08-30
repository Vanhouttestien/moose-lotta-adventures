import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const gjuterimuseum_sv_10_12: Story = {
  id: "gjuterimuseum_sv_10_12",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["10-12"],
  title: "Järnets arv",
  subtitle: "Gjuterimuseet",
  location: { ...LOCATIONS.FOUNDRY_MUSEUM, label: "Hälleforsnäs Gjuterimuseum" },
  audio: "/audio/gjuterimuseum_sv_10_12.mp3",
  image: "images/stories/gjuterimuseet.jpeg",
  emoji: "⚒️",
  accent: "ember",
  sources: ["1", "5"],
  text: `Hälleforsnäs Gjuterimuseum är inget vanligt museum. Det är ett levande arbetslivsmuseum inrymt i själva bruksbyggnaderna där järnet en gång formades.

Bruket var i drift i över 330 år. Under den tiden tillverkades allt från järnkaminer och brunnslock till avancerade maskinkomponenter som exporterades över hela världen.

Museets utställningar visar arbetsplatser och verktyg från olika epoker: hur gjutningen gick till, hur modeller tillverkades, och hur den färdiga produkten slipades och ytbehandlades. Fotografier och arkivmaterial ger inblick i arbetarnas vardag — ett hårt liv präglat av värme, sot, buller och långa skift.

En av de mest fascinerande delarna är laboratoriet.

Museet rymmer också utställningen "Brukets blå" om Hälleforsnäs IF:s legendariska bandylag, som satte orten på kartan.

Föreningen bakom museet har omkring 100 medlemmar och erbjuder guidade turer med personer som själva arbetat på bruket.

Gjuterimuseet är mer än en samling föremål. Det är en berättelse om arbete, gemenskap, och en epok som format hela samhället.`,
  mission: [
    "Gå in och studera verktygen från olika epoker",
    "Besök laboratoriet — varför är det unikt?",
    "Ta reda på vad Brukets blå var för något",
  ],
  reward: "Järnhistoriker",
};
