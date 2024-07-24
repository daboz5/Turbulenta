import { useState } from "react";
import { RPPlay } from "../types";
import RoleplayData from "../data/RoleplayData"
import CharData from "../data/CharData";
import "./Stories.css"

import defGenToken from "../assets/chars/defTokens/anime-away-face-svgrepo-com.svg"

export default function Stories() {

    const { rpS1, rpS2 } = RoleplayData();
    const { chars } = CharData();
    const rpSArr = [rpS1, rpS2];

    const tagArr = [{
        id: "blood",
        desc: "this character is participating in the roleplay",
    }, {
        id: "sex",
        desc: "this character is participating in the roleplay",
    }, {
        id: "18+",
        desc: "may include: heavy violence or sexual intercourse",
    }]

    const colArr = [
        "rgb(220, 220, 50)",
        "rgb(220, 50, 220)",
        "rgb(50, 220, 220)",
        "rgb(50, 220, 50)",
        "rgb(220, 50, 50)",
        "rgb(220, 110, 50)",
        "rgb(220, 50, 110)",
        "rgb(50, 110, 220)",
    ];

    const [groupId, setGroupId] = useState("");
    const [play, setPlay] = useState<RPPlay | null>(null);

    const sortPlays = (cont: RPPlay[]) => {
        const sorted = cont.sort((a, b) => {
            const upperA = a.title.toLocaleUpperCase();
            const upperB = b.title.toLocaleUpperCase();
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

    const openListGroup = (target: EventTarget, grNum: number) => {
        const btns = document.getElementById(`rpPlayBtnBox${grNum}`);
        if (target instanceof Element && btns) {
            const btnsStyle = btns.style.display;
            const tClass = target.className;
            if (tClass !== "rpPlayBtn") {
                if (btnsStyle === "none" || btnsStyle === "") {
                    btns.style.display = "block";
                } else {
                    btns.style.display = "none";
                }
            }
        }
    }

    const createRoleplay = () => {
        if (play) {
            const pickedColorArr: { id: string, color: string }[] = [];
            play.chars.forEach((char) => {
                for (let i = 0; i < 25; i++) {
                    const num = Math.floor(Math.random() * colArr.length);
                    if (!pickedColorArr.find((chaCol) => chaCol.color === colArr[num])) {
                        pickedColorArr.push({ id: char, color: colArr[num] });
                        i = 25;
                    }
                }
            });

            return play.contents.map((talk, talkInx) => {
                const charInfo = chars.find((char) => char.name === talk.char.name);
                let token = "";
                if (typeof talk.char.token === "number" && charInfo && charInfo.img) {
                    token = charInfo.img.tokenArr[0];
                }
                if ((token === "" || token === undefined) && charInfo) {
                    token = charInfo.gender.defToken;
                }
                const charColor = pickedColorArr.find((col) => col.id === charInfo?.name)?.color;
                return (
                    <div
                        className="talkRP flex"
                        key={`talkLine${talkInx}`}>
                        <img
                            className="talkRPToken"
                            src={token ? token : defGenToken}
                            alt="Avatar token" />
                        <span>
                            <span id="talkRPNameBox" className="flexCol">
                                <h5
                                    style={{ color: charColor ? charColor : "white" }}>
                                    {talk.char.name}
                                </h5>
                                {charInfo &&
                                    <span>
                                        ({charInfo.gender.pronoun})
                                    </span>
                                }
                            </span>
                            <p>{talk.content}</p>
                        </span>
                    </div>
                )
            })
        }
    }

    return (
        <>
            <div id="tagsBox" className="flexCen">
                <div id="tags">
                    <h4>Tags:</h4>
                    <ul>
                        {tagArr.map((tag, tagInx) => {
                            return (
                                <li key={`tag${tagInx}`}><span className="tagExample">{tag.id}</span> - {tag.desc}</li>)
                        })}
                    </ul>
                </div>
            </div>

            <h3>List of Stories</h3>
            <span
                id="rpListBox"
                className="flexCol flexCen">
                {rpSArr.map((group, grInx) => {
                    return (
                        <div
                            className="rpGroupBtnBox flexCol flexCen"
                            onClick={(el) => openListGroup(el.target, grInx)}
                            key={`rpBtnGroup${grInx}`}>
                            <button
                                className="rpGroupBtn">
                                {group.id}
                            </button>
                            <span
                                id={`rpPlayBtnBox${grInx}`}
                                className="rpPlayBtnBox flexCol">
                                {sortPlays(group.roleplays).map((play, inx) => {
                                    return (
                                        <button
                                            className="rpPlayBtn"
                                            onClick={() => {
                                                setGroupId(group.id)
                                                setPlay(play)
                                            }}
                                            key={`char${grInx}.${inx}`}>
                                            {play.title}
                                        </button>
                                    )
                                })}
                            </span>
                        </div>
                    )
                })}
            </span>

            {play && <>
                <div
                    id="roleplayBox"
                    className="flexCol">

                    <h4>{play.title}</h4>
                    <p id="seasonRP">{groupId}</p>
                    <p id="shortDescRP">{play.shortDesc}</p>

                    {(play.chars.length + play.tags.length) > 0 &&
                        <>
                            <hr />
                            <div id="charsRP" className="flex">
                                {play.chars.map((char, charInx) => {
                                    return (
                                        <span
                                            className="tag"
                                            key={`char${charInx}`}>
                                            {char}
                                        </span>
                                    )
                                })}
                            </div>
                            <div id="tagsRP" className="flex">
                                {play.tags.map((tag, tagInx) => {
                                    return (
                                        <span
                                            className="tag"
                                            key={`tag${tagInx}`}>
                                            {tag}
                                        </span>
                                    )
                                })}
                            </div>
                            <hr />
                        </>}

                    <div id="roleplay">
                        {createRoleplay()}
                    </div>

                    <hr />
                    <button onClick={() => setPlay(null)}>
                        Close
                    </button>

                </div>
            </>}
        </>
    )
}