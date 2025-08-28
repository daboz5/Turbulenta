import { Char } from "../types";

import remember1 from "../assets/chars/rememberme/Remember-Me-1.jpg"
import remember2 from "../assets/chars/rememberme/Remember-Me-2.jpg"
import remember3 from "../assets/chars/rememberme/Remember-Me-3.jpg"
import remember4 from "../assets/chars/rememberme/Remember-Me-4.jpg"
import remember5 from "../assets/chars/rememberme/Remember-Me-5.jpg"
import remember6 from "../assets/chars/rememberme/Remember-Me-6.jpg"
import remember3token from "../assets/chars/rememberme/Remember-Me-Token-3.png"
import remember4token from "../assets/chars/rememberme/Remember-Me-Token-4.png"
import remember5token from "../assets/chars/rememberme/Remember-Me-Token-5.png"
import remember6token from "../assets/chars/rememberme/Remember-Me-Token-6.png"
import repko from "../assets/chars/rememberme/Repko-Token.png"
import huggerfish from "../assets/chars/rememberme/Hugger-Fish-Token.png"

import minamoto from "../assets/chars/minamoto/Minamoto-1.jpg"
import minamotoToken from "../assets/chars/minamoto/Minamoto-Token-1.png"
import defGenToken1 from "../assets/chars/defTokens/avatar-man-person-svgrepo-com.svg"
// import defGenToken2 from "../assets/chars/defTokens/avatar-joker-squad-svgrepo-com.svg"
import defGenToken3 from "../assets/chars/defTokens/avatar-cacti-cactus-svgrepo-com.svg"
// import defGenToken4 from "../assets/chars/defTokens/beard-hipster-male-svgrepo-com.svg"
// import defGenToken5 from "../assets/chars/defTokens/artist-avatar-marilyn-svgrepo-com.svg"
// import defGenToken6 from "../assets/chars/defTokens/anime-away-face-svgrepo-com.svg"

export default function CharData() {

    const chars: Char[] = [{
        name: "Remember Me",
        gender: { pronoun: "he / it", defToken: defGenToken3 },
        class: [{
            title: "Druid",
            lvl: 5
        }, {
            title: "Bard",
            lvl: 2
        }],
        background: "Acolyte of Emily",
        img: {
            imgDef: 2,
            tokenArr: [
                remember3token,
                remember4token,
                remember5token,
                remember6token
            ],
            imgArr: [
                remember1,
                remember2,
                remember3,
                remember4,
                remember5,
                remember6]
        },
        desc: <>
            <p>{`Remember Me is a feygol, a creature druidcrafted from natural materials and magic (usually inhabited by a fey-spirit, thus fey golem).`}</p>
            <p>{`Feygols may change shells or shape as they grow, so Remember Me also changes shape and grows as it levels up. They usually need caster's magic to sustain themselves or magic of the places or artefacts they guard, making them to some extent dependent on their source of magic, but as Emily gave her life to create Remember Me, she also enabled it to carry its source of magic within its body, making it independent.`}</p>
            <p>{`At the beginning, it was a mostly metal construct given life by Emily from many different schools and types of magic, but soon nature replace most of the metal and replaced it with stone and wood as its druidic and faywild nature started to prevail.`}</p>
            <p>{`Mostly made out of stone, later connecting it with roots, covered by moss, with a bright light comming out of its eye-holes. In later life it also learned to immitate breathing, but not with using mouths, air entering and leaving from the side of its body.`}</p>
            <p>{`Remember Me with years grew quite a proficient talker and entertainer as it is constantly talking or performing about Emily, its creator and its life mission, but is not very smart. He is capable to be very wise, but his memory for everything except Emily is rather crude, his understanding of a world lacking and his writting resembling that of a young child. He will often not recognise common concepts and will remember people by their craft or their relation to it instead of by their name.`}</p>
            <p>{`Even so, Rememeber Me will put a great effort into most of what it does, just as Emily would. Due to Emily's long life and being in posession of all of her memories, he might be able to at times performed striking feats of intelligence, even if it is a mostly borrowed knowladge and his interpretation of memories can be lacking.`}</p>
            <p>{`Feygol wanted to live its life in a way Emily would be proud on it, so when not dedicating it to spreading word about her, it often tried to find ways how to help people, especially those that reminded Remember Me of Emily (disabled, sickly, people in need of help and backing).`}</p>
            <p>{`Remember Me gave his life to its own construction, statue of Emily, in hope it would serve its creator better than it was ever able to do by itself, but also in hope that Emily itself might be able to more freely express itself in its creation, its last words: "Remember me, Emily.".`}</p>
        </>,
        companions: [{
            name: "Repko",
            token: repko,
            desc: <>
                <p>{`A traveling companiond, Remember Me's best friend and its casting focus. A magic turnip Repko`}</p>
                <p>{`Repko joined Remember Me soon after it left Emily's body and onsistently helped Remember Me with persuasion, performances and diplomacy. Repko had a strict party role. Whenever Remember Me was talking about Emily (all the time), it assisted. Whenever combat started, it burrowed underground and waited for the danger to pass.`}</p>
                <p>{`After around 30 years of travel Repko dried out and Remember Me thought it had lost him forever, still it kept his body as a spellcasting focus. Then it once traveled deep inside of itself and found Repko again. It asked Repko if he wants to join Remember Me again and Repko said yes. After that it helped Remember Me to become a bard, his performances with 2 tiny maracas being able to enchant audiences all on their own.`}</p>
            </>
        }, {
            name: "Mezolček",
            token: huggerfish,
            desc: <>
                <p>{`An ugly fish that feeds by attaching itself on victims mouth and scraping it for nutrients. It likes large bodies of water.`}</p>
                <p>{`Remember Me found Mezolček on a dried body of an animal and it tried attaching itself on Remember Me, yet as Remember Me didn't exactly had what it was looking on, being mostly made of a living rock and all, it could't. Remember Me interpreted his move as Mezolček trying to french-kiss it and told him it is not into fishes, but offered Mezolček its turnip Goodberries and to be its travel companion.`}</p>
                <p>{`Later they accepted each other as a family. Mezolček tought Remember Me how to be more persuasive (how to kiss as a professional) and Remember Me promised Mezolček a stable food source (it could clean mouths of Nobody's Respite patrons) and to try and find it a larger body of water (which was fulfilled by Nobody's Faro de Luz Respite).`}</p>
            </>
        }, {
            name: "Emily Nightsong",
            token: "",
            desc: <>
                <p>{`Emily se je rodila v večji vilinski klan `}<b>{`Leshisel`}</b>{`, katerega fokus je na varovanju okolja in posledično v ultimativnih varuhih okolja, feygolih. Feygoli omogočajo klanu, da ima drastično več vpliva na okolico glede na relativno majhne populacije vil v primerjavi z ostalimi rasami.`}</p>
                <p>{`Klan je stratificiran na dve populaciji. Druide in njihove pomočnike. Pomočnik je kogarkoli, ki se ne more izkazati kot druid ali je izgubil druidske sposobnosti. Posledično so služabniki notranje razslojeni med tiste, ki so sposobni in izbrani služiti osrednjim druidom ter ostalimi.`}</p>
                <p>{`Ločnica med druidi in pomočniki je kreacija feygola (pomočniki so neredko druidi brez statusa). Odrasteš in postaneš druid tako, da izdelaš feygola. Če feygola ne uspeš izdelati, nisi prepoznan kot odrasel in si de facto otrok, tvoj namen je služiti sposobnejšim in tako prispevati klanu.`}</p>
                <p>{`Vodja klana je bil `}<b>{`Tenor Oakborn`}</b>{`, zelo sposoben druid in potomec zadnjega preživelega iz prve generacije klana. Pod njim je klan začel feygole ne le proizvajati, pač pa tudi izvažati.`}</p>
                <p>{`Oče neznan (nič nenavadnega, večina prakticira poliamorijo, komunalna skrb za otroke), mama `}<b>{`Natalija Nightsong`}</b>{`, znana druidinja, vendar z omejeno močjo. Preferenca na otrocih ni zaželena, vendar otroci občasno lahko vplivajo na sloves starša, recimo skozi številčnost, lastnosti in dejanja.`}</p>
                <p>{`Emily je bila že od rojstva slepa ter bolehava. Kljub slabotnemu telesu pa so se zaradi njene mame od nje pričakovale velike reči, da se bo izkazala in potrdila svojo družino.`}</p>
                <p>{`To se je dokaj naglo izkazalo za pretirano. Njena vez z naravo je bila slabotna, socializacija je bila ovirana zaradi njenih oči, študij narave pa je zamejevalo njeno pomanjkljivo zdravje. Kmalu so začeli odrasli obupavati nad njo, čeprav pritisk pričakovanj nikoli ni povsem popustil.`}</p>
                <p>{`To so izrabili nekateri drugi otroci. `}<b>{`Penelopi`}</b>{` se je zdelo nepravično zakaj gre toliko pozornosti v Emily, medtem ko ne more pokazati toliko napredka kot sama, zato se je namenila postati njen glavni sovražnik, vsak njen neuspeh uporabiti v kontrast svojim lastnim uspehom, v čemer so jo večkrat podprli ostali otroci. Recimo prav tako ne najbolj sposoben `}<b>{`Turtil`}</b>{`, iz družine, ki nikoli ni ničesar pričakovala od njega in ji je zavidal pozornost ter `}<b>{`Orhida`}</b>{`, dokaj medioker dekle, ki je enostavno oboževalo dramo in trpinčenje ostalih je bil njen vzgib kako preganjati čas kadar so stvari postale preveč tihe. Emily je bila priročna in dokaj nemočna tarča za škandale.`}</p>
                <p>{`Predvsem služabniki so se smeli vmešavati v prepire otrok, saj se je smatralo, da bi posegi odraslih druidov spodbujali nepotizem. Služabniki niso imeli pretiranega posluha za Emily, do katere so večinoma čutili mešanico zavisti (njen status) in prezira (njena nesposobnost). Če kaj so pogosto ščitili ali podprli ostale otroke, delno za izražanje lastne frustracije, delno ker so jih vrednote klana v to spodbujale. Sposobnejši so bili konsistentno privilegirani, meritokracija je bila konsistentno nagrajena. Kdorkoli je bil sposoben postati odrasel in to je bilo v odsotnosti jasnih prekrškov spoštovano in nagrajeno. Kar se klana tiče, njihov sistem je deloval in za Emily je kazalo, da bo zaradi telesa in talenta postala eden manj sposobnih pomočnikov.`}</p>
                <p>{`Vendar ni bila povsem sama. Na njeno stran je pogosto stopila `}<b>{`Heliana`}</b>{`, zelo sposobna in nekoliko starejša … vendar običajno preveč zaposlena z lastnim študijem kot potomka starešine klana. `}<b>{`Timberly`}</b>{`, nekoliko starejši, sposobnejši in do Emily vselej vljuden (kakor do vseh prijazen) vilinec, do katerega je Emily sčasoma razvila zaljubljenosti. Tega ni nikoli razkrila, vendar ni mogla dolgo ostati skrivnost pod budnimi očmi ostalih otrok. Njena zaljubljenost je bila tarča posmeha, sramotenja in sčasoma samosramovanja.`}</p>
                <p>{`Njeni vrstniki so začeli izdelovati lastne feygole, medtem ko je Emily z vsakim dnem bolj drsela v pričakovanja pomočnikov. To ni bila posledica pomanjkanja truda. Kljub slabotnemu telesu se je že od mladih nog trudila storiti vse v njeni moči, da bi izpolnila nanjo postavljena visoka pričakovanja, če kaj je zaradi bolehavosti v trudu ne redko na smrt zbolela. Občasno se je med vajo sesedla od utrujenosti. Če ji nihče ni želel pomagati, se je sama podala v nevarnost ter se večkrat vrnila nekoliko raztrgana, sestradana ali nasploh rešena iz strani klana. Verjela je vase. Ni verjela v svoje telo, ni verjela v svoj talent, ni verjela da si zasluži kar ima, vendar verjela je vase, v svoj trud, v svojo prizadevnosti, da če vloži dovolj truda, bo v svojem dolgem življenju prilezla kamor se pričakuje od nje.`}</p>
                <p>{`Trud pa ni bil vselej cenjen. Nekateri so ga vsaj upoštevali, vendar so ji ga mnogi drugi šteli v zlo. Emily se jim je zdela sebična, še posebno pomočnikom. Njen trud jih je stal. Stalno je bilo potrebno skrbeti zanjo, stalno jo je bilo potrebno reševati in niso se mogli odkrito pritoževati nad njeno prizadevnostjo, saj je bilo njeno vedenje v klanu vendarle idealizirano. Niti se ji niso mogli maščevati, saj je bila deležna preveč pozornosti, hkrati pa je bila enostavno preveč neodporna. Okrutna šala se je zanjo zlahka preoblikovala v srečanje s smrtjo in le redki so si upali tvegati. Bolj kot se je Emily trudila preseči svoje meje, bolj je bila prezirana.`}</p>
                <p>{`Dokler nekega dne ni izginila. Ponovno so jo iskali, vendar je niso našli. In niso je mogli najti. Po telesu je bila že nekaj časa odrasla, vendar formalno še vedno otrok in ni želela biti več v breme klana, posledično je zbežala. Slišala je govorice o drugačnih vrstah feygolov. Morda bi ji svet izven klana lahko pomagal s tem česar ni bila sposobna doseči. Ali to, ali pa milostna smrt, samo naj klanu ne bo več v breme.`}</p>
                <p>{`Tako je raziskovala svet in se sčasoma skozi dolga popotovanja naučila najrazličnejših tehnik za oblikovanje družabnikov. Avtomatoni, golemi, duhovi, zavestne magične gmote, vse jo je zanimalo in počasi, vendar vztrajno, je razvijala znanje o vsem. Ni bila sposobna, vendar bila je voljna. Voljna in vztrajna. In dejansko je bila napredna uporabnica druidske magije, izdelava feygola je zelo napredna veščina. Povsod razen v lastnem klanu je bila videna kot zelo sposoben, četudi slep in nekoliko bolehav, druid, vendar tako slepoto kot bolehavost je vse uspešneje popravljala druidska magija, kakor tudi poznavanje narave in občutek za okolico.`}</p>
                <p>{`Tako je izdelala svojega prvega feygola. Neživ, majhen in slaboten konstrukt, komajda vreden imena, ki jo je za izdelavo stal druidske magije in naposled življenja. Vendar lahko ga je čutila. Bil je živ in bil je feygol. Morda ne bo nikoli mogla živeti kot odrasel druid. Morda ne bo klanu nikoli mogla pokazati svojega uspeha. Vendar v drugačni obliki lahko svoje življenje nadaljuje v tem majhnem, slabotnem konstruktu, nekaj njej še kako znanega, her last words: "Remember Me, Emily.".`}</p>
                <p>{`Po svoji smrti je v podobi lisice Remember Me pomagala raziskati samega sebe in razčistiti njegova čustva do smrti kreatorice. Po njej so bila poimenovana mnoga umetniška dela, večinoma iz strani Remember Me in patronov v njenem imenu zgrajenega kulturnega doma.`}</p>
            </>
        }],
        possessions: [{
            name: "Governor's Foot",
            desc: "Magic artefact that makes wearer immune to being frightened and a remain of the mad governor from Season 1. It is still located among Remember Me's crumbled remains and dirt in the sacret enclosure of Pond of Remembrance, possibly making the living artefact immune to being frightened.",
        }, {
            name: "Nobody's Rosa Riendo Respite",
            desc: <>
                <p>{`Rosa Riendo branch of Nobody's Respite, where the operation started and its main office. Remember Me created it as a way to honor Emily and to attract people who would listen to its stories about Emily, but operation expanded into full blown social service, providing beds, food, healing, (mouth cleaning), therapy, basic education and later even job search or even employment in both cultural and manual field.`}</p>
                <p>{`Oaksplit expressed a great interest in the developement of the Respite and helped a lot with its developement and management. The building was at the end given to Birog due to him being a druid and expressed willingness to keep the place running.`}</p>
                <p>{`The upper floor is dedicated to sleeping. The floor also has a bookshelf for reading that has mostly titles with entertainment value, a simple fireplace with a polished-stone base and many windows, covered with hanging plants for those who would prefer darkness when sleeping during the day. The place never had enough capacity to house everyone at once, especially after refugees from Yggrasil joined, so a rudimentary sleeping regiment was established.`}</p>
                <p>{`Lower floor is connected with a not too steep staircase, under which a small storage is located. Mezolček's pond is located in the other back-corner, even if its resident migrated into Pond of Remembrance for his wish to swim in bigger waters. Large bookshelf here is accommodating many books and scrolls with useful information as well as reports and thoughts about Emily's life. Many crude works of Emily can be found hanging on walls, while in the center of the room is an overgrown stone altar with many gifts. Around the altar sweet alyssum took root, its relaxing smell now present in the air. Many cushions for reading, relaxations or socializing are placed around an enlarged fireplace for when cooks are not working at their desk, but even more can be found around the place.`}</p>
                <p>{`The entire place is covered with a carpet of moss and other plants in a way as not to disturb the purpose of the place.`}</p>
            </>,
        }, {
            name: "Nobody's Faro de Luz Respite",
            desc: <>
                <p>{`It consists out of 2 parts: Dormitory and Pond of Remembrance (both from Emily's House of Culture).`}</p>
                <p>{`It is more than anything a pragmatic distinction based on Nobody's Rosa Riendo Respite that when first created had Emily's altar with the offering of healing at the center and food and beds at the side. Even if education was offered and works of art were displayed from the very beginning, it was considered secondary (library, art studios, galleries, theater) to ceremony and basic needs. When operation expanded the distinction remained so that core functions would remain core even as the rest of the operation was starting to take more and more time and space and bringing in new sources revenue.`}</p>
            </>,
        }, {
            name: "Pond of Remembrance",
            desc: <>
                <p>{`This part of the building is a core part of Emily's House of Culture and it is at the same time considered a room, an artefact and a person even as technicaly it is only made out of metal pond and woody plants rooted into it, mostly because distinction is minimal.`}</p>
                <p>{`A large, circular pond with an elemetal (metal from elemental plane of water) base traces the edge of the room, only leaving enough space between itself and the wall for a line of especially rich earth where outermost woody plants are rooted in and intermingle with those rooted in from the inner side of the circular pond. Plants will sometimes move to the side, so visitor might access the pond to swim or drink from it.`}</p>
                <p>{`Most of the remaining floor area is covered with a thick carpet or moss, but some other plants can be found, both by accident, comming inside by visitors, and by intent, were gardened in to enrich the idea of a pond.`}</p>
                <p>{`The room has 5 layers.`}</p>
                <p>{`Top one is the canopy, under which pillar-like plants form collums that twist and support each other as a living architecture, forming a crown of branches, growing up along some dormitory windows, until they finally reach the top of the building where they can get as much sunlight as possible that they can then share with the rest of the plants in the area. At some nights, at noon, or when asked, the branches might move and open up the canopy to display the sky full of stars or let the sun all the way down to where the shrine is.`}</p>
                <p>{`Terrace formed out of a living wood from both sides of a pond is connected to both sides to the dormitory's first floor with a simple doors. Terrace is almost circular. Only a thick wall of with sweet alyssum covering woody plants is blocking it from becomming a full circle. Terrace lowers itself to the front of the building where pond's waterfalls are, but also where terrace's steps are, connecting upper and lower parts. Terrace itself is from every side connected to the ground floor with woody steps. Terraces have many tables and seats where visitors might socialise and patrons might even organise a simple catering service due to the proximity of a kitchen.`}</p>
                <p>{`Upper terrace (as well as practically every other part) connects to a middle ground area, where most of the shrine's less sacret activities (like healing and therapy and less important rituals) might be performed. This part of the room is on the middle, so it gets more sunlight, moonlight and starlight than any other part.`}</p>
                <p>{`Middle area is connected to the lower area with steps on both sides and a gentle slope on the middle. All of the central woody pillars grow on in these two areas. Lower central part dedicated to visitors that simply want to drink, swim or pray.`}</p>
                <p>{`Middle area is also connected to the upper area, probably the most mysterious, highest and enclosed part of the pond. It is divided from the rest of the place by the thick layer of wooden living plants, overgrown by a carpet of sweet alyssum and a steep waterfall. Inner space of the enclosure is only accessible trough a curtain of softer, flowery plants on the top of woody stairs (that can on druid's command turn into a ramp). Inside, a quartz platform as well as side-steps into the pond can be found as well as the centerpiece of this entire place, statue of Emily.`}</p>
                <p>{`Plants at the main door will sometime block or open the path as they will, but might be persuaded otherwise, especially by a druid. From there you can enter the room and cross the pond by a bridge, made out of living plants, which act as another obstacle if Pond were to decide to block visitors.`}</p>
                <p>{`Pond itself is at most sections 2 m wide and up to 1,5 m deep metal artefact with a rough but safe inner texture, covered in its entirety with barely visible but delicate shapes that somewhat resemble druidic language shaped into pictures and stories, which itself is mostly covered by a thick cover of elemental mud, that keeps regenerating itself. Pond itself is also regenerating and absorbing water, so even if water is constantly overflowing from the upper part, creating waterfalls, lower parts will never overflow ... if Pond doesn't decide it should. This constant recycling of water also keeps the water clean and somewhat resistant to corruption. Water is also being termoregulated by a statue to the needs of its visitors and inhabitants. Inside, smaller species of fish, insects, snakes, lizards, spiders, amphibians and water plants can sometimes be spotted, swimming or maybe hiding in mud, moss, rocks or branches. Even plants around the place have a somewhat more alive feeling to them as they will sometimes move, respond and regenerate way faster than in the wild. Sound of water is due to many waterfalls everpresent. Smell of moss and flowery plants that grow from or on wooden ones (especially on the inner side of the pond's outer dome) is pleasant. The place feels alive. The only quiet part, where no flowers grow and sounds of animals is not present is the enclosure, where sounds are distant, smell of sweet alyssum the only one present and a gentle light is the only light, comming from the pond itself. The place almost gives a feeling of a sacret cave, removed from the hustle and bustle of the outside. It is here where statue of Emily is located.`}</p>
                <p>{`Statue of Emily is very detailed, down to the pore, it is clear a lot of work was put into it. An elf, dressed in well made druidic clothes. Her arms as well as the rest of the statue are made from cold and brass metal, stretching down to the water surface as if channeling something. She is squatting, with one leg lowered into the pool itself. The most curious part of the structure might be her blind eyes, made out of white pearls that were soaked with healing magic as well as gentle, determined smile on her face.`}</p>
            </>
        }, {
            name: "Emily's House of Culture",
            desc: <>
                <p>{`The building is made out of 3 main parts: frontal part, where theater, galleries, library, studios etc. are located and is open to visitors, 2 dormitories, which are mostly meant for patrons (with an exception of SCs) and Pond of Remembrance, that is also opened for visitors, but with a different purpose. As Pond is described elsewhere in detail, only other 2 parts will be described here.`}</p>
                <p>{`You may enter from the side facing west (on the city map), where a wide, main entrance is located, you enter a wide hallway full of paintings and sculptures made by patrons, many of them dedicated to Emily. You can go down to the basement level where you can leave your stuff at dedicated and manned wardrobe or buy snacks and refreshments at for this purpose dedicated stores. Once you return, you can use lower entrances leading into the enormous main hall and take a seat or go to the stage, mostly covered by the curtain. Exploring the stage behind a curtain, you may notice it is quite big. Trough another layer of curtains and sets you can go into more crammed backstage, where many useful tools for any occasion can be found. Continue forward left or right trough sound-isolated doors and you will come into the dinning hall of one of 2 dormatories, one of those of more orderly nature and one of those with more chaotic tendencies. Each resident can choose where to live (if causing troubles they will be placed into another dormitory before removal) so residents are least likely to step on each other's nerves given their lifestyle. Each dormitory has their kitchen and main Slime Closets, meant for both patrons and visitors.`}</p>
                <p>{`Stairs around here lead down, where extensive storage can be found. Dormitories have mostly doubled storage spaces due to their divergent tastes, but they do share space for some of the more dedicated equipment as they are in charge of maintaining building as a whole. Going back, if we go past SCs, we can go to the last part of underground level we haven't visited yet. Here dedicated equipment for the theater is stored, sets, props, instruments, everything that might be needed on the stage if need presents itself. Here are also guest rooms, security that guards the equipment, as well as waiting room for performers, where they can take a break, wait for their time, apply makeup or dress themselves in large dedicated theater wardrobe.`}</p>
                <p>{`Using the same stairs, we can go up to the 1. floor, where there are main balcony seats as well as some dedicated ones for guests that might require more personal space. Up here is also another gallery, this one with a handpicked selection of works of art. If the lower one presented work of patrons in general, this one is meant to be a more curated one. Where the entrance would be on the lower floor, here a giant glass panel is located, letting guests have a clear view on the coming and going visitors and place's surroundings. Back to the dormitories, we pass manager's office for each dorm-wing and find where most of the patrons rest. There are individual rooms as well as more crammed common ones. There is also the door from each side that leads directly into Pond of Remembrance.`}</p>
                <p>{`On the highest floor we can find small general storage, as well as many SCs and a place where patrons can bath or clean their tools. Close to here is another gallery, where unfinished-finished works can be presented (or temporary stored), but also where we can access 6 crafting departments, each filled with dedicated tools for creation of works of art. The hope of Remember Me was, that due to high-lvl of production, artists from across the island will come here to perform, work, socialize and thus share their knowledge with less proficient patrons of the shelter, so transfer of know-how can take place. There is also relatively small and more isolated library, segmented into 2 main sections, where knowledge can be stored and accessed if need be.`}</p>
            </>,
        }, {
            name: "Emily's Druid Clothes",
            desc: "Remember Me was at special ocasions seen wearing them, especially as its body became more elf-shaped. They were a hand-made replica of the original and to Remember Me represented maybe not the most beautiful, but the most pure clothing one could wear.",
        }, {
            name: <>
                {`Sweet Alyssum`}<br />
                {`(sladki grobelnik)`}
            </>,
            desc: "Emily's favourite flower due to its relaxing smell. Remember Me couldn't smell it, but it could turn into an animal that could smell it. It always had both insence and seeds (it could grow with Druidcraft into flowers and back into seeds) on itself. At the end of Remember Me's life it was also a flower that grows all over sacret enclosure of Pond of Rememberance.",
        }, {
            name: "Prayer Book of Emily",
            desc: "Book that had a full story of Emily written inside of it along with many notes with Remember Me's personal thoughts as well as prayers in later chapters. Book was not so long before Remember Me's life ended donated to the portal ship to ensure its safe travels (and help spread the word of Emily into other planes and places).",
        }],
        backstory: <>
            <p>{`Emily Nightsong se je rodila v vilinski klan varuhov gozda z izredno močnim poudarkom na pripadnosti in sposobnosti. In dosežek ter posebnost klana, na katero je klan daje prav posebno pozornost, saj ga loči od vseh ostalih klanov in ki naj bi ga vsak član klana dosegel za iniciacijo v odraslost ... izdelava Feygolema.`}</p>
            <p>{`Žal je bila Emily slepa in brez talenta za veščine v katerih se je klan specializiral, izpostavljena tako preziru kot omalovaževanju.`}</p>
            <p>{`Po mnogih letih prizadevanj in zaničevanja še vedno ni obupala nad svojim poslanstvom, prispevati klanu, dokazati svoje mesto v njem.`}</p>
            <p>{`V obupu se je odpravila v svet ter se obrnila k drugačnim tehnikam, izdelava golemov, avtomatonov, okultizem, karkoli bi jo lahko približalo cilju, izdelati Feygolema.`}</p>
            <p>{`Dokler ji končno ni uspelo. Skorajda. Zbrala je vse svoje znanje najrazličnejših šol izdelave življenja in izdelala nekaj, kar je vsebovalo prvine vseh. In delovalo je. Skorajda. Gibalo se je, govorilo je, poslušalo je, obnašalo se je natanko tako kot bi pričakoval od živega bitja. Edina težava ... bilo je mrtvo. Še več, Emily je kot posledica ubadanja z drugačnimi tehnikami začel pojenjati še preostanek magije katero je imela do tedaj.`}</p>
            <p>{`Obupana je storila poslednjo reč katera ji je v njenih mislih še preostala. Če ne more ustvariti življenje, ga morda lahko vsaj prenese. Namesto iz vse bolj pešajočega občutka za naravo okoli sebe, je segla v naravo v sebi, jo zajela in začela prelivati v lupino bitja poleg sebe. In delovalo je. Kakor je prelivala svoje življenje in kakor so roke postajale vse težje ter misli bolj utrudljive, je znotraj teme vsakdana nekaj začutila. Nekaj prisotnega. Nekaj živega.`}</p>
            <p>{`Uspela je! Končno se je dokazala. Končno je zaslužila mesto v klanu. Samo še malo. Samo še malenkost in uspelo ji bo. Ni se več mogla spomniti kaj ji bo uspelo, vendar uspelo bo. Njene poslovilne besede novonastalemu bitju so bile: "Remember me, Emily."`}</p>
            <p>{`S temi besedami je umrla.`}</p>
            <p>{`Vendar ravnokar stvarjeno bitje ni razumelo poslednje volje svojega stvaritelja. Če kaj je bilo zelo zmedeno. Vanj so bili skupaj z življenjem preliti njeni spomini, vendar bili so brez zanj relevantnega pomena. Prazni. In nato njene besede. "Remember me, Emily". Remember? Me? Emily? Emily je oseba v njegovih spominih. Torej kdo je ono? Če ni Emily in če je govorilo njemu, mora biti Remember Me. Hkrati so poslednje besede delovale kot navodilo. Remember me. Vendar bitje se je Emily že spominjalo. Kako bi jo lahko pozabilo? Vendar Emily je želela biti opažena. Morda je bil to resnični pomen njenih besed? Ne ono, pač pa ves svet naj bi se spomnil njenega obstoja ter prizadevanj?`}</p>
            <p>{`To je postalo novo poslanstvo novega bitja. Ponesti spomin o Emily v svet. Nekega dne se bodo vsi spominjali Emily. Emily Nightsong. Vilinke, ki je navkljub vsemu naposled naredila lastnega Feygolema.`}</p>
        </>
    }, {
        name: "Minamoto",
        gender: { pronoun: "he", defToken: defGenToken1 },
        class: [{
            title: "",
            lvl: 0
        }],
        background: "",
        img: {
            imgDef: 0,
            tokenArr: [minamotoToken],
            imgArr: [minamoto]
        },
        desc: <>{``}</>
    }]

    return { chars };
}