export default function IslandData() {

    type POI = {
        x: number;
        y: number;
        content: JSX.Element;
    }[]

    const pointsOfInterestArr: POI = [{
        x: 33,
        y: 72,
        content: <>Faro de Luz</>
    },
    {
        x: 69,
        y: 61,
        content: <>Rosa Riendo</>
    }]

    return { pointsOfInterestArr }
}