import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const abinenoijs_sv_5_6: Story = {
  id: "abinenoijs_sv_5_6",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["5-6"],
  title: "Från skräp till skatt",
  subtitle: "Hur en soptipp blev en park",
  location: { ...LOCATIONS.ABINE_NOIJS_PARK, label: "Abine Noijs Park" },
  audio: "/audio/abinenoijs_sv_5_6.mp3",
  emoji: "🌳",
  accent: "water",
  sources: ["2", "4", "7"],
  text: `Den här parken har en otrolig hemlighet.

Den var en gång en tipp för brukets avfall.

I hundratals år dumpades slagg och tjära här.

Marken blev förgiftad.

Ingenting kunde växa.

Sedan hände något otroligt.

Ett stort saneringsprojekt startade.

Det kallades "Rena Bruket".

Den förorenade jorden togs bort.

Bäcken fick en ny sträckning.

Det kostade 74 miljoner svenska kronor!

Efter år av arbete föddes parken.

Den 17 september 2009 invigdes en skulpturpark här.

Den fick namnet Abine Noijs park, efter mannen som grundade bruket 1659.

Nu kommer människor hit för att gå, leka och njuta av konst.

En plats som en gång var gift är nu vacker.`,
  mission: [
    "Hitta en skulptur du gillar",
    "Gå över parken och föreställ dig att den var täckt av avfall",
    "Berätta för någon varför den här platsen är speciell",
  ],
  reward: "Skräp-till-skatt-hjälte",
};
