import mapTurbulenta from "../assets/maps/Turbulenta_Empty.svg"
import IslandData from "../data/IslandData"
import useDragonStore from "../useDragonStore";
import "./Island.css"

export default function Island() {

    const { pointsOfInterestArr } = IslandData();
    const { pageWidth } = useDragonStore();

    const createPOI = (content: {
        name: string,
        type: "poi" | "shield",
        img?: string,
        alt: string
    }) => {
        if (content.type === "shield") {
            return (
                <img
                    className="islandMapPOIShield"
                    src={content.img}
                    alt={content.alt}
                />
            )
        } else if (content.type === "poi") {
            return (
                <span className="islandMapPOIDot">
                    X
                </span>
            )
        }
    }

    const createGrid = () => {
        return (
            <span id="islandMapGrid">
                {pointsOfInterestArr.map(
                    (poi, inx) => {

                        const smallScreen = {
                            gridRow: `${poi.y - 4} / ${poi.y + 4}`,
                            gridColumn: `${poi.x - 9} / ${poi.x + 9}`
                        };
                        const mediumScreen = {
                            gridRow: `${poi.y - 3} / ${poi.y + 3}`,
                            gridColumn: `${poi.x - 5} / ${poi.x + 5}`
                        };
                        const wideScreen = {
                            gridRow: `${poi.y - 2} / ${poi.y + 2}`,
                            gridColumn: `${poi.x - 3} / ${poi.x + 3}`
                        };

                        return (
                            <span
                                className="poi"
                                style={
                                    pageWidth > 1000 ?
                                        wideScreen : pageWidth > 700 ?
                                            mediumScreen : smallScreen
                                }
                                key={`poi${inx}`}>
                                {createPOI(poi.content)}
                            </span>
                        )
                    })}
            </span>
        )
    }

    return (<>
        <div id="islandMapBox">
            <img id="islandMap" src={mapTurbulenta} alt="Island Map" />
            {createGrid()}
        </div>
    </>)
}