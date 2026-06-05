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
  audio: "/audio/siggeskiosk_sv_adult.mp3",
  emoji: "🍦",
  accent: "water",
  text: 'Idag finns nästan ingenting kvar av Sigges kiosk.\n\nBara spår.\nEn betonggrund som skymtar bakom räcket.\nEtt minne vid vattnet.\n\nMen under 1950- och 60-talet var detta en livlig mötesplats.\n\nKiosken stod vid ån mitt emot bruket.\nGula väggar.\nBruna knutar.\nEn liten bro som ledde fram till byggnaden.\n\nNär fabriksvisslan ljöd kom arbetarna hit för att handla.\n\nGodis.\nTobak.\nTidningar.\nOch Luffare — potatismos med ketchup och senap, serverad på korvbröd.\nArbetsmat. Snabbmat. En smak av vardag.\n\nBarnen i området letade ofta efter småpengar under bron.\nDe hade lärt sig att mynt lätt ramlade mellan träplankorna.\n\nUnder bron rann vatten från Brukssjön — förorenat av bruket, brunt som järnet självt. Ån, i folkmun kallad Bruksån, bar spåren av industrin som format hela samhället.\n\nPå berget bakom kiosken låg arbetarbostäderna Blåsut.\n\nKiosken försvann i slutet av 1970-talet.\n\nStora delar av texten är baserad på Thore Gustavsson, "Bruket – Arbetsplats och samhälle". Fotografiet från 1958 togs av Olle Pettersson.\n\nMen sådana här platser försvinner sällan helt.\n\nDe lever kvar i berättelser.\nI fotografier.\nOch i minnet hos människor som en gång stod här och lyssnade efter fabriksvisslan.',
  mission: [
    "Titta mot ån och leta efter betonggrunden",
    "Föreställ dig fabriksvisslan",
    "Fundera över hur en enkel rätt som Luffare kunde bli en del av brukets kultur",
  ],
  reward: "Kioskminnare",
  sources: ["4", "10"],
};
