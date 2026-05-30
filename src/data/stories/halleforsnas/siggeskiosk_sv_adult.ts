import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const siggeskiosk_sv_adult: Story = {
  id: "siggeskiosk_sv_adult",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["adult"],
  title: "Kiosken vid den bruna ån",
  subtitle: "Sigges kiosk",
  location: { ...LOCATIONS.SIGGES_KIOSK, label: "Sigges kiosk" },
  audio: "",
  emoji: "🍦",
  accent: "water",
  text: "Idag finns nästan ingenting kvar av Sigges kiosk.\n\nBara spår.\nEn betonggrund.\nEtt minne vid vattnet.\n\nMen under 1950- och 60-talet var detta en livlig mötesplats.\n\nKiosken stod vid ån mitt emot bruket.\nGula väggar.\nBruna knutar.\nEn liten bro som ledde fram till byggnaden.\n\nNär fabriksvisslan ljöd kom arbetarna hit för att handla.\n\nGodis.\nTobak.\nTidningar.\nSmå pauser mellan långa arbetspass.\n\nPå den tiden såg ån också annorlunda ut.\n\nFöroreningar från bruket färgade vattnet brunt.\nHela samhället formades av industrin omkring det.\n\nKiosken försvann i slutet av 1970-talet.\nÄven ån fick senare en ny sträckning.\n\nMen sådana här platser försvinner sällan helt.\n\nDe lever kvar i berättelser.\nI fotografier.\nOch i minnet hos människor som en gång stod här och lyssnade efter fabriksvisslan.",
  mission: [
    "Titta mot ån",
    "Föreställ dig fabriksvisslan",
    "Fundera över vad människor köpte här efter jobbet",
  ],
  reward: "Kioskminnare",
};
