import { useState } from "react";
import type { Artefact, Artefacts } from "../types";
import ArtefactData from "../data/ArtefactData";
import infoBtn from "../assets/icons/info-large-svgrepo-com.svg"
import "./Artefacts.css"

export default function Artefacts() {

    const { artefacts } = ArtefactData();

    const [pic, setPic] = useState<Artefact | null>(null);
    const [group, setGroup] = useState<Artefact[] | null>(null);

    const openPic = (art: Artefact, artGroup: Artefact[]) => {
        const picBoxEl = document.getElementById("popArtExitScreen");
        if (picBoxEl) {
            picBoxEl.style.opacity = "1";
            picBoxEl.style.pointerEvents = "all";
            setPic(art);
            setGroup(artGroup);
        }
    }

    const closePic = (target: EventTarget) => {
        if (target instanceof Element) {
            if (target.id === "popArtExitScreen" || target.id === "popArtExitBtn") {
                const picBoxEl = document.getElementById("popArtExitScreen");
                if (picBoxEl) {
                    picBoxEl.style.opacity = "0";
                    picBoxEl.style.pointerEvents = "none";
                    switchInfoBox(false);
                }
            }
        }
    }

    const switchInfoBox = (open: boolean) => {
        const container = document.getElementById("artInfoBox");
        if (container) {
            if (open) {
                container.style.opacity = "1";
                container.style.pointerEvents = "all";
            }
            else {
                container.style.opacity = "0";
                container.style.pointerEvents = "none";
            }
        }
    }

    return (
        <span id="artPageBox" className="flexCol">

            {artefacts.map((season) => {
                return (
                    <span key={`${season.title}Artefacts`}>
                        <h2>{season.title}</h2>
                        <span className="artsBox">
                            {season.artefacts.map((artefact) => {
                                return (
                                    <button
                                        id={`art${artefact.id}`}
                                        className="flexCen"
                                        onClick={() => openPic(artefact, season.artefacts)}
                                        key={`art${artefact.id}`}>
                                        <img id={`image${artefact.id}`} src={artefact.src} alt="Artefact" />
                                    </button>
                                )
                            })}
                        </span>
                    </span>
                )
            })}

            <span
                id="popArtExitScreen"
                className="screenBlock flexCol flexCen"
                onClick={(e) => closePic(e.target)}>

                {(pic && group) &&
                    <span
                        id="popArtEnlarge"
                        className="flexCol flexCen">
                        <img
                            className="popArt"
                            src={pic.src}
                            alt="Artefact Image" />

                        <button
                            id="popArtInfoBtn"
                            onClick={() => switchInfoBox(true)}>
                            <img src={infoBtn} alt="More Info" />
                        </button>

                        <span id="artInfoBox">
                            <span id="artInfo" className="flexCol">
                                <span id="artInfoTitle" className="flexCen">
                                    <hr />
                                    <h4>{pic.name}</h4>
                                    <hr />
                                </span>
                                <p id="artInfoStory">
                                    <b>How did we get it:</b><br />
                                    {pic.story}
                                </p>
                                <p id="artInfoDesc">
                                    <b>How does it feel:</b><br />
                                    {pic.shortDesc}
                                </p>
                            </span>
                            <button
                                id="artInfoExit"
                                onClick={() => switchInfoBox(false)}>
                                Close
                            </button>
                        </span>

                        <span id="popArtScrollBox">
                            <span id="popArtScroll" className="flex">
                                {group.map(
                                    (art) => {
                                        return <img
                                            className="popArtScrollImg"
                                            src={art.src}
                                            onClick={() => openPic(art, group)}
                                            key={`popArtScroll${art.id}`} />
                                    })}
                            </span>
                        </span>

                        <button id="popArtExitBtn">
                            Close
                        </button>

                    </span>}
            </span>

        </span>
    )
}