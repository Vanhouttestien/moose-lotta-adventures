import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const siggeskiosk_sv_5_6: Story = {
  id: "siggeskiosk_sv_5_6",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["5-6"],
  title: "Där arbetarna gick för att äta",
  subtitle: "Sigges kiosk",
  location: { ...LOCATIONS.SIGGES_KIOSK, label: "Sigges kiosk" },
  audio: "/audio/siggeskiosk_sv_5_6.mp3",
  emoji: "🍦",
  accent: "bark",
  text: `Den här platsen var förr mycket livlig.

En gul kiosk med bruna knutar stod precis här, vid ån.

En liten bro gick över vattnet så att folk kunde komma fram.

När fabriksvisslan ljöd — TUUUT — kom arbetarna springande.

De var hungriga!

De köpte godis, tidningar och något speciellt som hette Luffare.

Luffare var varmt potatismos med ketchup och senap, serverad på korvbröd.

Det var det perfekta snabba mellanmålet.

Barnen i området älskade att leta efter mynt under bron.

Pengar ramlade ofta ner mellan springorna i träplankorna.

Att hitta ett mynt betydde att de också kunde köpa godis!

Kiosken stängde på 1970-talet.

Idag finns bara en betonggrund kvar.

Men berättelsen om den lilla gula kiosken och arbetarnas mellanmål lever vidare.`,
  mission: [
    "Hitta betonggrunden",
    "Låtsas beställa en Luffare",
    "Föreställ dig kön av arbetare som väntar på lunch",
  ],
  reward: "Kioskutforskare",
  sources: ["4", "10"],
};
