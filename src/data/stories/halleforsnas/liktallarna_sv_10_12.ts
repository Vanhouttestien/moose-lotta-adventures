import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const liktallarna_sv_10_12: Story = {
  id: "liktallarna_sv_10_12",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["10-12"],
  title: "Träd som vittnen",
  subtitle: "Liktallarnas hemliga historia",
  location: { ...LOCATIONS.LIKTALLARNA, label: "Liktallarna" },
  audio: "/audio/liktallarna_sv_10_12.mp3",
  image: "/images/stories/liktalarna.jpeg", 
  emoji: "🌲",
  accent: "shadow",
  sources: ["4"],
  text: 'Vid Flensvägen i norra Hälleforsnäs står några av Sörmlands äldsta träd: Liktallarna.\n\nDe är över 400 år gamla. De fanns här långt innan bruket grundades 1659, långt innan järnvägen kom 1876. De har sett Hälleforsnäs växa från ett litet brukssamhälle till en ort med järnväg, fabriker och bostadsområden.\n\nNamnet "Liktallar" antyder en mörkare historia. Enligt en lokal sägen markerade träden samhällets yttersta gräns — en plats där avrättningar genomfördes. En annan berättelse säger att likskjutsar på väg till kyrkogården brukade stanna här för att vila; hästarna behövde paus efter långa transporter över dåliga vägar.\n\nOavsett vilken sägen som stämmer har platsen en påtaglig atmosfär. Tyst. Tung. Som om tallarna själva bär på minnen.\n\nI många svenska folktrostraditioner ansågs uråldriga träd ha särskilda krafter — de kunde skydda platser eller lagra minnen från människor som passerat.\n\nPå 1980- eller 1990-talet skadades träden svårt av en brand. Deras stammar är fortfarande svartbrända och vridna. Men de överlevde.\n\nIdag markerar en plakett med en kolteckning av Edvin Axelsson från 1966 platsen — som om någon velat hjälpa tallarna att aldrig bli glömda.',
  mission: [
    "Undersök brandskadorna på stammarna",
    "Läs texten på plaketten",
    "Fundera: varför kallas de just Liktallar?",
  ],
  reward: "Tidsvittne",
};
