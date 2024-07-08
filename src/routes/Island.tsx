import { useState } from "react";
import { Link } from "react-router-dom";
import { POICont } from "../types";
import mapTurbulenta from "../assets/maps/Turbulenta_Empty.svg"
import IslandData from "../data/IslandData"
import useDragonStore from "../useDragonStore";
import "./Island.css"

export default function Island() {

    const { pointsOfInterestArr } = IslandData();
    const { pageWidth } = useDragonStore();

    const emptyPoi: POICont = {
        name: "Empty",
        type: "poi",
        img: "",
        alt: "poi",
        desc: <>{``}</>,
    }

    const [openPoi, setOpenPoi] = useState<POICont>(emptyPoi);

    const createPOI = (content: POICont) => {
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

    const openPOI = (poi: POICont) => {
        const poiDesc = document.getElementById("poiDescBox");
        if (poiDesc) {
            if (openPoi.name !== poi.name) {
                setOpenPoi(poi);
                poiDesc.style.opacity = "1";
                poiDesc.style.pointerEvents = "all";
            } else {
                setOpenPoi(emptyPoi);
                poiDesc.style.opacity = "0";
                poiDesc.style.pointerEvents = "none";
            }
        }
    }

    return (<>
        <div id="islandMapBox">

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
                                className="poi"
                                style={
                                    pageWidth > 1000 ?
                                        wideScreen : pageWidth > 700 ?
                                            mediumScreen : smallScreen
                                }
                                onClick={() => openPOI(poi.content)}
                                key={`poi${inx}`}>
                                {createPOI(poi.content)}
                            </span>
                        )
                    })}
            </span>}

            <span className="screen flexCol flexCenter">
                <div id="poiDescBox" className="flexCol">
                    <h4>{openPoi.name}</h4>
                    <hr />
                    <div id="poiDesc">{openPoi.desc}</div>
                    {openPoi.link &&
                        <Link to={openPoi.link}>
                            More info
                        </Link>}
                    <button onClick={() => openPOI(openPoi)}>
                        Close
                    </button>
                </div>
            </span>

        </div>
    </>)
}