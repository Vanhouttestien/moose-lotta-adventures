import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const folketshus_sv_5_6: Story = {
  id: "folketshus_sv_5_6",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["3-4", "5-6", "7-9"],

  title: "Alla människors hus",
  subtitle: "Folkets Hus",
  location: { ...LOCATIONS.FOLKETS_HUS, label: "Folkets Hus" },
  audio: "/audio/folketshus_swedish.mp3",
  emoji: "🏛️",
  accent: "bark",
  text: `Lyssna… hör du det?
    Jag är Lotta älg, och jag står här med dig framför den stora byggnaden i Hälleforsnäs.
    Det här är Folkets hus.
    För länge sedan arbetade människorna här i en fabrik i närheten.De var starka… men ofta väldigt trötta efter långa arbetsdagar.
    Men efter jobbet drömde de om något mer.
    En plats där alla kunde mötas.En plats för skratt, dans, musik och film.
    Så de bestämde sig för att bygga det här huset tillsammans.
    År 1961 började bygget.
    Människor hjälpte till efter sina arbeten.De bar trä, målade väggar och arbetade sida vid sida.
    Alla hjälptes åt.
    År 1964 stod huset klart.
    När dörrarna öppnades kom hela byn.
    Barnen kom för att titta på film och skratta tillsammans.
    Och än idag… om du lyssnar riktigt noga…
    kan du nästan höra att huset minns allt som har hänt här.`,
  mission: ["Hitta något gammalt", "Lyssna i 10 sekunder", "Vinka till huset"],
  reward: "Folkets Hus-vän",
};
