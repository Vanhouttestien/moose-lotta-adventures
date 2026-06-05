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
  text: "Den här platsen var förr mycket livlig.\n\nEn gul kiosk med bruna knutar stod precis här, vid ån.\n\nEn liten bro gick över vattnet så att folk kunde komma fram.\n\nNär fabriksvisslan ljöd — TUUUT — kom arbetarna springande.\n\nDe var hungriga!\n\nDe köpte godis, tidningar och något speciellt som hette Luffare.\n\nLuffare var varmt potatismos med ketchup och senap, serverad på korvbröd.\n\nDet var det perfekta snabba mellanmålet.\n\nBarnen i området älskade att leta efter mynt under bron.\n\nPengar ramlade ofta ner mellan springorna i träplankorna.\n\nAtt hitta ett mynt betydde att de också kunde köpa godis!\n\nKiosken stängde på 1970-talet.\n\nIdag finns bara en betonggrund kvar.\n\nMen berättelsen om den lilla gula kiosken och arbetarnas mellanmål lever vidare.",
  mission: [
    "Hitta betonggrunden",
    "Låtsas beställa en Luffare",
    "Föreställ dig kön av arbetare som väntar på lunch",
  ],
  reward: "Kioskutforskare",
  sources: ["4", "10"],
};
