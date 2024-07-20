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

    const chars: Char[] = [
        {
            name: "Remember Me",
            class: [{
                title: "Druid",
                lvl: 5
            }, {
                title: "Bard",
                lvl: 2
            }],
            background: "Acolyte",
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
                name: "Emily",
                token: "",
                desc: <>
                    {``}
                </>
            }],
            possessions: [{
                name: "Governor's Foot",
                desc: "Magic artefact that makes wearer immune to being frightened and a remain of the mad governor from Season 1. It is still located among Remember Me's crumbled remains and dirt in the sacret enclosure of Pond of Remembrance, possibly making the living artefact immune to being frightened.",
            }, {
                name: "Nobody's Rosa Riendo Respite",
                desc: "Rosa Riendo branch of Nobody's Respite, where the operation started and its main office. Remember Me created it as a way to honor Emily and to attract people who would listen to its stories about Emily, but operation expanded into full blown social service, providing beds, food, healing, (mouth cleaning), therapy, basic education and later even job search or even employment in both cultural and manual field.",
            }, {
                name: "Nobody's Faro de Luz Respite",
                desc: "",
            }, {
                name: "Pond of Remembrance",
                desc: "",
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
        },
    ]

    return { chars };
}