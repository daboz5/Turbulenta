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

export default function CharData() {

    const chars: Char[] = [{
        name: "Remember Me",
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
            {`Nobody is unknown and misterious`}<br />
            {`It is unknown how misterious it is.`}
        </>,
        companions: [{
            name: "Repko",
            token: repko,
            desc: <>
                {`A traveling companiond, Remember Me's best friend and its casting focus. A magic turnip Repko`}<br />
                {`Repko joined Remember Me soon after it left Emily's body and onsistently helped Remember Me with persuasion, performances and diplomacy. Repko had a strict party role. Whenever Remember Me was talking about Emily (all the time), it assisted. Whenever combat started, it burrowed underground and waited for the danger to pass.`}<br />
                {`After around 30 years of travel Repko dried out and Remember Me thought it had lost him forever, still it kept his body as a spellcasting focus. Then it once traveled deep inside of itself and found Repko again. It asked Repko if he wants to join Remember Me again and Repko said yes. After that it helped Remember Me to become a bard, his performances with 2 tiny maracas being able to enchant audiences all on their own.`}
            </>
        }, {
            name: "Mezolček",
            token: huggerfish,
            desc: <>
                {`An ugly fish that feeds by attaching itself on victims mouth and scraping it for nutrients. It likes large bodies of water.`}<br />
                {`Remember Me found Mezolček on a dried body of an animal and it tried attaching itself on Remember Me, yet as Remember Me didn't exactly had what it was looking on, being mostly made of a living rock and all, it could't. Remember Me interpreted his move as Mezolček trying to french-kiss it and told him it is not into fishes, but offered Mezolček its turnip Goodberries and to be its travel companion.`}<br />
                {`Later they accepted each other as a family. Mezolček tought Remember Me how to be more persuasive (how to kiss as a professional) and Remember Me promised Mezolček a stable food source (it could clean mouths of Nobody's Respite patrons) and to try and find it a larger body of water (which was fulfilled by Nobody's Faro de Luz Respite).`}
            </>
        }, {
            name: "Emily Nightsong",
            token: "",
            desc: <>
                {`Emily se je rodila v večji vilinski klan `}<b>{`Leshisel`}</b>{`, katerega fokus je na varovanju okolja in posledično v ultimativnih varuhih okolja, feygolih. Feygoli omogočajo klanu, da ima drastično več vpliva na okolico glede na relativno majhne populacije vil v primerjavi z ostalimi rasami.`}<br />
                {`Klan je stratificiran na dve populaciji. Druide in njihove pomočnike. Pomočnik je kogarkoli, ki se ne more izkazati kot druid ali je izgubil druidske sposobnosti. Posledično so služabniki notranje razslojeni med tiste, ki so sposobni in izbrani služiti osrednjim druidom ter ostalimi.`}<br />
                {`Ločnica med druidi in pomočniki je kreacija feygola (pomočniki so neredko druidi brez statusa). Odrasteš in postaneš druid tako, da izdelaš feygola. Če feygola ne uspeš izdelati, nisi prepoznan kot odrasel in si de facto otrok, tvoj namen je služiti sposobnejšim in tako prispevati klanu.`}<br />
                {`Vodja klana je bil `}<b>{`Tenor Oakborn`}</b>{`, zelo sposoben druid in potomec zadnjega preživelega iz prve generacije klana. Pod njim je klan začel feygole ne le proizvajati, pač pa tudi izvažati.`}<br />
                {`Oče neznan (nič nenavadnega, večina prakticira poliamorijo, komunalna skrb za otroke), mama `}<b>{`Natalija Nightsong`}</b>{`, znana druidinja, vendar z omejeno močjo. Preferenca na otrocih ni zaželena, vendar otroci občasno lahko vplivajo na sloves starša, recimo skozi številčnost, lastnosti in dejanja.`}<br />
                {`Emily je bila že od rojstva slepa ter bolehava. Kljub slabotnemu telesu pa so se zaradi njene mame od nje pričakovale velike reči, da se bo izkazala in potrdila svojo družino.`}<br />
                {`To se je dokaj naglo izkazalo za pretirano. Njena vez z naravo je bila slabotna, socializacija je bila ovirana zaradi njenih oči, študij narave pa je zamejevalo njeno pomanjkljivo zdravje. Kmalu so začeli odrasli obupavati nad njo, čeprav pritisk pričakovanj nikoli ni povsem popustil.`}<br />
                {`To so izrabili nekateri drugi otroci. `}<b>{`Penelopi`}</b>{` se je zdelo nepravično zakaj gre toliko pozornosti v Emily, medtem ko ne more pokazati toliko napredka kot sama, zato se je namenila postati njen glavni sovražnik, vsak njen neuspeh uporabiti v kontrast svojim lastnim uspehom, v čemer so jo večkrat podprli ostali otroci. Recimo prav tako ne najbolj sposoben `}<b>{`Turtil`}</b>{`, iz družine, ki nikoli ni ničesar pričakovala od njega in ji je zavidal pozornost ter `}<b>{`Orhida`}</b>{`, dokaj medioker dekle, ki je enostavno oboževalo dramo in trpinčenje ostalih je bil njen vzgib kako preganjati čas kadar so stvari postale preveč tihe. Emily je bila priročna in dokaj nemočna tarča za škandale.`}<br />
                {`Predvsem služabniki so se smeli vmešavati v prepire otrok, saj se je smatralo, da bi posegi odraslih druidov spodbujali nepotizem. Služabniki niso imeli pretiranega posluha za Emily, do katere so večinoma čutili mešanico zavisti (njen status) in prezira (njena nesposobnost). Če kaj so pogosto ščitili ali podprli ostale otroke, delno za izražanje lastne frustracije, delno ker so jih vrednote klana v to spodbujale. Sposobnejši so bili konsistentno privilegirani, meritokracija je bila konsistentno nagrajena. Kdorkoli je bil sposoben postati odrasel in to je bilo v odsotnosti jasnih prekrškov spoštovano in nagrajeno. Kar se klana tiče, njihov sistem je deloval in za Emily je kazalo, da bo zaradi telesa in talenta postala eden manj sposobnih pomočnikov.`}<br />
                {`Vendar ni bila povsem sama. Na njeno stran je pogosto stopila `}<b>{`Heliana`}</b>{`, zelo sposobna in nekoliko starejša … vendar običajno preveč zaposlena z lastnim študijem kot potomka starešine klana. `}<b>{`Timberly`}</b>{`, nekoliko starejši, sposobnejši in do Emily vselej vljuden (kakor do vseh prijazen) vilinec, do katerega je Emily sčasoma razvila zaljubljenosti. Tega ni nikoli razkrila, vendar ni mogla dolgo ostati skrivnost pod budnimi očmi ostalih otrok. Njena zaljubljenost je bila tarča posmeha, sramotenja in sčasoma samosramovanja.`}<br />
                {`Njeni vrstniki so začeli izdelovati lastne feygole, medtem ko je Emily z vsakim dnem bolj drsela v pričakovanja pomočnikov. To ni bila posledica pomanjkanja truda. Kljub slabotnemu telesu se je že od mladih nog trudila storiti vse v njeni moči, da bi izpolnila nanjo postavljena visoka pričakovanja, če kaj je zaradi bolehavosti v trudu ne redko na smrt zbolela. Občasno se je med vajo sesedla od utrujenosti. Če ji nihče ni želel pomagati, se je sama podala v nevarnost ter se večkrat vrnila nekoliko raztrgana, sestradana ali nasploh rešena iz strani klana. Verjela je vase. Ni verjela v svoje telo, ni verjela v svoj talent, ni verjela da si zasluži kar ima, vendar verjela je vase, v svoj trud, v svojo prizadevnosti, da če vloži dovolj truda, bo v svojem dolgem življenju prilezla kamor se pričakuje od nje.`}<br />
                {`Trud pa ni bil vselej cenjen. Nekateri so ga vsaj upoštevali, vendar so ji ga mnogi drugi šteli v zlo. Emily se jim je zdela sebična, še posebno pomočnikom. Njen trud jih je stal. Stalno je bilo potrebno skrbeti zanjo, stalno jo je bilo potrebno reševati in niso se mogli odkrito pritoževati nad njeno prizadevnostjo, saj je bilo njeno vedenje v klanu vendarle idealizirano. Niti se ji niso mogli maščevati, saj je bila deležna preveč pozornosti, hkrati pa je bila enostavno preveč neodporna. Okrutna šala se je zanjo zlahka preoblikovala v srečanje s smrtjo in le redki so si upali tvegati. Bolj kot se je Emily trudila preseči svoje meje, bolj je bila prezirana.`}<br />
                {`Dokler nekega dne ni izginila. Ponovno so jo iskali, vendar je niso našli. In niso je mogli najti. Po telesu je bila že nekaj časa odrasla, vendar formalno še vedno otrok in ni želela biti več v breme klana, posledično je zbežala. Slišala je govorice o drugačnih vrstah feygolov. Morda bi ji svet izven klana lahko pomagal s tem česar ni bila sposobna doseči. Ali to, ali pa milostna smrt, samo naj klanu ne bo več v breme.`}<br />
                {`Tako je raziskovala svet in se sčasoma skozi dolga popotovanja naučila najrazličnejših tehnik za oblikovanje družabnikov. Avtomatoni, golemi, duhovi, zavestne magične gmote, vse jo je zanimalo in počasi, vendar vztrajno, je razvijala znanje o vsem. Ni bila sposobna, vendar bila je voljna. Voljna in vztrajna. In dejansko je bila napredna uporabnica druidske magije, izdelava feygola je zelo napredna veščina. Povsod razen v lastnem klanu je bila videna kot zelo sposoben, četudi slep in nekoliko bolehav, druid, vendar tako slepoto kot bolehavost je vse uspešneje popravljala druidska magija, kakor tudi poznavanje narave in občutek za okolico.`}<br />
                {`Tako je izdelala svojega prvega feygola. Neživ, majhen in slaboten konstrukt, komajda vreden imena, ki jo je za izdelavo stal druidske magije in naposled življenja. Vendar lahko ga je čutila. Bil je živ in bil je feygol. Morda ne bo nikoli mogla živeti kot odrasel druid. Morda ne bo klanu nikoli mogla pokazati svojega uspeha. Vendar v drugačni obliki lahko svoje življenje nadaljuje v tem majhnem, slabotnem konstruktu, nekaj njej še kako znanega.`}<br />
                {`Po svoji smrti je v podobi lisice Remember Me pomagala raziskati samega sebe in razčistiti njegova čustva do smrti kreatorice. Po njej so bila poimenovana mnoga umetniška dela, večinoma iz strani Remember Me in patronov v njenem imenu zgrajenega kulturnega doma.`}
            </>
        }],
        possessions: [{
            name: "Governor's Foot",
            desc: "Magic artefact that makes wearer immune to being frightened and a remain of the mad governor from Season 1. It is still located among Remember Me's crumbled remains and dirt in the sacret enclosure of Pond of Remembrance, possibly making the living artefact immune to being frightened.",
        }, {
            name: "Nobody's Rosa Riendo Respite",
            desc: <>
                {`Rosa Riendo branch of Nobody's Respite, where the operation started and its main office. Remember Me created it as a way to honor Emily and to attract people who would listen to its stories about Emily, but operation expanded into full blown social service, providing beds, food, healing, (mouth cleaning), therapy, basic education and later even job search or even employment in both cultural and manual field.`}<br />
                {`Oaksplit expressed a great interest in the developement of the Respite and helped a lot with its developement and management. The building was at the end given to Birog due to him being a druid and expressed willingness to keep the place running.`}<br />
                {`The upper floor is dedicated to sleeping. The floor also has a bookshelf for reading that has mostly titles with entertainment value, a simple fireplace with a polished-stone base and many windows, covered with hanging plants for those who would prefer darkness when sleeping during the day. The place never had enough capacity to house everyone at once, especially after refugees from Yggrasil joined, so a rudimentary sleeping regiment was established.`}<br />
                {`Lower floor is connected with a not too steep staircase, under which a small storage is located. Mezolček's pond is located in the other back-corner, even if its resident migrated into Pond of Remembrance for his wish to swim in bigger waters. Large bookshelf here is accommodating many books and scrolls with useful information as well as reports and thoughts about Emily's life. Many crude works of Emily can be found hanging on walls, while in the center of the room is an overgrown stone altar with many gifts. Around the altar sweet alyssum took root, its relaxing smell now present in the air. Many cushions for reading, relaxations or socializing are placed around an enlarged fireplace for when cooks are not working at their desk, but even more can be found around the place.`}<br />
                {`The entire place is covered with a carpet of moss and other plants in a way as not to disturb the purpose of the place.`}
            </>,
        }, {
            name: "Nobody's Faro de Luz Respite",
            desc: "",
        }, {
            name: "Pond of Remembrance",
            desc: <>
                {`A large, circular pond with an elemetal base that traces the edge of the room, only leaving enough space for a line of especially rich earth and yet dead wooden branches, tracing both sides of the pond.
Most of the remaining floor area is covered with a thick carpet or moss. The entire area was not yet covered by a roof, so the sun and the moon can still be observed freely at any cloudless part of the day. The room has 3 layers.
Top one, where quartz pedestal is located, connected to the lower area with a gentle steps, fully overgrown with moss.
On the sides, waterfall is disconnecting the top pool from the rest of the pond.
Middle area is connected to the lower one with steps on both sides and a gentle slope on the middle. It has most of the patches of dirt, inside of which nothing but weeds grow yet.
Middle pond is connected to the lower one with a series of gentle waterfalls, that are along upper waterfalls the reason why the sound of the water is all-present.
Lower area is least interesting and there seems to be no obvious way how you would get to it (yet) without getting yourself wet by crossing 2 m wide and at the deepest part 1,5 m deep metal pool with rough but safe bottom texture.
Not only the roof, doors are also not installed yet, even stranger, instead of sturdy structure, it seems that dead wood is being planted here the thickest on both sides without yet obvious function it could serve. (Also, pearls have finished soaking in the Healing Potions, just saying to track progression of different parts of a project.) Pool area is through the day already freely accessible for those who would not damage overall "work in progress" and in limited numbers as some structures are not yet sturdy enough to support more than a few people at the time. (you can take a dip or swim) Water is already drinkable, no special properties, but it replenishes itself from elemetal, metal from elemental plane of water, so you will hardly find more waterly water. Water surface is already self-regulating and has limited self-cleaning property. No temperature regulation yet, it is just a metal, magical-ish pool. 
On in last month or so, finishing touches were made on Emily's House of Culture, that is (for Remember Me) the side building to Pond of Remembrance or Nobody's Faro de Luz Rest it is working on. If you enter from the side facing the west (on the city map), trough a wide main entrance, you enter a wide hallway full of paintings and sculptures of the patrons, many of them not yet dedicated to Emily, even if some are, given that Remember Me is preoccupied with working on the heart of the building at the moment. You can go down to the basement level where you can leave your stuff at dedicated and manned wardrobe or buy snacks and refreshments at for this purpose 2 dedicated stores. Once you return, you can use one of 3 lower entrances leading into the enormous main hall and take one of many dedicated seats or go to the stage, mostly covered by the curtain. Exploring the stage, you notice it is quite big, but among curtains and sets you can go into more crammed backstage, where many useful tools for any occasion can be found. Continue forward left or right trough sound-isolated doors and you will come into the dinning hall of one of 2 dormatories, one of those of more orderly nature and one of those with more chaotic tendencies. Each resident can choose where to live (or if causing troubles will be placed into another dormitory before removal) so residents are least likely to step on each other's nerves given their lifestyle. Each dormitory has their kitchen and main Slime Closets are meant for both patrons and visitors of the House of Culture. Stairs around here lead down, where extensive storage can be found. Dormitories have mostly doubled storage spaces due to their divergent tastes, but they do share storage space for some of the more dedicated equipment as they are in charge of maintaining house as a whole. Going back, if we go past SCs, we can go on the last part of lower level we haven't visited yet. 
Here dedicated equipment for the house is stored, sets, props, instruments, everything that might be needed on the stage if need presents itself. Here are also guest rooms, front security that guards the equipment as well as waiting room for performers, where they can take a break, wait for their time, apply makeup or dress themselves in large dedicated theater wardrobe. If we use the same stairs we go up to the 1. floor, where there are common balcony seats as well as some dedicated ones for guests that might require more personal space, as well as another gallery, this one with handpicked selection of art. If the lower one presented work of patrons in general, this one is more curated one. Where the entrance would be on the lower floor, here a giant glass panel is located, making letting guests have a clear view on the coming and going visitors as well as outer wall of the city. Back to the dormitories, we pass manager's office for each dorm-wing and find where most of the patrons rest. There are individual rooms as well as more crammed common ones. There is also the door from each side that leads directly into Nobody's Respite, but it is closed until area around the shrine is more secure. If we go to the highest floor we can find small general storage, as well as many SCs and a place where patrons can bath or clean their tools. Close to here is another gallery, where unfinished-finished works can be presented (or temporary stored), but also where we can access 6 crafting departments, each filled with dedicated tools for creation of works of art. The hope of Remember Me was, that due to high-lvl of production, artists from across the island will come here to perform, work, socialize and share thus their knowledge with less proficient patrons of the shelter, so transfer of know-how can take place. There is also relatively small and more isolated library, segmented into 2 main sections, where knowledge can be stored and and accessed if need be.
Progress on the Nobody's Respite after last mission slowed down quite considerably as Remember Me is still troubled by the results of its last mission. Also, its new and expanding responsibilities as a still developing dormitory supervisor as well as main theater sponsor, training new generation of artists of all sorts as well as general job search and inspections took a lot more time than intended. Still, progress is noticeable. Pond is mostly installed and is now engraved with barely visible but delicate shapes that somewhat resemble druidic language, but shaped into pictures and stories. Most of it thou is covered by seemingly forever regenerating mud that covers most of the pool's bottom, giving it more of a feel of a pond. Some smaller species of fish, insects, snakes, lizards, spiders, amphibians and water plants can sometimes be spotted around the pond, swimming, hiding in mud, moss, rocks placed in the shapes of pathways or plants's branches, giving the room alive feeling. Even more, plants all around the place have grow in miraculous time and indeed give a feeling that this place is somehow alive ... and aware. Plants at the door will sometime block or open the path, seemingly at random, needing a druid to correct them. Central area can now be accessed by a thick bridge and railings made out of living plants ... but sometimes too living and wild as they might decide to open under the guest and let them fall into water. Many more branches form a thick arch all around the pool, continuing upwards to form a terrace and many handy stairs, but again, at any time they might decide to simply stop providing support, so the area is still closed for residents of dormitory, even as it is now connected to it by 2 gates where terraces are. Previous patches of dirt have grown into many individual plants, intertwined into pillars, growing into each other and starting to take the shape of the living canopy, even if the roof is still fully opened to the sky.
Area in general is starting to take shape, lower part dedicated to visitors that simply want some water or prayer, terraces for socializing, medium part for healing, even if everything is still limited due to ongoing development and in general "wild" nature of this place. That said, probably most mysterious is highest and now enclosed part of the pond, divided from the rest of the place by the thick layer of wooden living plants, overgrown by a carpet of sweet alyssum, inner space only accessible trough a curtain of softer, green flowery ones on the top of flowery stairs (that can at druid's command turn into a ramp). There, a quartz platform as well as side-stairs into the pond can be found, but ... it feels empty. As if something is still missing. Something important. Place is still growing, details still need to be polished and something is still being worked on, but for now, the pond is fully operational
Remember Me finishes statue of Emily. She is very detailed, down to the pore, it is clear a lot of work was put into it. She is dressed in druidic clothes Remember Me is from time to time seen wearing, but more properly made. Her arms are from cold metal and brass metal , outstretched down as if channeling something, while she is squatting with one leg lower, destabilizing the whole structure. It is clear it is meant to be placed on some kind of a pedestal, so its leg could hang down from it. The most curious part of the structure are her blind eyes, made out of white pearls, soaked with healing magic."`}
            </>
        }, {
            name: "Emily's House of Culture",
            desc: "",
        }, {
            name: "Emily's Druid Clothes",
            desc: "Remember Me was at special ocasions seen wearing them, especially as its body became more elf-shaped. They were a hand-made replica of the original and to Remember Me represented maybe not the most beautiful, but the most pure clothing one could wear.",
        }, {
            name: "Sweet Alyssum (sladki grobelnik)",
            desc: "Emily's favourite flower due to its relaxing smell. Remember Me couldn't smell it, but it could turn into an animal that could smell it. It always had both insence and seeds (it could grow with Druidcraft into flowers and back into seeds) on itself. At the end of Remember Me's life it was also a flower that grows all over sacret enclosure of Pond of Rememberance.",
        }, {
            name: "Prayer Book of Emily",
            desc: "Book that had a full story of Emily written inside of it along with many notes with Remember Me's personal thoughts as well as prayers in later chapters. Book was not so long before Remember Me's life ended donated to the portal ship to ensure its safe travels (and help spread the word of Emily into other planes and places).",
        }],
        backstory: <>
            {`Emily Nightsong se je rodila v vilinski klan varuhov gozda z izredno močnim poudarkom na pripadnosti in sposobnosti. In dosežek ter posebnost klana, na katero je klan daje prav posebno pozornost, saj ga loči od vseh ostalih klanov in ki naj bi ga vsak član klana dosegel za iniciacijo v odraslost ... izdelava Feygolema.`}<br />
            {`Žal je bila Emily slepa in brez talenta za veščine v katerih se je klan specializiral, izpostavljena tako preziru kot omalovaževanju.`}<br />
            {`Po mnogih letih prizadevanj in zaničevanja še vedno ni obupala nad svojim poslanstvom, prispevati klanu, dokazati svoje mesto v njem.`}<br />
            {`V obupu se je odpravila v svet ter se obrnila k drugačnim tehnikam, izdelava golemov, avtomatonov, okultizem, karkoli bi jo lahko približalo cilju, izdelati Feygolema.`}<br />
            {`Dokler ji končno ni uspelo. Skorajda. Zbrala je vse svoje znanje najrazličnejših šol izdelave življenja in izdelala nekaj, kar je vsebovalo prvine vseh. In delovalo. Je. Skorajda. Gibalo se je, govorilo je, poslušalo je, obnašalo se je natanko tako kot bi pričakoval od živega bitja. Edina težava ... bilo je mrtvo. Še več, Emily je kot posledica ubadanja z drugačnimi tehnikami začel pojenjati še preostanek magije katero je imela do tedaj.`}<br />
            {`Obupana je storila poslednjo reč katera ji je v njenih mislih še preostala. Če ne more ustvariti življenje, ga morda lahko vsaj prenese. Namesto iz vse bolj pešajočega občutka za naravo okoli sebe, je segla v naravo v sebi, jo zajela in začela prelivati v lupino bitja poleg sebe. In delovalo je. Kakor je prelivala svoje življenje in kakor so roke postajale vse težje ter misli bolj utrudljive, je znotraj teme vsakdana nekaj začutila. Nekaj prisotnega. Nekaj živega.`}<br />
            {`Uspela je! Končno se je dokazala. Končno je zaslužila mesto v klanu. Samo še malo. Samo še malenkost in uspelo ji bo. Ni se več mogla spomniti kaj ji bo uspelo, vendar uspelo bo. Njene poslovilne besede novonastalemu bitju so bile "Remember me, Emily."`}<br />
            {`S temi besedami je umrla.`}<br />
            {`Vendar ravnokar stvarjeno bitje ni razumelo poslednje volje svojega stvaritelja. Če kaj je bilo zelo zmedeno. Vanj so bili skupaj z življenjem preliti njeni spomini, vendar bili so brez zanj relevantnega pomena. Prazni. In nato njene besede. "Remember me, Emily". Remember? Me? Emily? Emily je oseba v njegovih spominih. Torej kdo je ono? Če ni Emily in če je govorilo njemu, mora biti Remember Me. Hkrati so poslednje besede delovale kot navodilo. Remember me. Vendar bitje se je Emily že spominjalo. Kako bi jo lahko pozabilo? Vendar Emily je želela biti opažena. Morda je bil to resnični pomen njenih besed? Ne ono, pač pa ves svet naj bi se spomnil njenega obstoja ter prizadevanj?`}<br />
            {`To je postalo novo poslanstvo novega bitja. Ponesti spomin o Emily v svet. Nekega dne se bodo vsi spominjali Emily. Emily Nightsong. Vilinke, ki je navkljub vsemu naposled naredila lastnega Feygolema.`}
        </>
    }, {
        name: "Minamoto",
        class: [{
            title: "",
            lvl: 0
        }],
        background: "",
        desc: <>{``}</>
    }]

    return { chars };
}