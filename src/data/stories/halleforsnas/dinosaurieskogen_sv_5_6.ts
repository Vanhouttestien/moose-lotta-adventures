import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const dinosaurieskogen_sv_5_6: Story = {
  id: "dinosaurieskogen_sv_5_6",
  villageId: "halleforsnas",
  language: "sv",

  ageGroups: ["5-6", "7-9"],
  title: "Dinosaurierna i skogen",
  subtitle: "Dinosaurieskogen",
  location: { ...LOCATIONS.DINOSAUR_FOREST, label: "Dinosaurieskogen" },
  ambience: "forest",
  audio: "/audio/dinosaurieskogen_sv_5_6.mp3",
  image: "/images/stories/dino.jpeg",
  emoji: "🦕",
  accent: "moss",
  text: `Skogen låter annorlunda här.

    Vinden rör sig mjukt mellan träden.
    Fåglarna sjunger högt ovanför oss.
    Löven knastrar under våra fötter.
    
    Och tänk om något fantastiskt är sant…
    
    Att den här skogen inte alltid har sett ut så här.
    
    Inga vägar.
    Inga hus.
    Inga människor alls.
    
    Bara enorma växter… varm luft… och dinosaurier.
    
    För väldigt, väldigt, VÄLDIGT länge sedan levde dinosaurier över hela jorden.
    
    Och kanske…
    
    bara kanske…
    
    gick några till och med här i Sverige.
    
    Jag tror att skogen minns dem.
    
    Titta ner i mossan.
    
    Ser du de små dinosaurierna som gömmer sig där?
    
    Bakom stenar.
    Bredvid rötter.
    Under löv.
    
    Jag tror inte att de bara är leksaker.
    
    Jag tror att de är dinosauriespanare.
    
    Små väktare från en annan tid.
    
    Kanske har de kommit tillbaka för att se om skogen fortfarande är trygg.
    
    Vissa dinosaurier var enorma.
    
    Så stora att marken skakade när de gick.
    
    DUNS… DUNS… DUNS…
    
    Andra var små och snabba.
    
    De sprang mellan de stora växterna och letade efter mat.
    
    Vissa dinosaurier åt löv.
    
    Vissa hade långa, vassa tänder.
    
    Och några hade taggar, horn eller stora svansar för att skydda sig.
    
    Men vet du min favorithemlighet om dinosaurier?
    
    Fåglar är faktiskt släkt med dinosaurier.
    
    Så när fåglarna sjunger i skogen…
    
    är det nästan som små dinosaurier som pratar med varandra.
    
    Kanske lyssnar de små dinosaurierna som gömmer sig här på sina fågelkusiner.
    
    Väntar.
    
    Tittar.
    
    Gömmer sig tyst i mossan.
    
    Åh!
    
    Såg du den där borta?
    
    Den lilla gröna dinosaurien bredvid trädet?
    
    Jag tror att den rörde sig.
    
    Kanske vaknar dinosaurierna bara när barn kommer hit.
    
    Kanske står de helt stilla när vuxna går förbi.
    
    Och kanske…
    
    när skogen blir mörk och tyst på natten…
    
    klättrar de fram ur sina gömställen och vandrar runt här igen.
    
    Så håll dinosaurieögonen öppna när du går vidare.
    
    Titta högt.
    Titta lågt.
    Titta noga bakom de mossiga stenarna.
    
    För det här kanske inte är en vanlig skog längre.
    
    Det kanske är…
    
    en dinosaurskog. 
    `,
  mission: [
    "Hitta en gömd dinosaurie",
    "Berätta vilken färg den har",
    "Gå fem steg som en dinosaurie",
  ],
  reward: "Dinosaurieupptäckare",
  sources: [],
};
