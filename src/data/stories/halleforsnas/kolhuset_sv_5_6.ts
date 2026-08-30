import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const kolhuset_sv_5_6: Story = {
  id: "kolhuset_sv_5_6",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["5-6", "7-9"],
  title: "Kolhuset och den svarta elden",
  subtitle: "Kolhuset",
  location: { ...LOCATIONS.KOLHUSET, label: "Kolhuset" },
  ambience: "fire",
  audio: "/audio/kolhuset_sv_5_6.mp3",
  image: "images/stories/kolhuset.jpeg",
  emoji: "🔥",
  accent: "ember",
  sources: ["2", "8"],
  text: `Lyssna… hör du hur det ekar här inne?

    Tunga steg.
    Små steg.
    Vattendroppar långt borta i mörkret.
    
    Det här är Kolhuset.
    
    För väldigt länge sedan var hela byggnaden fylld från golv till tak med svart träkol.
    
    Så mycket kol att det nästan såg ut som ett berg inuti huset.
    
    På den tiden behövdes enorma mängder kol för att smälta järn vid bruket.
    
    Människor ute i skogarna arbetade hårt för att göra kolet.
    
    De byggde stora kolmilor av trä.
    
    Sedan fick elden brinna långsamt i många dagar.
    
    Hela skogen luktade rök.
    
    Och tänk dig vintern…
    
    Snö överallt.
    Is på sjöarna.
    Kalla kinder och frusna händer.
    
    Hästar drog tunga slädar fulla med träkol hela vägen hit till Kolhuset.
    
    Kan du höra dem?
    
    Klonk… klonk… klonk…
    
    Hovarna mot den frusna vintervägen.
    
    När de stora portarna öppnades fylldes huset av människor, hästar och svart koldamm.
    
    Lite av det dammet finns faktiskt kvar än idag.
    
    Det känns nästan som att huset minns allt arbete som gjordes här.
    
    Titta upp mot taket.
    
    Ser du hur högt det är?
    
    När Kolhuset byggdes hade det ett av Europas största fribärande trätak – utan pelare i mitten.
    
    Det måste ha känts som att stå inne i en jättes mage.
    
    Väggarna är också speciella.
    
    De är byggda av slaggsten – rester från järnframställningen här på bruket.
    
    Nästan hela huset är gjort av sådant som människor tog tillvara istället för att kasta bort.
    
    Men med tiden förändrades Kolhuset.
    
    Det blev till slut ett förråd… och sedan en slags skräpkammare.
    
    År efter år blev det mörkare och dammigare.
    
    Men Kolhuset försvann aldrig.
    
    När den stora branden på bruket kom 1934 stod just den här byggnaden kvar.
    
    Tyst.
    Sotig.
    Väntande.
    
    Många år senare fick några människor en idé.
    
    "Tänk om Kolhuset kunde fyllas av liv igen?"
    
    Så de började städa.
    
    Och vilket arbete det var.
    
    De tvättade bort nästan 175 års koldamm från väggar, golv och tak.
    
    Långsamt började det gamla huset vakna igen.
    
    Och idag…
    
    istället för kol och hästar…
    
    är Kolhuset fyllt av teater, musik, skratt och applåder.
    
    Men om du står helt stilla en stund…
    
    kan du kanske fortfarande höra slädarna i snön som är på väg hit till Kolhuset. `,
  mission: ["Hitta något svart", "Hitta något av trä", "Hitta något av metall"],
  reward: "Lilla Eldväktaren",
};
