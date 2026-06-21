import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const station_sv_7_9: Story = {
  id: "station_sv_7_9",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["7-9"],
  title: "Hjärtat i stationssamhället",
  subtitle: "Hur järnvägen formade Hälleforsnäs",
  location: { ...LOCATIONS.STATION, label: "Station" },
  audio: "/audio/station_sv_7_9.mp3",
  emoji: "🚉",
  accent: "rust",
  sources: ["1", "4", "6"],
  text: `Stationsbyggnaden i Hälleforsnäs invigdes 1897.

I över ett sekel var detta hjärtat av resandet i området.

Folk åkte tåg till Eskilstuna, Flen och längre bort.

Varor lastades och lossades.

Ett sågverk låg mittemot och utnyttjade järnvägsförbindelsen.

Stationen var så viktig att hela den norra delen av Hälleforsnäs växte upp runt den och bildade ett separat "stationssamhälle" som senare förenades med bruksbyn.

Så småningom behövdes inte stationen längre.

2011 revs byggnaden.

Idag stannar tågen fortfarande här.

Och du står där en historisk byggnad en gång stod — en byggnad som kopplade samman den här byn med resten av världen.`,
  mission: [
    "Peka på var stationsbyggnaden en gång stod",
    "Betrakta stationsområdet på säkert avstånd",
    "Diskutera: vad skulle du ha gjort med byggnaden?",
  ],
  reward: "Järnvägsexpert",
};
