import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const station_sv_10_12: Story = {
  id: "station_sv_10_12",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["10-12"],
  title: "Räls och en delad by",
  subtitle: "Hur järnvägen formade Hälleforsnäs",
  location: { ...LOCATIONS.STATION, label: "Station" },
  audio: "/audio/station_sv_10_12.mp3",
  emoji: "🚉",
  accent: "rust",
  sources: ["1", "4", "6"],
  text: `Järnvägen förändrade Hälleforsnäs.

Innan spåren lades var bruket hela samhället. Arbetarna bodde i torp i närheten. Allt kretsade kring järn.

Den ursprungliga stationsbyggnaden invigdes 1897.

Plötsligt blev området kring stationen attraktivt. Ett sågverk etablerades mittemot. Ett nytt samhälle växte upp runt järnvägen, skilt från bruksbyn i söder. Detta "stationssamhälle" fick egen skola, butiker och identitet.

I decennier fanns de två halvorna av Hälleforsnäs — bruksbyn och stationssamhället — sida vid sida. Så småningom växte de samman till en ort.

Bruket självt räddades av järnvägen. När den europeiska konkurrensen hårdnade i slutet av 1800-talet lades många svenska bruk ner. Hälleforsnäs överlevde delvis för att det nu kunde transportera varor med tåg.

2011 revs stationsbyggnaden.

Idag stannar tågen fortfarande här. Inget finns kvar av den ursprungliga byggnaden förutom minnet — och berättelsen om en ort formad av järn och räls.`,
  mission: [
    "Betrakta den gamla perrongen på säkert avstånd",
    "Titta efter sågverkets plats mittemot",
    "Spåra gamla banvallen på en karta",
  ],
  reward: "Järnvägshistoriker",
};
