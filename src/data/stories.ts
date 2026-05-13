export type AgeGroup = "3-4" | "5-6" | "7-9";
export type Language = "sv" | "en";

export interface StoryLocation {
  lat: number;
  lng: number;
  radius: number; // meters
  label: string;
}

export interface Story {
  id: string;
  villageId: string;
  language: Language;
  // Support multiple age groups per story
  ageGroups: AgeGroup[];
  title: string;
  subtitle: string;
  location: StoryLocation;
  audio: string;
  text: string;
  mission: string[];
  reward: string;
  emoji: string;
  accent: "moss" | "ember" | "bark" | "shadow";
}

export interface Village {
  id: string;
  name: string;
  region: string;
  center: { lat: number; lng: number };
}

export const villages: Village[] = [
  {
    id: "halleforsnas",
    name: "Hälleforsnäs",
    region: "Sörmland",
    center: { lat: 59.155, lng: 16.498 },
  },
];

// Approximate Hälleforsnäs coordinates – designed to be edited later via CMS.
export const stories: Story[] = [
  {
    id: "test_forest_1",
    villageId: "halleforsnas",
    language: "en",
    ageGroups: ["5-6", "7-9"],
    title: "The First Moose Signal",
    subtitle: "Test Forest",
    location: {
      lat: 59.1458,
      lng: 16.5122,
      radius: 50,
      label: "Forest Signal Point",
    },
    audio: "",
    text: "A strange signal appears in the forest...",
    mission: ["Walk closer", "Listen", "Observe"],
    reward: "Signal Finder",
    emoji: "📡",
    accent: "moss",
  },
  {
    id: "folketshus_sv_5_6",
    villageId: "halleforsnas",
    language: "sv",
    ageGroups: ["3-4", "5-6", "7-9"],
    
    title: "Alla människors hus",
    subtitle: "Folkets Hus",
    location: { lat: 59.1556, lng: 16.4972, radius: 40, label: "Folkets Hus" },
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
  },
  {
    id: "folketshus_en_5_6",
    villageId: "halleforsnas",
    language: "en",
    
    ageGroups: ["3-4", "5-6", "7-9"],
    title: "House of all people",
    subtitle: "Folkets Hus",
    location: { lat: 59.1556, lng: 16.4972, radius: 40, label: "Folkets Hus" },
    audio: "",
    emoji: "🏛️",
    accent: "bark",
    text: `Listen… do you hear it?

I am Lotta the moose, and I’m standing here with you in front of the big building in Hälleforsnäs.

This is Folkets Hus.

A long time ago, the people here worked in a nearby factory.
They were strong… but often very tired after long days of work.

But after work, they dreamed of something more.

A place where everyone could gather.
A place for laughter, dancing, music, and movies.

So they decided to build this house together.

In 1961, construction began.

People helped after finishing their jobs.
They carried wood, painted walls, and worked side by side.

Everyone helped.

In 1964, the house was finished.

When the doors opened, the whole village came.

The children came to watch movies and laugh together.

And even today… if you listen very carefully…

you can almost hear that the house remembers everything that has happened here.`,
    mission: ["Find something old", "Listen for 10 seconds", "Wave at the building"],
    reward: "Folkets Hus friend",
  },
  {
    id: "dinosaurieskogen_en_5_6",
    villageId: "halleforsnas",
    language: "en",
    ageGroups: ["3-4", "5-6", "7-9"],
    title: "The Dinosaurs in the Forest",
    subtitle: "Dinosaur Forest",
    location: { lat: 59.1571, lng: 16.4938, radius: 60, label: "Dinosaur Forest" },
    audio: "",
    emoji: "🦕",
    accent: "moss",
    text: `The forest sounds different here.

    The wind moves softly between the trees.
    Birds sing high above us.
    Leaves crunch beneath our feet.
    
    And what if something wonderful is true…
    
    That this forest has not always looked like this.
    
    No roads.
    No houses.
    No people at all.
    
    Only enormous plants… warm air… and dinosaurs.
    
    A very, very, VERY long time ago, dinosaurs lived all across the Earth.
    
    And maybe…
    
    just maybe…
    
    some even walked here in Sweden.
    
    I think the forest remembers them.
    
    Look down into the moss.
    
    Do you see the little dinosaurs hiding there?
    
    Behind stones.
    Beside roots.
    Under leaves.
    
    I don’t think they are just toys.
    
    I think they are dinosaur watchers.
    
    Small guardians from another time.
    
    Maybe they came back to see if the forest is still safe.
    
    Some dinosaurs were enormous.
    
    So big that the ground shook when they walked.
    
    THUD… THUD… THUD…
    
    Others were small and fast.
    
    They ran between the giant plants searching for food.
    
    Some dinosaurs ate leaves.
    
    Some had long, sharp teeth.
    
    And some had spikes, horns, or giant tails to protect themselves.
    
    But do you know my favorite dinosaur secret?
    
    Birds are actually related to dinosaurs.
    
    So when birds sing in the forest…
    
    it is almost like tiny dinosaurs talking to each other.
    
    Maybe the little dinosaurs hiding here are listening to their bird cousins.
    
    Waiting.
    
    Watching.
    
    Hiding quietly in the moss.
    
    Oh!
    
    Did you see that over there?
    
    The little green dinosaur beside the tree?
    
    I think it moved.
    
    Maybe dinosaurs only wake up when children come here.
    
    Maybe they stand completely still when adults walk past.
    
    And maybe…
    
    when the forest grows dark and quiet at night…
    
    they climb out from their hiding places and wander around here again.
    
    So keep your dinosaur eyes open as you continue walking.
    
    Look high.
    Look low.
    Look carefully behind the mossy stones.
    
    Because this might not be an ordinary forest anymore.
    
    It might be…
    
    a dinosaur forest.
    `,
    mission: ["Find a hidden dinosaur", "Say what color it is", "Take five dinosaur steps"],
    reward: "Dinosaur Discoverer",
  },
  {
    id: "kolhuset_sv_5_6",
    villageId: "halleforsnas",
    language: "sv",
    ageGroups: ["3-4", "5-6", "7-9"],
    title: "Kolhuset och den svarta elden",
    subtitle: "Kolhuset",
    location: { lat: 59.1542, lng: 16.4995, radius: 40, label: "Kolhuset" },
    audio: "/audio/kolhuset.mp3",
    emoji: "🔥",
    accent: "ember",
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
    
    *Klonk… klonk… klonk…*
    
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
    
    ”Tänk om Kolhuset kunde fyllas av liv igen?”
    
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
  },
  {
    id: "kolhuset_en_5_6",
    villageId: "halleforsnas",
    language: "en",
    ageGroups: ["3-4", "5-6", "7-9"],
    title: "Kolhuset and the Black Fire",
    subtitle: "Kolhuset",
    location: { lat: 59.1542, lng: 16.4995, radius: 40, label: "Kolhuset" },
    audio: "",
    emoji: "🔥",
    accent: "ember",
    text: `Listen… do you hear how it echoes in here?

Big footsteps.
Small footsteps.
Drops of water falling far away.

This is Kolhuset.

And a very long time ago, it was filled from floor to ceiling with black charcoal.

So much charcoal that it almost looked like a mountain inside the building.

Back then, the ironworks needed enormous amounts of charcoal to melt iron.

People in the forests worked very hard to make it.

They built giant charcoal piles from wood.

Then the fire had to burn slowly for many days.

The whole forest smelled like smoke.

And imagine the winters…

Snow everywhere.
Ice covering the lakes.
Cold cheeks and frozen hands.

Horses pulled heavy sleds full of charcoal all the way here to Kolhuset.

Can you hear them?

*Clonk… clonk… clonk…*

Hooves against the hard winter road.

When the great doors opened, the building filled with people, horses, and black coal dust.

Some of that dust is actually still here today.

I almost think the house remembers all the hard work that happened here.

Look up at the roof.

Do you see how high it is?

When Kolhuset was built, it had one of the largest wooden roofs in Europe without pillars in the middle.

It must have felt almost like standing inside the belly of a giant.

The walls are special too.

They are made from slag stone — leftovers from the iron made here at the ironworks.

So almost the whole building was made from things people chose to reuse instead of throw away.

But over time, Kolhuset changed.

Eventually it became a place where old junk was stored.

Year after year, it grew dustier and darker.

But do you know something wonderful?

Kolhuset never disappeared.

When the great fire came to the ironworks in 1934, this building survived.

It remained standing.

Quiet.
Sooty.
Waiting.

And many years later, some people had an idea.

“What if Kolhuset could be filled with people again?”

So they started cleaning.

And oh… what a huge job it was.

They washed away almost 175 years of coal dust from the walls, floors, and ceiling.

Slowly, the old building began to wake up again.

And today…

instead of charcoal and horses…

the house is filled with theater, music, laughter, and applause.

But if you stand very still for a moment…

maybe you can still hear the sleds coming through the snow toward Kolhuset. ✨`,
    mission: ["Find something black", "Find something wooden", "Find something metal"],
    reward: "Little Fire Keeper",
  },
  {
    id: "dinosaurieskogen_sv_5_6",
    villageId: "halleforsnas",
    language: "sv",
    
    ageGroups: ["3-4", "5-6", "7-9"],
    title: "Dinosaurierna i skogen",
    subtitle: "Dinosaurieskogen",
    location: { lat: 59.1571, lng: 16.4938, radius: 60, label: "Dinosaurieskogen" },
    audio: "/audio/dino_swedish.mp3",
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
  },
    {
      "id": "liktallarna_sv_3_4",
      "villageId": "halleforsnas",
      "language": "sv",
      "ageGroups": ["3-4"],
      "title": "De gamla tallarna",
      "subtitle": "Liktallarna",
      "location": {
        "lat": 59.148238932534575,
        "lng": 16.50466225162421,
        "radius": 50,
        "label": "Liktallarna"
      },
      "audio": "",
      "emoji": "🌲",
      "accent": "moss",
      "text": "Titta på de stora tallarna.\n\nDe har stått här väldigt, väldigt länge.\nKanske längre än gammelmormor och gammelmorfar tillsammans.\n\nMänniskor berättar gamla historier om platsen.\nVissa säger att människor stannade här för att vila när de reste långt.\n\nAndra säger att tallarna är magiska.\n\nKanske viskar de med vinden.\n\nFör länge sedan började tallarna brinna.\nElden gjorde dem mörka och sotiga.\n\nMen de står fortfarande kvar.\n\nStarka.\nTysta.\nVaktande över vägen.\n\nOm du tittar noga kanske du kan se hur gamla de verkligen är.",
      "mission": [
        "Krama ett träd",
        "Lyssna på vinden",
        "Hitta något mjukt i naturen"
      ],
      "reward": "Tallvän"
    },
    {
      "id": "liktallarna_en_3_4",
      "villageId": "halleforsnas",
      "language": "en",
      "ageGroups": ["3-4"],
      "title": "The Old Pine Trees",
      "subtitle": "Liktallarna",
      "location": {
        "lat": 59.148238932534575,
        "lng": 16.50466225162421,
        "radius": 50,
        "label": "Liktallarna"
      },
      "audio": "",
      "emoji": "🌲",
      "accent": "moss",
      "text": "Look at the giant pine trees.\n\nThey have stood here for a very, very long time.\nMaybe longer than great-grandparents together.\n\nPeople tell old stories about this place.\nSome say travelers once stopped here to rest.\n\nOthers say the trees are magical.\n\nMaybe they whisper with the wind.\n\nLong ago, the trees were touched by fire.\nThe flames made them dark and smoky.\n\nBut they are still standing.\n\nStrong.\nQuiet.\nWatching over the road.\n\nIf you look carefully, you might see just how old they really are.",
      "mission": [
        "Hug a tree",
        "Listen to the wind",
        "Find something soft in nature"
      ],
      "reward": "Pine Tree Friend"
    },
    {
      "id": "liktallarna_sv_5_6",
      "villageId": "halleforsnas",
      "language": "sv",
      "ageGroups": ["5-6"],
      "title": "Tallarna som minns",
      "subtitle": "Liktallarna",
      "location": {
        "lat": 59.148238932534575,
        "lng": 16.50466225162421,
        "radius": 50,
        "label": "Liktallarna"
      },
      "audio": "",
      "emoji": "🌲",
      "accent": "shadow",
      "text": "Shhh…\n\nHör du vinden i tallarna?\n\nDe här träden är över 400 år gamla.\n\nDe stod här långt innan bilar, gatlampor och moderna hus.\n\nOch runt dem växte många märkliga berättelser fram.\n\nVissa människor sa att det här var samhällets yttersta gräns.\nEn plats där farliga saker hände för länge sedan.\n\nAndra berättade något helt annat.\n\nDe sa att likskjutsar brukade stanna här för att vila under långa resor.\n\nHästarna pustade i kylan.\nVagnarna knarrade.\nOch tallarna såg allt.\n\nMen det finns ännu en berättelse.\n\nAtt träden har magi.\n\nInte trollkarlsmagi.\n\nUtan gammal skogsmagi.\n\nEn sorts tyst kraft som bara riktigt gamla träd kan bära på.\n\nFör länge sedan började tallarna brinna.\nElden skadade dem svårt.\n\nMen de föll aldrig.\n\nDe fortsatte stå kvar.\n\nSom väktare från en annan tid.",
      "mission": [
        "Leta efter spår av eld",
        "Stå helt stilla i 15 sekunder",
        "Lägg handen mot barken"
      ],
      "reward": "Tallväktare"
    },
    {
      "id": "liktallarna_en_5_6",
      "villageId": "halleforsnas",
      "language": "en",
      "ageGroups": ["5-6"],
      "title": "The Trees That Remember",
      "subtitle": "Liktallarna",
      "location": {
        "lat": 59.148238932534575,
        "lng": 16.50466225162421,
        "radius": 50,
        "label": "Liktallarna"
      },
      "audio": "",
      "emoji": "🌲",
      "accent": "shadow",
      "text": "Shhh…\n\nCan you hear the wind moving through the trees?\n\nThese pine trees are more than 400 years old.\n\nThey stood here long before cars, streetlights, and modern houses.\n\nAnd over the years, many strange stories grew around them.\n\nSome people said this was once the very edge of the village.\nA place where frightening things happened long ago.\n\nOthers told a different story.\n\nThey said funeral wagons once stopped here to rest during long journeys.\n\nThe horses breathed clouds into the cold air.\nThe wagons creaked.\nAnd the trees watched silently.\n\nBut there is another story too.\n\nThat these trees hold magic.\n\nNot wizard magic.\n\nOld forest magic.\n\nThe kind only very ancient trees can carry.\n\nLong ago, fire damaged the trees.\nThe flames blackened their trunks.\n\nBut the trees never fell.\n\nThey are still standing.\n\nLike guardians from another age.",
      "mission": [
        "Look for signs of fire",
        "Stand completely still for 15 seconds",
        "Place your hand on the bark"
      ],
      "reward": "Tree Guardian"
    },
    {
      "id": "liktallarna_sv_7_9",
      "villageId": "halleforsnas",
      "language": "sv",
      "ageGroups": ["7-9"],
      "title": "Liktallarnas hemlighet",
      "subtitle": "De brända väktarna",
      "location": {
        "lat": 59.148238932534575,
        "lng": 16.50466225162421,
        "radius": 50,
        "label": "Liktallarna"
      },
      "audio": "",
      "emoji": "🌲",
      "accent": "ember",
      "text": "Framför dig står några av Hälleforsnäs äldsta träd.\n\nLiktallarna.\n\nÖver 400 år gamla.\n\nUnder hundratals år har människor berättat historier om den här platsen.\n\nIngen vet exakt vilka berättelser som är sanna.\n\nEn gammal sägen säger att detta en gång var samhällets yttersta gräns — platsen där människor hängdes.\n\nEn annan berättelse säger att likskjutsar brukade stanna här för att vila på vägen mot kyrkan.\n\nKanske är det därför platsen känns så märklig.\n\nTyst.\nTung.\nSom om luften minns.\n\nMånga trodde också att tallarna hade särskilda krafter.\n\nI gammal folktro kunde uråldriga träd skydda platser… eller bära på minnen från människor som passerat.\n\nSedan kom elden.\n\nPå 1980- eller 1990-talet skadades tallarna svårt av brand.\n\nÄndå står de kvar.\n\nSotiga.\nVridna.\nLevande.\n\nOch bredvid dem finns idag en plakett med en gammal kolteckning från 1966 av Edvin Axelsson.\n\nSom om någon ville hjälpa platsen att aldrig bli glömd.",
      "mission": [
        "Hitta märken efter branden",
        "Läs plaketten tillsammans",
        "Fundera över vilken historia du tror mest på"
      ],
      "reward": "Liktallarnas väktare"
    },
    {
      "id": "liktallarna_en_7_9",
      "villageId": "halleforsnas",
      "language": "en",
      "ageGroups": ["7-9"],
      "title": "The Secret of the Pine Trees",
      "subtitle": "The Burned Guardians",
      "location": {
        "lat": 59.148238932534575,
        "lng": 16.50466225162421,
        "radius": 50,
        "label": "Liktallarna"
      },
      "audio": "",
      "emoji": "🌲",
      "accent": "ember",
      "text": "Before you stand some of the oldest trees in Hälleforsnäs.\n\nThe Liktallarna.\n\nMore than 400 years old.\n\nFor centuries, people have told stories about this place.\n\nNo one knows exactly which stories are true.\n\nOne old legend says this was once the outer edge of the village — a place where people were hanged.\n\nAnother story says funeral wagons stopped here to rest on their long journey toward the church.\n\nMaybe that is why the place feels different.\n\nQuiet.\nHeavy.\nLike the air itself remembers.\n\nMany people also believed the trees held special powers.\n\nIn old folklore, ancient trees could protect places… or carry memories from the people who passed by.\n\nThen came the fire.\n\nIn the 1980s or 1990s, the trees were badly damaged by flames.\n\nAnd still they survived.\n\nBlackened.\nTwisted.\nAlive.\n\nToday, a memorial plaque stands nearby with a charcoal drawing made in 1966 by Edvin Axelsson.\n\nAlmost as if someone wanted to make sure the trees would never be forgotten.",
      "mission": [
        "Find marks left by the fire",
        "Read the memorial plaque together",
        "Decide which legend you believe most"
      ],
      "reward": "Guardian of the Pines"
    }
];

export function getStories(filter?: { language?: Language; ageGroup?: AgeGroup; villageId?: string }) {
  return stories.filter((s) => {
    if (filter?.language && s.language !== filter.language) return false;
    if (filter?.ageGroup && !s.ageGroups.includes(filter.ageGroup)) return false;
    if (filter?.villageId && s.villageId !== filter.villageId) return false;
    return true;
  });
}

export function getStoryById(id: string) {
  return stories.find((s) => s.id === id);
}
