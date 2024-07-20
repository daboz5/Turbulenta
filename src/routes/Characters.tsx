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

    const setCharacterDisplay = (char?: Char) => {
        const infoBox = document.getElementById("charInfoBoxContainer");
        if (infoBox && char) {
            infoBox.style.opacity = "1";
            infoBox.style.pointerEvents = "all";
            setCharInfo(char);
        } else if (infoBox) {
            infoBox.style.opacity = "0";
            infoBox.style.pointerEvents = "none";
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

            <div
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
                        {charInfo?.desc}
                    </div>

                    <div
                        id="charExitBtn"
                        onClick={() => setCharacterDisplay()}>
                        Close
                    </div>

                </span>
            </div>
        </>
    )
}
