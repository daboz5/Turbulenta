import { useState } from "react";
import { RPPlay } from "../types";
import { Link } from "react-router-dom";
import useDragonStore from "../useDragonStore";
import RoleplayData from "../data/RoleplayData"
import CharData from "../data/CharData";
import defGenToken from "../assets/chars/defTokens/anime-away-face-svgrepo-com.svg"
import "./Stories.css"

export default function Stories() {

    const { setPreselectChar } = useDragonStore();
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

    const switchListGroup = (target: EventTarget, grNum: number) => {
        const btns = document.getElementById(`rpPlayBtnBox${grNum}`);
        if (target instanceof Element && btns) {
            const btnsStyle = btns.style.display;
            const tClass = target.className;
            if (
                tClass !== "rpPlayBtn" &&
                target.className !== "rpListFilter" &&
                target.className !== "filterTagCheck" &&
                target.className !== "filterTagCheckBox flexCen" &&
                target.className !== "rpListFilterBox flexCol flexCen"
            ) {
                if (btnsStyle === "none" || btnsStyle === "") {
                    btns.style.display = "block";
                } else {
                    btns.style.display = "none";
                }
            }
        }
    }

    const setTag = (id: string) => {
        const tag = document.getElementById(id);
        if (tag instanceof Element) {
            const tagStyle = tag.style;
            const lightCol = "rgb(255, 204, 171)";
            const darkCol = "rgb(80, 200, 80)";
            const shadCol = "rgb(109, 44, 0)";
            if (tagStyle.backgroundColor === "" || tagStyle.backgroundColor === lightCol) {
                tagStyle.backgroundColor = darkCol;
                tagStyle.boxShadow = `inset 0 -1px 2px 4px ${shadCol}`;
            } else if (tagStyle.backgroundColor === darkCol) {
                tagStyle.backgroundColor = lightCol;
                tagStyle.boxShadow = `inset 0 -2px 3px 3px ${shadCol}`;
            }
        }
    }

    const switchPlay = (play?: RPPlay) => {
        const el = document.getElementById("roleplayContainer");
        const tag = document.getElementById("tags");
        if (play && el) {
            el.style.opacity = "1";
            el.style.pointerEvents = "all";
            setPlay(play);
        } else if (el && tag) {
            const scrollNum = tag.offsetTop - 20;
            document.body.scrollTop = scrollNum;
            document.documentElement.scrollTop = scrollNum;
            el.style.opacity = "0";
            el.style.pointerEvents = "none";
        }
    };

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
                    token = charInfo.img.tokenArr[talk.char.token];
                }
                if ((token === "" || token === undefined) && charInfo) {
                    token = charInfo.gender.defToken;
                }
                const charColor = pickedColorArr.find((col) => col.id === charInfo?.name)?.color;
                return (
                    <div
                        className="talkRP"
                        key={`talkLine${talkInx}`}>
                        <span className="talkRPStory">
                            <span id="talkRPCharBox" className="flex">
                                <img
                                    className="talkRPToken"
                                    src={token ? token : defGenToken}
                                    alt="Avatar token" />
                                <span id="talkRPNameBox">
                                    {charInfo ?
                                        <Link
                                            to="/campaigns/characters"
                                            onClick={() => setPreselectChar(charInfo)}>
                                            <h5
                                                style={{ color: charColor ? charColor : "white" }}>
                                                {talk.char.name}
                                            </h5>
                                        </Link> :
                                        <h5
                                            style={{ color: charColor ? charColor : "white" }}>
                                            {talk.char.name}
                                        </h5>}
                                    {charInfo &&
                                        <span>
                                            ({charInfo.gender.pronoun})
                                        </span>
                                    }
                                </span>
                            </span>
                        </span>
                        <p>{talk.content}</p>
                    </div >
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

            <span id="storiesWrapper">

                <span className="flexCol">
                    <h3>List of Stories</h3>
                    {rpSArr.map((group, grInx) => {
                        return (
                            <div
                                className="rpGroupBtnBox flexCol flexCen"
                                onClick={(el) => switchListGroup(el.target, grInx)}
                                key={`rpBtnGroup${grInx}`}>
                                <span className="rpGroupBtn flexCen">
                                    <hr />
                                    <button>
                                        {group.id}
                                    </button>
                                    <hr />
                                </span>
                                <span
                                    id={`rpPlayBtnBox${grInx}`}
                                    className="rpPlayBtnBox">
                                    <span className="rpListFilterBox flexCol flexCen">
                                        <span className="filterTagCheckBox flexCen">
                                            Is a tag:<div
                                                id={`filterTag${grInx}`}
                                                className="filterTagCheck"
                                                onClick={() => setTag(`filterTag${grInx}`)} />
                                        </span>
                                        <input className="rpListFilter" />
                                    </span>
                                    {sortPlays(group.roleplays).map((play, inx) => {
                                        return (
                                            <button
                                                className="rpPlayBtn"
                                                onClick={() => {
                                                    setGroupId(group.id)
                                                    switchPlay(play)
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

                <span id="roleplayContainer">
                    {play &&
                        <div
                            id="roleplayBox"
                            className="flexCol">

                            <h4>{play.title}</h4>
                            <p id="seasonRP">/˘\ <b>{groupId}</b> /ˇ\</p>
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
                            <button onClick={() => switchPlay()}>
                                Close
                            </button>

                        </div>
                    }
                </span>

            </span>
        </>
    )
}