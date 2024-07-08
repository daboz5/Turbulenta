import { useEffect, useState } from "react";
import type { Artefact, Artefacts } from "../types";
import ArtefactData from "../data/ArtefactData";
import infoBtn from "../assets/icons/info-large-svgrepo-com.svg"
import exitBtn from "../assets/icons/close-bold-svgrepo-com.svg"
import "./Artefacts.css"

export default function Artefacts() {

    const { artefacts } = ArtefactData();

    const emptyPic = {
        sIndex: -1,
        selectArt: {
            id: "",
            name: "",
            story: "",
            shortDesc: "",
            src: ""
        }
    }

    const [pic, setPic] = useState<{ sIndex: number, selectArt: Artefact }>(emptyPic);
    const scrollBtnWidth = 35;

    useEffect(() => {
        const scrollBox = document.getElementById("popArtScrollBox");
        const scroll = document.getElementById("popArtScroll");
        const leftBtn = document.getElementById("popArtScrollLeft");
        const rightBtn = document.getElementById("popArtScrollRight");
        if (scroll && scrollBox && leftBtn && rightBtn && pic.sIndex >= 0) {
            const scrollBoxWidth = scrollBox.clientWidth;
            const scrollWidth = scroll.clientWidth;
            if (scrollWidth + (2 * scrollBtnWidth) < scrollBoxWidth) {
                scrollBox.style.display = "flex";
                leftBtn.style.display = "none";
                rightBtn.style.display = "none";
            } else if (!pic.selectArt.id) {
                scroll.style.left = `${scrollBtnWidth}px`;
                scrollBox.style.display = "block";
                leftBtn.style.display = "block";
                rightBtn.style.display = "block";
            }
        }
    }, [pic])

    const openPic = (sIndex: number, art: Artefact) => {
        const picBoxEl = document.getElementById("popArtExitScreen");
        const picEl = document.getElementById("popArt" + art.id);
        if (picBoxEl && picEl) {
            picBoxEl.style.display = "flex";
            picEl.style.display = "block";
        }
        setPic({
            sIndex: sIndex,
            selectArt: art
        });
    }

    const closePic = (target: EventTarget, artId?: string) => {
        if (target instanceof Element) {
            const picElArr = artefacts[pic.sIndex].artefacts.map(
                (art) => { return document.getElementById("popArt" + art.id) }
            );
            if (
                target.id === "popArtExitScreen" ||
                target.id === "popArtExitBtn" ||
                target.id === "popArtExitImg"
            ) {
                const picBoxEl = document.getElementById("popArtExitScreen");
                if (picBoxEl && picElArr) {
                    picBoxEl.style.display = "none";
                    picElArr.forEach((pic) => { if (pic) { pic.style.display = "none" } });
                    setPic(emptyPic);
                    switchInfoBox(false);
                }
            }
            else if (target.className === "popArtScrollImg" && artId) {
                if (picElArr && artId !== pic.selectArt.id) {
                    picElArr.forEach((pic) => { if (pic) { pic.style.display = "none" } });
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

    const scrollPopup = (right: boolean) => {
        const scrollBox = document.getElementById("popArtScrollBox");
        const scroll = document.getElementById("popArtScroll");
        if (scrollBox && scroll) {
            const scrollBoxWidth = scrollBox.clientWidth;
            const scrollWidth = scroll.clientWidth
            const scrollConstant = 70;
            const left = scroll.style.left;
            const leftNum = Number(left.slice(0, left.length - 2))

            if (right) {
                if (
                    scrollBoxWidth - leftNum < scrollWidth &&
                    scrollWidth + leftNum - scrollConstant - scrollBoxWidth <= 0
                ) {
                    scroll.style.left = `${scrollBoxWidth - scrollWidth - scrollBtnWidth}px`;
                }
                else if (scrollBoxWidth - leftNum < scrollWidth - scrollBtnWidth) {
                    scroll.style.left = `${leftNum - scrollConstant}px`;
                }
            }

            else {
                if (leftNum < scrollBtnWidth && leftNum > 0) {
                    scroll.style.left = `${scrollBtnWidth}px`;
                } else if (leftNum < scrollBtnWidth) {
                    scroll.style.left = `${leftNum + scrollConstant}px`;
                }
            }
        }
    }

    return (
        <>

            {artefacts.map((season, sIndex) => {
                return (
                    <span key={`${season.title}Artefacts`}>
                        <h2>{season.title}</h2>
                        <span className="artBox">
                            {season.artefacts.map((artefact) => {
                                return (
                                    <button
                                        id={`art${artefact.id}`}
                                        className="art"
                                        onClick={() => openPic(sIndex, artefact)}
                                        key={`art${artefact.id}`}>
                                        <img id={`image${artefact.id}`} src={artefact.src} alt="Artefact" />
                                    </button>
                                )
                            })}
                        </span>
                    </span>
                )
            })}

            {<span id="popArtExitScreen" onClick={(e) => closePic(e.target)}>

                <span id="popArtEnlarge">
                    {artefacts.map((season) => {
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
                    })}

                    <button
                        id="popArtInfoBtn"
                        onClick={() => switchInfoBox(true)}>
                        <img src={infoBtn} alt="More Info" />
                    </button>

                    <span id="artInfoBox">
                        <span id="artInfo">
                            <span id="artInfoTitle">
                                <hr />
                                <h4>{pic.selectArt.name}</h4>
                            </span>
                            <p id="artInfoStory">
                                <b>How did we get it:</b><br />
                                {pic.selectArt.story}
                            </p>
                            <p id="artInfoDesc">
                                <b>How does it feel:</b><br />
                                {pic.selectArt.shortDesc}
                            </p>
                        </span>
                        <div
                            id="artInfoExit"
                            onClick={() => switchInfoBox(false)}>
                            <img
                                src={exitBtn}
                                onClick={() => switchInfoBox(false)}
                                alt="Exit Info" />
                        </div>
                    </span>

                    <span id="popArtScrollBox">
                        <span id="popArtScroll">
                            {pic.sIndex >= 0 &&
                                artefacts[pic.sIndex].artefacts.map(
                                    (art) => {
                                        return <img
                                            className="popArtScrollImg"
                                            src={art.src}
                                            onClick={(e) => {
                                                closePic(e.target, art.id);
                                                openPic(pic.sIndex, art);
                                            }}
                                            key={`popArtScroll${art.id}`} />
                                    })}
                        </span>

                        <button
                            id="popArtScrollLeft"
                            onClick={() => scrollPopup(false)}>
                            ➧
                        </button>
                        <button
                            id="popArtScrollRight"
                            onClick={() => scrollPopup(true)}>
                            ➧
                        </button>

                    </span>
                    <button
                        id="popArtExitBtn"
                        className="popArtExitIcon">
                        <img
                            src={exitBtn}
                            id="popArtExitImg"
                            alt="Exit Here" />
                    </button>

                </span>
            </span>}

        </>
    )
}