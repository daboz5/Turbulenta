import { useState } from "react";
import bannerImg from "../assets/kat.png";

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

import "./Artefacts.css"

export default function Artefacts() {

    type Artefacts = {
        title: string;
        artefacts: {
            id: string;
            src: string;
        }[];
    }[];

    const seasonsArr = [
        {
            title: "Season 1",
            artefacts: [
                { id: "S1A1", src: imgS1A1 },
                { id: "S1A2", src: imgS1A2 },
                { id: "S1A3", src: imgS1A3 },
                { id: "S1A4", src: imgS1A4 },
                { id: "S1A5", src: imgS1A5 },
                { id: "S1A6", src: imgS1A6 },
                { id: "S1A7", src: imgS1A7 },
                { id: "S1A8", src: imgS1A8 },
                { id: "S1A9", src: imgS1A9 },
                { id: "S1A10", src: imgS1A10 }
            ]
        }, {
            title: "Season 2",
            artefacts: [
                { id: "S2A1", src: imgS2A1 },
                { id: "S2A2", src: imgS2A2 },
                { id: "S2A3", src: imgS2A3 },
                { id: "S2A4", src: imgS2A4 },
                { id: "S2A5", src: imgS2A5 },
                { id: "S2A6", src: imgS2A6 },
                { id: "S2A7", src: imgS2A7 },
                { id: "S2A8", src: imgS2A8 },
            ]
        }];

    const [pic, setPic] = useState({ sIndex: -1, picId: "" });

    const openPic = (sIndex: number, picId: string) => {
        const picBoxEl = document.getElementById("popupExitScreen");
        const picEl = document.getElementById("popArt" + picId);
        if (picBoxEl && picEl) {
            picBoxEl.style.display = "flex";
            picEl.style.display = "block";
        }
        setPic({
            sIndex: sIndex,
            picId: picId
        });
    }

    const closePic = (target: EventTarget, artId?: string) => {
        if (target instanceof Element) {
            if (target.id === "popupExitScreen" || target.id === "popupPreviewExitBtn") {
                const picBoxEl = document.getElementById("popupExitScreen");
                const picEl = document.getElementById("popArt" + pic.picId);
                if (picBoxEl && picEl) {
                    picBoxEl.style.display = "none";
                    picEl.style.display = "none";
                    setPic({ sIndex: -1, picId: "" });
                }
            } else if (target.className === "popArtScrollPrev" && artId) {
                const picEl = document.getElementById("popArt" + pic.picId);
                if (picEl && artId !== pic.picId) {
                    picEl.style.display = "none";
                }
            }
        }
    }

    const createArtefactGrids = (arr: Artefacts) => {
        return arr.map((season, sIndex) => {
            return (
                <span key={`${season.title}Artefacts`}>
                    <h2>{season.title}</h2>
                    <span className="artBox">
                        {season.artefacts.map((artefact) => {
                            return (
                                <button
                                    id={`art${artefact.id}`}
                                    className="art"
                                    onClick={() => openPic(sIndex, artefact.id)}
                                    key={`art${artefact.id}`}>
                                    <img id={`image${artefact.id}`} src={artefact.src} alt="Artefact" />
                                </button>
                            )
                        })}
                    </span>
                </span>
            )
        })
    }

    const enlargedPics = () => {
        return (
            <span id="popupExitScreen" onClick={(e) => closePic(e.target)}>
                <span id="popupPreviewScreen">
                    {seasonsArr.map((season) => {
                        return season.artefacts.map((artefact) => {
                            return (
                                <img
                                    id={`popArt${artefact.id}`}
                                    className="popArt"
                                    src={artefact.src}
                                    alt="Full Artefact Image"
                                    key={`art${artefact.id}`} />
                            )
                        })
                    })
                    }
                    <span id="popArtScrollBox">
                        <span id="popArtScroll">
                            {pic.sIndex >= 0 &&
                                seasonsArr[pic.sIndex].artefacts.map(
                                    (art) => {
                                        return <img
                                            className="popArtScrollPrev"
                                            src={art.src}
                                            onClick={(e) => {
                                                closePic(e.target, art.id);
                                                openPic(pic.sIndex, art.id);
                                            }}
                                            key={`popArtScroll${art.id}`} />
                                    })}
                        </span>
                        <button
                            id="popArtScrollLeft"
                            className="popArtScrollBtn">
                            ➧
                        </button>
                        <button
                            id="popArtScrollRigth"
                            className="popArtScrollBtn">
                            ➧
                        </button>
                    </span>
                    <button id="popupPreviewExitBtn">X</button>
                </span>
            </span>
        )
    }

    return (
        <>

            <span className='bannerBox'>
                <h1>Artefacts</h1>
                <p className='bannerText'>Items in the Hall of Artifacts.</p>
                <img className='bannerImg' src={bannerImg} alt="Banner Image" />
            </span>

            {createArtefactGrids(seasonsArr)}

            {enlargedPics()}

        </>
    )
}