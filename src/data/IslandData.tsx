import cityFaro from "../assets/maps/Grb_Faro_de_Luz.svg"
import cityRosa from "../assets/maps/Grb_Rosa_Riendo.svg"

export default function IslandData() {

    type POI = {
        x: number;
        y: number;
        content: {
            name: string,
            type: "poi" | "shield",
            img?: string,
            alt: string
        };
    }[]

    const pointsOfInterestArr: POI = [{
        x: 68,
        y: 61,
        content: {
            name: "Rosa Riendo",
            type: "shield",
            img: cityRosa,
            alt: "Rosa Riendo",
        }
    }, {
        x: 33,
        y: 71,
        content: {
            name: "Faro de Luz",
            type: "shield",
            img: cityFaro,
            alt: "Faro de Luz",
        }
    }, {
        x: 63,
        y: 28,
        content: {
            name: "Tempel",
            type: "poi",
            alt: "tempel",
        }
    }]

    return { pointsOfInterestArr }
}