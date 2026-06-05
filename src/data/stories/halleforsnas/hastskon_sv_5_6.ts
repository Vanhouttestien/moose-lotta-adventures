import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const hastskon_sv_5_6: Story = {
  id: "hastskon_sv_5_6",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["5-6"],
  title: "Lotta – arbetsälgen",
  subtitle: "En mycket ovanlig hjälpare",
  location: { ...LOCATIONS.HASTSKON, label: "Hästskon" },
  audio: "/audio/hastskon_sv_5_6.mp3",
  emoji: "🫎",
  accent: "bark",
  sources: ["4", "9"],
  text: "Visste du att en älg en gång bodde precis här?\n\nHon hette Lotta.\n\nÄlgar lever oftast djupt inne i skogen.\nMen Lotta var speciell.\n\nHon var tränad att dra vagnar och slädar – precis som en häst!\n\nMänniskorna i Hälleforsnäs kände henne väl.\n\nDen här byggnaden kallades Hästskon, för den var formad som en hästsko.\n\nFörst var det ett stall för hästar och vagnar.\n\nSedan 1920 byggdes det om till bostäder för brukets arbetare.\n\nFamiljer bodde här.\n\nBarn lekte på samma gård där Lotta en gång gick.\n\nI många år fanns det till och med ett bibliotek inne i huset.\n\nSedan en sorglig natt 2020 förstördes byggnaden i en brand.\n\nIdag finns bara ruiner kvar. Men berättelsen lever vidare.\n\nOch berättelsen säger: en älg jobbade en gång precis här.",
  mission: [
    "Rita en hästskoform i luften",
    "Räkna hur många fönster du ser i närheten",
    "Föreställ dig hur Lotta såg ut",
  ],
  reward: "Älgviskare",
};
