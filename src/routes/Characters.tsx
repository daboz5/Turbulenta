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
            }
        }
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

                        <div id="charInfoDescription">
                            <div className="charInfoPad">
                                <h4>Description</h4>
                                <span>
                                    {typeof charInfo?.backstory === "string" ?
                                        <p>{charInfo?.backstory}</p> :
                                        charInfo?.backstory
                                    }
                                </span>
                            </div>
                            {charInfo?.companions &&
                                <div className="charInfoPad">
                                    <h4>NPCs of Note</h4>
                                    {charInfo?.companions?.map(
                                        (comp, cInx) => {
                                            return (
                                                <span key={`keyCharComp${cInx}`}>
                                                    <h5>{comp.name}</h5>
                                                    {comp.token && <img src={comp.token} alt="NPC Image" />}
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
                                </div>}
                            {charInfo?.possessions &&
                                <div className="charInfoPad">
                                    <h4>Possessions</h4>
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
                                </div>}
                            {charInfo?.backstory &&
                                <div className="charInfoPad">
                                    <h4>Backstory</h4>
                                    <span>
                                        {typeof charInfo.backstory === "string" ?
                                            <p>{charInfo.backstory}</p> :
                                            charInfo.backstory
                                        }
                                    </span>
                                </div>}
                        </div>

                        <div
                            id="charExitBtn"
                            onClick={() => {
                                setCharacterDisplay(false)
                                document.body.scrollTop = 0
                                document.documentElement.scrollTop = 0
                            }}>
                            Close
                        </div>

                    </span>
                </span>
            </span>
        </>
    )
}
