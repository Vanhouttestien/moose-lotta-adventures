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
  image: "images/stories/siggeskiosk.jpeg",
  emoji: "🍦",
  accent: "water",
  text: `Idag finns nästan ingenting kvar av Sigges kiosk.

Bara spår.
En betonggrund som skymtar bakom räcket.
Ett minne vid vattnet.

Men under 1950- och 60-talet var detta en livlig mötesplats.

Kiosken stod vid ån mitt emot bruket.
Gula väggar.
Bruna knutar.
En liten bro som ledde fram till byggnaden.

När fabriksvisslan ljöd kom arbetarna hit för att handla.

Godis.
Tobak.
Tidningar.
Och Luffare — potatismos med ketchup och senap, serverad på korvbröd.
Arbetsmat. Snabbmat. En smak av vardag.

Barnen i området letade ofta efter småpengar under bron.
De hade lärt sig att mynt lätt ramlade mellan träplankorna.

Under bron rann vatten från Brukssjön — förorenat av bruket, brunt som järnet självt. Ån, i folkmun kallad Bruksån, bar spåren av industrin som format hela samhället.

På berget bakom kiosken låg arbetarbostäderna Blåsut.

Kiosken försvann i slutet av 1970-talet.

Stora delar av texten är baserad på Thore Gustavsson, "Bruket – Arbetsplats och samhälle". Fotografiet från 1958 togs av Olle Pettersson.

Men sådana här platser försvinner sällan helt.

De lever kvar i berättelser.
I fotografier.
Och i minnet hos människor som en gång stod här och lyssnade efter fabriksvisslan.`,
  mission: [
    "Titta mot ån och leta efter betonggrunden",
    "Föreställ dig fabriksvisslan",
    "Fundera över hur en enkel rätt som Luffare kunde bli en del av brukets kultur",
  ],
  reward: "Kioskminnare",
  sources: ["4", "10"],
};
