import "./Island.css"
import mapTurbulenta from "../assets/maps/Turbulenta_Empty.svg"

export default function Island() {

    const pointsOfInterestArr = [{
        x: 24,
        y: 69,
        content: "Faro de Luz"
    },
    {
        x: 58,
        y: 58,
        content: "Rosa Riendo"
    }]

    const createrPOI = () => {
        return (
            pointsOfInterestArr.map(
                (poi, inx) => {
                    return (
                        <span
                            className="poi"
                            style={{
                                top: `${poi.y}%`,
                                left: `${poi.x}%`
                            }}
                            key={`poi${inx}`}>
                            {poi.content}
                        </span>
                    )
                })
        )
    }

    return (<>
        <div id="islandMapBox">
            <img id="islandMap" src={mapTurbulenta} alt="Island Map" />
            {createrPOI()}
        </div>
    </>)
}