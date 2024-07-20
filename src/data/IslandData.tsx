import cityFaro from "../assets/maps/Grb_Faro_de_Luz.svg"
import cityRosa from "../assets/maps/Grb_Rosa_Riendo.svg"
import { POI } from "../types"

export default function IslandData() {

    const pointsOfInterestArr: POI[] = [{
        x: 67,
        y: 61,
        content: {
            name: "Rosa Riendo",
            type: "shield",
            img: cityRosa,
            alt: "Rosa Riendo",
            desc: <>{``}</>,
        }
    }, {
        x: 32,
        y: 71,
        content: {
            name: "Faro de Luz",
            type: "shield",
            img: cityFaro,
            alt: "Faro de Luz",
            desc: <>{``}</>,
        }
    }, {
        x: 63,
        y: 28,
        content: {
            name: "Tempel",
            type: "poi",
            alt: "tempel",
            desc: <>{``}</>,
        }
    }]

    return { pointsOfInterestArr }
}