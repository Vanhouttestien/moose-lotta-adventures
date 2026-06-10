import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const hastskon_sv_10_12: Story = {
  id: "hastskon_sv_10_12",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["10-12"],
  title: "Hästskon: 170 år av förändring",
  subtitle: "Från vagnslider till aska",
  location: { ...LOCATIONS.HASTSKON, label: "Hästskon" },
  audio: "/audio/hastskon_sv_10_12.mp3",
  emoji: "🫎",
  accent: "shadow",
  sources: ["4", "9"],
  text: "Få byggnader i Hälleforsnäs har levt så många liv som Hästskon.\n\nByggd runt 1850 av brukspatron Lars von Celsing var den hästskoformade byggnaden ursprungligen ett stall, ridhus och vagnslider — en viktig del av brukets transportinfrastruktur.\n\nI början av 1900-talet flyttade en ovanlig invånare in.\n\nLotta var en tam älg tränad att dra vagnar och slädar. I en tid när hästar var det viktigaste transportmedlet var en arbetsälg en anmärkningsvärd syn. Hon var stallad här, känd av alla i byn.\n\n1920 byggdes Hästskon om till arbetarbostäder. Ensamstående arbetare fick små rum; familjer fick lägenheter. En gemensam matsal tillkom.\n\nI decennier fanns också byns bibliotek i huset. Tänk dig att låna böcker i ett rum där vagnar en gång reparerades.\n\nDen 28 maj 2020 förstörde en brand byggnaden fullständigt. Den beskrevs som en kulturhistoriskt värdefull byggnad.\n\nPlatsen har sedan köpts av nya ägare som planerar att återställa den.\n\nHästskons berättelse speglar bruket självt: byggd för industri, anpassad för gemenskap, skadad av eld och väntande på förnyelse.",
  mission: [
    "Gå där byggnadens kontur en gång fanns",
    "Föreställ dig ljuden — hästar, arbetare, biblioteksbesökare",
    "Diskutera: bör gamla byggnader alltid räddas?",
  ],
  reward: "Tidsresenär",
};
