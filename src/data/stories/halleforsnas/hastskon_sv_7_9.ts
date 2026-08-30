import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const hastskon_sv_7_9: Story = {
  id: "hastskon_sv_7_9",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["7-9"],
  title: "Stallet som blev hem",
  subtitle: "Hästskons många liv",
  location: { ...LOCATIONS.HASTSKON, label: "Hästskon" },
  audio: "/audio/hastskon_sv_7_9.mp3",
  image: "images/stories/hastkon.jpeg",
  emoji: "🫎",
  accent: "ember",
  sources: ["4", "9"],
  text: `Den här byggnaden hade fler liv än en katt.

Den byggdes runt 1850 av Lars von Celsing, brukets ägare.

Först var det ett stall, ett ridhus och ett vagnslider.

Hästar stampade och gnäggade här.

Vagnar rullade in och ut.

Men den mest kända invånaren var ingen häst.

Det var en tam älg som hette Lotta.

Hon var tränad att dra vagnar och slädar — ett arbetsdjur i en stad full av industri.

1920 byggdes byggnaden om helt.

Den blev bostäder för brukets arbetare.

Ungkarlar fick små rum.

Familjer fick lägenheter.

En matsal öppnades där arbetare kunde äta tillsammans.

Och i flera decennier fanns byns bibliotek i huset.

Tänk dig att låna böcker i ett före detta stall!

I 170 år stod denna hästskoformade byggnad här.

Sedan den 28 maj 2020 förstördes den av en brand.

Ingenting kunde räddas.

Men platsen har köpts och det finns planer på att återställa den.

En dag kanske ett nytt kapitel börjar.`,
  mission: [
    "Hitta konturerna av där byggnaden en gång stod",
    "Lista tre olika användningar den här byggnaden hade",
    "Föreställ dig vad Lotta älgen skulle göra här idag",
  ],
  reward: "Historieupptäckare",
};
