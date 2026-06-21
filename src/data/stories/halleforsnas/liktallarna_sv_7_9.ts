import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const liktallarna_sv_7_9: Story = {
  id: "liktallarna_sv_7_9",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["7-9"],
  title: "Liktallarnas hemlighet",
  subtitle: "De brända väktarna",
  location: { ...LOCATIONS.LIKTALLARNA, label: "Liktallarna" },
  audio: "/audio/liktallarna_sv_7_9.mp3",
  image: "/images/stories/liktalarna.jpeg", 
  emoji: "🌲",
  accent: "ember",
  sources: ["4"],
  text: `Framför dig står några av Hälleforsnäs äldsta träd.

Liktallarna.

Över 400 år gamla.

Under hundratals år har människor berättat historier om den här platsen.

Ingen vet exakt vilka berättelser som är sanna.

En gammal sägen säger att detta en gång var samhällets yttersta gräns.

En annan berättelse säger att likskjutsar brukade stanna här för att vila på vägen mot kyrkan.

Kanske är det därför platsen känns så märklig.

Tyst.
Tung.
Som om luften minns.

Många trodde också att tallarna hade särskilda krafter.

I gammal folktro kunde uråldriga träd skydda platser… eller bära på minnen från människor som passerat.

Sedan kom elden.

På 1980- eller 1990-talet skadades tallarna svårt av brand.

Ändå står de kvar.

Sotiga.
Vridna.
Levande.

Och bredvid dem finns idag en plakett med en gammal kolteckning från 1966 av Edvin Axelsson.

Som om någon ville hjälpa platsen att aldrig bli glömd.`,
  mission: [
    "Hitta märken efter branden",
    "Läs plaketten tillsammans",
    "Fundera över vilken historia du tror mest på",
  ],
  reward: "Liktallarnas väktare",
};
