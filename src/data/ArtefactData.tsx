import { Artefacts } from "../types"
import imgS1A1 from "../assets/artefacts/RingOfSafetyDistance.png"
import imgS1A2 from "../assets/artefacts/RoyalRoseLongbow.png"
import imgS1A3 from "../assets/artefacts/VinegraspShield.png"
import imgS1A4 from "../assets/artefacts/RapidsGlaive.png"
import imgS1A5 from "../assets/artefacts/ConchShellOfTheMaokah.png"
import imgS1A6 from "../assets/artefacts/Bailar.png"
import imgS1A7 from "../assets/artefacts/EchoBracelet.png"
import imgS1A8 from "../assets/artefacts/LightningStone.png"
import imgS1A9 from "../assets/artefacts/HelmOfShidin.png"
import imgS1A10 from "../assets/artefacts/RodOfKadram.png"
import imgS2A1 from "../assets/artefacts/TormentDagger.png"
import imgS2A2 from "../assets/artefacts/Hugfish.png"
import imgS2A3 from "../assets/artefacts/DreadlordsCleaver.png"
import imgS2A4 from "../assets/artefacts/VeilOfMidnight.png"
import imgS2A5 from "../assets/artefacts/DemodandTriangleOfAncestralMemory.png"
import imgS2A6 from "../assets/artefacts/CrystalOfBedlam.png"
import imgS2A7 from "../assets/artefacts/ShieldOfSlaad.png"
import imgS2A8 from "../assets/artefacts/ClokworkCrossbow.png"

export default function ArtefactData() {

    const artefacts: Artefacts[] = [
        {
            title: "Season 1",
            artefacts: [
                {
                    id: "S1A1",
                    name: "Ring of Safety Distance",
                    story: "Retrieved by a party of heroes during the beginning stages of colonisation of Turbulenta.",
                    shortDesc: "A golden and electruma band with an inlaid arcane pearl imbued by ambient magic.",
                    src: imgS1A1
                },
                {
                    id: "S1A2",
                    name: "Royal Rose Longbow",
                    story: "Retrieved from a shipwreck after the colonisers first arrived on the island.",
                    shortDesc: "An oak and bronze longbow, finely crafted by the court smiths of the Kingdom of the Iron Rose.",
                    src: imgS1A2
                },
                {
                    id: "S1A3",
                    name: "Vinegrasp Shield",
                    story: "Retrieved by a party of heroes during their foray into the jungle and the ruined temples of the spirits.",
                    shortDesc: "A shield of tightly woven vines, the green,living leaves contained in the middle by the sturdy and unyielding wood on the outside. The bottom is carved and shaped into the face of an owl.",
                    src: imgS1A3
                },
                {
                    id: "S1A4",
                    name: "Rapids Glaive",
                    story: "Retrieved by a party of heroes during the beginning stages of colonisation of Turbulenta.",
                    shortDesc: "A long glaive with a cruelly serrated bonewood blade. The shaft is woven over with living vines and has wave-like carvings.",
                    src: imgS1A4
                },
                {
                    id: "S1A5",
                    name: "Conch Shell of the Maok'ah",
                    story: "Given to the heroes by the native tribe of the Maok'ha after they did them a great service.",
                    shortDesc: "A beautifully conch with a pearlascent streaks on the inside. While in the water it gives off a soft shimmering light.",
                    src: imgS1A5
                },
                {
                    id: "S1A6",
                    name: "Bailar",
                    story: "Retrieved from a secret underground library of a ruined tower. The blade was protected by the dead bodies of fallen traitors to the kingdom.",
                    shortDesc: "An ancient and beauitiful shortsword with an engraved hilt and blade. While it dances it is accompanied by flashes of lightning.",
                    src: imgS1A6
                },
                {
                    id: "S1A7",
                    name: "Echo Bracelet",
                    story: "Retrieved by a party of heroes during the ending stages of colonisation of Turbulenta.",
                    shortDesc: "An elaborate bracelet with a central gem, surrounded by petals of worked brass. Clearly of elven make.",
                    src: imgS1A7
                },
                {
                    id: "S1A8",
                    name: "Lightning Stone",
                    story: "Retrieved by a party of heroes during the ending stages of colonisation of Turbulenta.",
                    shortDesc: "A small dull grey pebble, streakod through with silvery blue streaks.",
                    src: imgS1A8
                },
                {
                    id: "S1A9",
                    name: "Helm of Shidin",
                    story: "Crafted with the combined might of heroes and natives before they were to face the dragon gods.",
                    shortDesc: "An elaborate helm, a masterwork of many smiths. Resembling the spiked dragon skulls it shines under stormy skies.",
                    src: imgS1A9
                },
                {
                    id: "S1A10",
                    name: "Rod of Kadram",
                    story: "Crafted with the combined might of heroes and natives before they were to face the dragon gods.",
                    shortDesc: "A sturdy rod engraved with lines of a magic nexus and a head of imbued arcane crystal.",
                    src: imgS1A10
                }
            ]
        }, {
            title: "Season 2",
            artefacts: [
                {
                    id: "S2A1",
                    name: "Torment Dagger",
                    story: "",
                    shortDesc: "",
                    src: imgS2A1
                },
                {
                    id: "S2A2",
                    name: "Hugfish",
                    story: "",
                    shortDesc: "",
                    src: imgS2A2
                },
                {
                    id: "S2A3",
                    name: "Dreadlord's Cleaver",
                    story: "",
                    shortDesc: "",
                    src: imgS2A3
                },
                {
                    id: "S2A4",
                    name: "Veil of Midnight",
                    story: "",
                    shortDesc: "",
                    src: imgS2A4
                },
                {
                    id: "S2A5",
                    name: "Demodand Triangle of Ancestral Memory",
                    story: "",
                    shortDesc: "",
                    src: imgS2A5
                },
                {
                    id: "S2A6",
                    name: "Crystal of Bedlam",
                    story: "",
                    shortDesc: "",
                    src: imgS2A6
                },
                {
                    id: "S2A7",
                    name: "Shield of Slaad",
                    story: "",
                    shortDesc: "",
                    src: imgS2A7
                },
                {
                    id: "S2A8",
                    name: "Clockwork Crossbow",
                    story: "",
                    shortDesc: "",
                    src: imgS2A8
                },
            ]
        }];

    return { artefacts }
}