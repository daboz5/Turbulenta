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

    const emptyInfo: Char = {
        name: "",
        class: [],
        background: "",
        descript: <>{``}</>
    }

    const [charInfo, setCharInfo] = useState(emptyInfo);
    const [charImgNum, setCharImgNum] = useState(1);

    useEffect(() => {
        charInfo.img?.forEach((img, imgInx) => {
            const imgEl = document.getElementById("charImg" + (imgInx));
            if (imgEl && img) {
                imgEl.style.display = "none";
            }
        })
        const pickedImg = document.getElementById("charImg" + (charInfo.defImg ? (charInfo.defImg) : 1));
        pickedImg ? pickedImg.style.display = "block" : {};
        charInfo.defImg ? setCharImgNum(charInfo.defImg) : setCharImgNum(0);
    }, [charInfo])

    const setNextImg = (dir: "back" | "forw") => {
        let newImg: HTMLElement | null = null;
        if (dir === "back") {
            newImg = document.getElementById("charImg" + (charImgNum - 1));
        } else if (dir === "forw") {
            newImg = document.getElementById("charImg" + (charImgNum + 1));
        }
        if (newImg) {
            charInfo.img?.forEach((img, imgInx) => {
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
        const infoBox = document.getElementById("charInfoBox");
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

            <span id="charInfoBox">
                <h3>{charInfo.name}</h3>
                <div id="charInfoClass" className="flex flexCen">
                    {charInfo.class.map((classInfo) => {
                        return <span key={`${charInfo.name + classInfo.title + classInfo.lvl}`}>
                            {classInfo.title} {classInfo.lvl}
                        </span>
                    })}
                </div>
                <div id="charInfoBackground">
                    {charInfo.background}
                </div>
                <div id="charInfoImg" className="flex flexCen">
                    {charInfo.img && charInfo.img.length > 0 ?
                        <>
                            <button onClick={() => setNextImg("back")}>
                                ➧
                            </button>
                            {charInfo.img.map((charImg, inx) => {
                                return (
                                    <img
                                        id={`charImg${inx}`}
                                        className="charImg"
                                        src={charImg}
                                        alt={`${charInfo.name} Image`}
                                        key={`charImg${inx}`} />
                                )
                            })}
                            <button onClick={() => setNextImg("forw")}>
                                ➧
                            </button>
                        </> :
                        <img
                            src={emptyFrame}
                            alt={`No Character Image`} />}
                </div>
                <div id="charInfoDescription">
                    {charInfo.descript}
                </div>
                <div
                    id="charExitBtn"
                    onClick={() => setCharacterDisplay()}>
                    Close
                </div>
            </span>
        </>
    )
}
