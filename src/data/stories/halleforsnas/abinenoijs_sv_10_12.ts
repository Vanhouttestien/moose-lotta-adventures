import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const abinenoijs_sv_10_12: Story = {
  id: "abinenoijs_sv_10_12",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["10-12"],
  title: "Saneringen för 74 miljoner kronor",
  subtitle: "Hur Hälleforsnäs återtog sin mark",
  location: { ...LOCATIONS.ABINE_NOIJS_PARK, label: "Abine Noijs Park" },
  audio: "/audio/abinenoijs_sv_10_12.mp3",
  emoji: "🌳",
  accent: "water",
  sources: ["2", "4", "7"],
  text: `Vad gör man med mark som har varit förgiftad i 300 år?

Man sanerar den.

Men det är inte billigt.

Tjärdippen var platsen där bruket dumpade sitt avfall i århundraden: slagg, tjära, tungmetaller och industriella biprodukter. Regnvatten förde gifterna till Bruksån och grundvattnet.

Området var oanvändbart och farligt.

På 1990-talet gjordes en första insats med EU-medel för att sanera en mindre deponi längs ån och delvis leda om vattnet.

Men huvudproblemet kvarstod.

I maj 2004 startade projektet "Rena Bruket". Omfattningen var enorm:
- Ån leddes om genom en ny kanal
- Förorenad jord och avfall grävdes upp och togs bort
- Ren matjord lades på
- Träd, gräs och växter planterades

Totalkostnaden var 74,4 miljoner kronor, helt finansierad av svenska staten.

Hösten 2006 var projektet klart. Marken förklarades säker.

Den 17 september 2009 invigdes en skulpturpark på platsen. Den fick namnet Abine Noijs park efter brukets grundare, Abine (Albin) Noij, en vallonisk gruvman som fick det ursprungliga bergsprivilegiet 1659.

Parken förvandlade en giftig avfallsplats till offentlig plats. Idag används den för promenader, skulptur-utställningar och rekreation — en symbol för hur industriarv och miljöansvar kan samexistera.`,
  mission: [
    "Gå genom hela parken och studera landskapet",
    "Hitta Bruksån och se var den leddes om",
    "Diskutera: vem ska betala för sanering av industriell förorening?",
  ],
  reward: "Miljökännare",
};
