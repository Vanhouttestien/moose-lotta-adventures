import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const liktallarna_sv_5_6: Story = {
  id: "liktallarna_sv_5_6",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["5-6"],
  title: "Tallarna som minns",
  subtitle: "Liktallarna",
  location: { ...LOCATIONS.LIKTALLARNA, label: "Liktallarna" },
  ambience: "wind",
  audio: "/audio/liktallarna_sv_5_6.mp3",
  image: "/images/stories/liktalarna.jpeg", 
  emoji: "🌲",
  accent: "shadow",
  sources: ["4"],
  text: `Shhh…

Hör du vinden i tallarna?

De här träden är över 400 år gamla.

De stod här långt innan bilar, gatlampor och moderna hus.

Och runt dem växte många märkliga berättelser fram.

Vissa människor sa att det här var samhällets yttersta gräns.
En plats där farliga saker hände för länge sedan.

Andra berättade något helt annat.

De sa att likskjutsar brukade stanna här för att vila under långa resor.

Hästarna pustade i kylan.
Vagnarna knarrade.
Och tallarna såg allt.

Men det finns ännu en berättelse.

Att träden har magi.

Inte trollkarlsmagi.

Utan gammal skogsmagi.

En sorts tyst kraft som bara riktigt gamla träd kan bära på.

För länge sedan började tallarna brinna.
Elden skadade dem svårt.

Men de föll aldrig.

De fortsatte stå kvar.

Som väktare från en annan tid.`,
  mission: ["Leta efter spår av eld", "Stå helt stilla i 15 sekunder", "Lägg handen mot barken"],
  reward: "Tallväktare",
};
