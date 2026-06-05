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
  text: 'Den här parken har en otrolig hemlighet.\n\nDen var en gång en tipp för brukets avfall.\n\nI hundratals år dumpades slagg och tjära här.\n\nMarken blev förgiftad.\n\nIngenting kunde växa.\n\nSedan hände något otroligt.\n\nEtt stort saneringsprojekt startade.\n\nDet kallades "Rena Bruket".\n\nDen förorenade jorden togs bort.\n\nBäcken fick en ny sträckning.\n\nDet kostade 74 miljoner svenska kronor!\n\nEfter år av arbete föddes parken.\n\nDen 17 september 2009 invigdes en skulpturpark här.\n\nDen fick namnet Abine Noijs park, efter mannen som grundade bruket 1659.\n\nNu kommer människor hit för att gå, leka och njuta av konst.\n\nEn plats som en gång var gift är nu vacker.',
  mission: [
    "Hitta en skulptur du gillar",
    "Gå över parken och föreställ dig att den var täckt av avfall",
    "Berätta för någon varför den här platsen är speciell",
  ],
  reward: "Skräp-till-skatt-hjälte",
};
