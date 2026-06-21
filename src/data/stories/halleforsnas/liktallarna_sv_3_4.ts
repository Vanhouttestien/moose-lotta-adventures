import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const liktallarna_sv_3_4: Story = {
  id: "liktallarna_sv_3_4",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["3-4"],
  title: "De gamla tallarna",
  subtitle: "Liktallarna",
  location: { ...LOCATIONS.LIKTALLARNA, label: "Liktallarna" },
  ambience: "wind",
  audio: "/audio/liktallarna_sv_3_4.mp3",
  image: "/images/stories/liktalarna.jpeg", 
  emoji: "🌲",
  accent: "moss",
  sources: ["4"],
  text: `Titta på de gamla trädstammarna.

För väldigt, väldigt länge sedan var det här stora tallar.

De växte här i hundratals år.

De såg årstiderna komma och gå.

Snö föll runt dem.

Fåglar vilade på deras grenar.

Och vinden viskade genom deras barr.

Idag finns bara delar av träden kvar.

Men de har fortfarande en historia att berätta.

Kan du röra vid den gamla veden?

Den känns annorlunda än ett ungt träd.

De här träden var redan gamla innan dina morföräldrar föddes.

Det är väldigt länge sedan.

Kanske är de gamla stammarna som skogens morfäder.

Tyst stående här.

Som minns allt de har sett.

Titta noga.

Kan du hitta en spricka?

Ett mönster?

Ett litet kryp som gömmer sig?

Även om träden inte längre växer på höjden är de fortfarande en del av skogen.

Och de får fortfarande besök.

Inklusive av dig.`,
  mission: ["Krama ett träd", "Lyssna på vinden", "Hitta något mjukt i naturen"],
  reward: "Tallvän",
};
