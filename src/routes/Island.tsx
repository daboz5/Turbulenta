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

    const [openPoi, setOpenPoi] = useState<{ cont: POICont, open: boolean } | null>(null);

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

    const createPOI = (content: POICont) => {
        if (content.type === "shield") {
            return (
                <img
                    className="islandMapPOIShield flexCen"
                    src={content.img}
                    alt={content.alt}
                />
            )
        } else if (content.type === "poi") {
            return (
                <span className="islandMapPOIDot flexCen">
                    X
                </span>
            )
        }
    }

    const openPOI = (poi: POICont, state: boolean) => {
        const poiDesc = document.getElementById("poiDescBox");
        if (poiDesc) {
            if (state) {
                setOpenPoi({ cont: poi, open: true });
                poiDesc.style.opacity = "1";
                poiDesc.style.pointerEvents = "all";
            } else {
                setOpenPoi({ cont: poi, open: false });
                poiDesc.style.opacity = "0";
                poiDesc.style.pointerEvents = "none";
            }
        }
    }

    return (<>
        <span
            id="island"
            className="flexCol flexCen">

            <span
                id="islandModeBox"
                className="flexCol flexCen">
                <span id="islandMode">
                    <button
                        style={mapState === "list" ?
                            {
                                boxShadow: "inset 0 0 10px 3px rgb(109, 44, 0)",
                                backgroundColor: "rgb(255, 139, 62)"
                            } : {}
                        }
                        onClick={() => mapState === "list" ? {} : setMapState("list")}>
                        Locations
                    </button>
                    <button
                        style={mapState === "map" ?
                            {
                                boxShadow: "inset 0 0 10px 3px rgb(109, 44, 0)",
                                backgroundColor: "rgb(255, 139, 62)"
                            } : {}
                        }
                        onClick={() => mapState === "map" ? {} : setMapState("map")}>
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
                                        style={
                                            {
                                                backgroundColor: (openPoi?.cont.name === poi.content.name && openPoi.open) ?
                                                    "rgb(255, 139, 62)" :
                                                    "rgb(255, 158, 94)"
                                            }
                                        }
                                        key={`listPOI${poi.x}-${poi.y}`}>
                                        {poi.content.name}
                                    </button>
                                })}
                        </span>
                    </span>}

                {mapState === "map" &&
                    <span id="islandMapBox" className="flexCen">
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
                                    const poiStyle = (
                                        pageWidth < 1024 ||
                                        pageWidth > 700) ?
                                        mediumScreen :
                                        smallScreen
                                    return (
                                        <span
                                            className="poi flexCen"
                                            style={poiStyle}
                                            onClick={() => openPOI(poi.content, true)}
                                            key={`poi${inx}`}>
                                            {createPOI(poi.content)}
                                        </span>
                                    )
                                })}
                        </span>}
                    </span>}
            </span>

            <div id="poiDescBox" className="flexCol">
                {openPoi && <>
                    <span id="poiDesc" className="flex">
                        <hr />
                        <h4>{openPoi.cont.name}</h4>
                        <hr />
                    </span>
                    {openPoi.cont.desc && <div>{openPoi.cont.desc}</div>}
                    {openPoi.cont.img && <img src={openPoi.cont.img} alt={openPoi.cont.alt} />}
                    {openPoi.cont.link &&
                        <Link to={openPoi.cont.link}>
                            More info
                        </Link>}
                    <button onClick={() => openPOI(openPoi.cont, false)}>
                        Close
                    </button>
                </>
                }
            </div>

        </span>
    </>)
}