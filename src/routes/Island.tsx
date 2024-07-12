import { useState } from "react";
import { Link } from "react-router-dom";
import { POI, POICont } from "../types";
import mapTurbulenta from "../assets/maps/Turbulenta_Empty.svg"
import IslandData from "../data/IslandData"
import useDragonStore from "../useDragonStore";
import "./Island.css"

export default function Island() {

    const { pointsOfInterestArr } = IslandData();
    const { pageWidth, mapState, setMapState } = useDragonStore();

    const [openPoi, setOpenPoi] = useState<POICont>({
        name: "",
        type: "poi",
        img: "",
        alt: "poi",
        desc: <>{``}</>,
    });

    const sortPoi = (poiArr: POI[]) => {
        const sorted = poiArr.sort((a, b) => {
            const upperA = a.content.name.toLocaleUpperCase();
            const upperB = b.content.name.toLocaleUpperCase();
            if (upperA < upperB) {
                return -1;
            }
            if (upperA > upperB) {
                return 1;
            }
            return 0
        });
        return sorted
    }

    const switchMapState = (state: "list" | "map") => {
        if (state !== mapState) {
            setMapState(state);
        }
    }

    const createPOI = (content: POICont) => {
        if (content.type === "shield") {
            return (
                <img
                    className="islandMapPOIShield flex flexCen"
                    src={content.img}
                    alt={content.alt}
                />
            )
        } else if (content.type === "poi") {
            return (
                <span className="islandMapPOIDot flex flexCen">
                    X
                </span>
            )
        }
    }

    const openPOI = (poi: POICont, state: boolean) => {
        const poiDesc = document.getElementById("poiDescBox");
        if (poiDesc) {
            if (state) {
                setOpenPoi(poi);
                poiDesc.style.opacity = "1";
                poiDesc.style.pointerEvents = "all";
            } else {
                poiDesc.style.opacity = "0";
                poiDesc.style.pointerEvents = "none";
            }
        }
    }

    return (<>
        <span className="flexCol flexCen">

            <span id="islandModeBox">
                <button
                    style={mapState === "list" ?
                        {
                            boxShadow: "inset 0 0 10px 3px rgb(109, 44, 0)",
                            backgroundColor: "rgb(255, 139, 62)"
                        } : {}
                    }
                    onClick={() => switchMapState("list")}>
                    Locations
                </button>
                <button
                    style={mapState === "map" ?
                        {
                            boxShadow: "inset 0 0 10px 3px rgb(109, 44, 0)",
                            backgroundColor: "rgb(255, 139, 62)"
                        } : {}
                    }
                    onClick={() => switchMapState("map")}>
                    Island Map

                </button>
            </span>

            {mapState === "list" &&
                <span
                    id="islandLocationsBox"
                    className="flexCol flexCen">
                    <span className="flexCol">
                        {sortPoi(pointsOfInterestArr).map(
                            (poi) => {
                                return <button
                                    onClick={() => openPOI(poi.content, true)}
                                    key={`listPOI${poi.x}-${poi.y}`}>
                                    {poi.content.name}
                                </button>
                            })}
                    </span>
                </span>}

            {mapState === "map" && <span id="islandMapBox">
                <img id="islandMap" src={mapTurbulenta} alt="Island Map" />
                {<span id="islandMapGrid">
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
                                    className="poi flex flexCen"
                                    style={
                                        pageWidth > 1000 ?
                                            wideScreen : pageWidth > 700 ?
                                                mediumScreen : smallScreen
                                    }
                                    onClick={() => openPOI(poi.content, true)}
                                    key={`poi${inx}`}>
                                    {createPOI(poi.content)}
                                </span>
                            )
                        })}
                </span>}
            </span>}

            <span className="screen flexCol flexCen">
                <div id="poiDescBox" className="flexCol">
                    <h4>{openPoi.name}</h4>
                    <hr />
                    {openPoi.desc && <div id="poiDesc">{openPoi.desc}</div>}
                    {openPoi.img && <img src={openPoi.img} alt={openPoi.alt} />}
                    {openPoi.link &&
                        <Link to={openPoi.link}>
                            More info
                        </Link>}
                    <button onClick={() => openPOI(openPoi, false)}>
                        Close
                    </button>
                </div>
            </span>

        </span>
    </>)
}