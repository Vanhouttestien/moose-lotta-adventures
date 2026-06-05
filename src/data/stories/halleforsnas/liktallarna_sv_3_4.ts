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
  audio: "/audio/liktallarna_sv_3_4.mp3",
  emoji: "🌲",
  accent: "moss",
  sources: ["4"],
  text: "Titta på de stora tallarna.\n\nDe har stått här väldigt, väldigt länge.\nKanske längre än gammelmormor och gammelmorfar tillsammans.\n\nMänniskor berättar gamla historier om platsen.\nVissa säger att människor stannade här för att vila när de reste långt.\n\nAndra säger att tallarna är magiska.\n\nKanske viskar de med vinden.\n\nFör länge sedan började tallarna brinna.\nElden gjorde dem mörka och sotiga.\n\nMen de står fortfarande kvar.\n\nStarka.\nTysta.\nVaktande över vägen.\n\nOm du tittar noga kanske du kan se hur gamla de verkligen är.",
  mission: ["Krama ett träd", "Lyssna på vinden", "Hitta något mjukt i naturen"],
  reward: "Tallvän",
};
