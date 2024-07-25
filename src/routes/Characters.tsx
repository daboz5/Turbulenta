import { useEffect, useState } from "react";
import { Char } from "../types";
import CharData from "../data/CharData";
import "./Characters.css"

import emptyFrame from "../assets/icons/dragon-svgrepo-com.svg"

export default function Characters() {

    const { chars } = CharData();

    const sortChars = () => {
        const sorted = chars.sort((a, b) => {
            const upperA = a.name.toLocaleUpperCase();
            const upperB = b.name.toLocaleUpperCase();
            if (upperA < upperB) {
                return -1;
            }
            if (upperA > upperB) {
                return 1;
            }
            return 0
        });
        return sorted;
    }

    const [charInfo, setCharInfo] = useState<Char | null>(null);
    const [charImgNum, setCharImgNum] = useState(1);

    useEffect(() => {
        if (charInfo) {
            charInfo.img?.imgArr.forEach((img, imgInx) => {
                const imgEl = document.getElementById("charImg" + (imgInx));
                if (imgEl && img) {
                    imgEl.style.display = "none";
                }
            })
            const pickedImg = document.getElementById("charImg" + (charInfo.img?.imgDef ? (charInfo.img.imgDef) : 1));
            pickedImg ? pickedImg.style.display = "block" : {};
            charInfo.img?.imgDef ? setCharImgNum(charInfo.img.imgDef) : setCharImgNum(0);
        }
    }, [charInfo])

    const setNextImg = (dir: "back" | "forw") => {
        let newImg: HTMLElement | null = null;
        if (dir === "back") {
            newImg = document.getElementById("charImg" + (charImgNum - 1));
        } else if (dir === "forw") {
            newImg = document.getElementById("charImg" + (charImgNum + 1));
        }
        if (newImg && charInfo) {
            charInfo.img?.imgArr.forEach((img, imgInx) => {
                const imgEl = document.getElementById("charImg" + (imgInx));
                if (imgEl && img) {
                    imgEl.style.display = "none";
                }
            })
            newImg.style.display = "block";
            if (dir === "back") {
                setCharImgNum(charImgNum - 1);
            } else {
                setCharImgNum(charImgNum + 1);
            }
        }
    }

    const setCharacterDisplay = (char: Char | false, target?: EventTarget) => {
        if (!target || target instanceof Element) {
            const screen = document.getElementById("charInfoBoxScreen");
            const tId = target?.id;
            if (char && screen) {
                screen.style.opacity = "1";
                screen.style.pointerEvents = "all";
                setCharInfo(char);
            } else if (screen && (tId === "charInfoBoxScreen" || tId === "charExitBtn")) {
                screen.style.opacity = "0";
                screen.style.pointerEvents = "none";
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                resetCharInfoDisplay();
            }
        }
    }

    const switchText = (targetId: string) => {
        const text = document.getElementById(targetId);
        const textStyle = text?.style.display;
        if (text && (textStyle === "" || textStyle === "none")) {
            text.style.display = "block";
        } else if (text) {
            text.style.display = "none";
        }
    }

    const resetCharInfoDisplay = () => {
        const el1 = document.getElementById("charInfoDescription");
        const el2 = document.getElementById("charInfoCompanions");
        const el3 = document.getElementById("charInfoPossessions");
        const el4 = document.getElementById("charInfoBackstory");
        el1 ? el1.style.display = "none" : {};
        el2 ? el2.style.display = "none" : {};
        el3 ? el3.style.display = "none" : {};
        el4 ? el4.style.display = "none" : {};
    }

    return (
        <>
            <span
                id="charactersBox"
                className="flexCol flexCen">
                <span className="flexCol">
                    {sortChars().map((char, inx) => {
                        return (
                            <button
                                onClick={() => setCharacterDisplay(char)}
                                key={`char${inx}`}>
                                {char.name}
                            </button>
                        )
                    })}
                </span>
            </span>

            <span
                id="charInfoBoxScreen"
                className="screen flexCen"
                onClick={(e) => setCharacterDisplay(false, e.target)}>
                <span
                    id="charInfoBoxContainer"
                    className="flexCen">
                    <span id="charInfoBox">

                        <h3>{charInfo?.name}</h3>

                        <div id="charInfoClass" className="flexCen">
                            {charInfo?.class.map((classInfo) => {
                                return <span key={`${charInfo.name + classInfo.title + classInfo.lvl}`}>
                                    {classInfo.title} {classInfo.lvl}
                                </span>
                            })}
                        </div>

                        <div id="charInfoBackground">
                            {charInfo?.background}
                        </div>

                        <div id="charInfoImg" className="flexCen">
                            {charInfo?.img && charInfo.img.imgArr.length > 0 ?
                                <>
                                    <div
                                        id="charImgBox"
                                        className="flexCen">
                                        <button
                                            className="charImgHandle"
                                            onClick={() => setNextImg("back")}>
                                            ➧
                                        </button>
                                        {charInfo.img.imgArr.map((charImg, inx) => {
                                            return (
                                                <img
                                                    id={`charImg${inx}`}
                                                    className="charImg"
                                                    src={charImg}
                                                    alt={`${charInfo.name} Image`}
                                                    key={`charImg${inx}`} />
                                            )
                                        })}
                                        <button
                                            className="charImgHandle"
                                            onClick={() => setNextImg("forw")}>
                                            ➧
                                        </button>
                                    </div>
                                </> :
                                <img
                                    className="charImg"
                                    src={emptyFrame}
                                    alt={`No Character Image`} />}
                        </div>

                        <div
                            id="charInfoDescriptionBox"
                            className="charInfoTextBox">
                            <span
                                className="charExpandBtn flexCen"
                                onClick={() => switchText("charInfoDescription")}>
                                <div>
                                    <h4>Description</h4>
                                    <hr className="charExpandBtnLine" />
                                </div>
                            </span>
                            <span
                                id="charInfoDescription"
                                className="charInfoText">
                                {typeof charInfo?.backstory === "string" ?
                                    <p>{charInfo?.backstory}</p> :
                                    charInfo?.desc
                                }
                            </span>
                        </div>

                        <div
                            id="charInfoCompanionsBox"
                            className="charInfoTextBox">
                            {charInfo?.companions &&
                                <>
                                    <span
                                        className="charExpandBtn flexCen"
                                        onClick={() => switchText("charInfoCompanions")}>
                                        <div>
                                            <h4>NPCs of Note</h4>
                                            <hr className="charExpandBtnLine" />
                                        </div>
                                    </span>
                                    <span
                                        id="charInfoCompanions"
                                        className="charInfoText">
                                        {charInfo?.companions?.map(
                                            (comp, cInx) => {
                                                return (
                                                    <span key={`keyCharComp${cInx}`}>
                                                        <h5>{comp.name}</h5>
                                                        {comp.token &&
                                                            <img src={comp.token} alt="NPC Image" />}
                                                        <span>
                                                            {typeof comp.desc === "string" ?
                                                                <p>{comp.desc}</p> :
                                                                comp.desc
                                                            }
                                                        </span>
                                                    </span>
                                                )
                                            }
                                        )}
                                    </span>
                                </>}
                        </div>

                        <div
                            id="charInfoPossessionsBox"
                            className="charInfoTextBox">
                            {charInfo?.possessions &&
                                <>
                                    <span
                                        className="charExpandBtn flexCen"
                                        onClick={() => switchText("charInfoPossessions")}>
                                        <div>
                                            <h4>Possessions</h4>
                                            <hr className="charExpandBtnLine" />
                                        </div>
                                    </span>
                                    <span
                                        id="charInfoPossessions"
                                        className="charInfoText">
                                        {charInfo?.possessions?.map(
                                            (item, iInx) => {
                                                return (
                                                    <span key={`keyCharItem${iInx}`}>
                                                        <h5>{item.name}</h5>
                                                        <span>
                                                            {typeof item.desc === "string" ?
                                                                <p>{item.desc}</p> :
                                                                item.desc
                                                            }
                                                        </span>
                                                    </span>
                                                )
                                            }
                                        )}
                                    </span>
                                </>}
                        </div>

                        <div
                            id="charInfoBackstoryBox"
                            className="charInfoTextBox">
                            {charInfo?.backstory &&
                                <>
                                    <span
                                        className="charExpandBtn flexCen"
                                        onClick={() => switchText("charInfoBackstory")}>
                                        <div>
                                            <h4>Backstory</h4>
                                            <hr className="charExpandBtnLine" />
                                        </div>
                                    </span>
                                    <span
                                        id="charInfoBackstory"
                                        className="charInfoText">
                                        {typeof charInfo.backstory === "string" ?
                                            <p>{charInfo.backstory}</p> :
                                            charInfo.backstory
                                        }
                                    </span>
                                </>}
                        </div>

                        <div
                            id="charExitBtn"
                            onClick={() => setCharacterDisplay(false)}>
                            Close
                        </div>

                    </span>
                </span>
            </span>
        </>
    )
}
