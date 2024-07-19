import { useState } from "react";
import { RPPlay } from "../types";
import RoleplayData from "../data/RoleplayData"
import "./Roleplay.css"

export default function Roleplay() {

    const { rpS1, rpS2 } = RoleplayData();
    const rpSArr = [rpS1, rpS2];

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

    return (
        <>
            <div id="tagsBox">
                <div className="legend">
                    <h4>Tags:</h4>
                    <ul>
                        <li><span className="tag">blood</span> - this character is participating in the roleplay </li>
                        <li><span className="tag">sex</span> - this character is participating in the roleplay </li>
                        <li><span className="tag">18+</span> - may include: heavy violence or sexual intercourse</li>
                    </ul>
                </div>
            </div>

            <h3>List of Roleplays</h3>
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
                                className="rpPlayBtnBox">
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
                    className="roleplayBox">
                    <h4>{play.title}</h4>
                    <p className="seasonRP">
                        {groupId}
                    </p>
                    <p className="shortDescRP">
                        {play.shortDesc}
                    </p>
                    <div className="charsRP">
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
                    <div className="tagsRP">
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
                    <div className="roleplay">
                        {play.contents.map((talk, talkInx) => {
                            return (
                                <div
                                    className="talkRP"
                                    key={`talkLine${talkInx}`}>
                                    <h3>{talk.char}</h3>
                                    <p>{talk.content}</p>
                                </div>
                            )
                        })}
                    </div>
                    <button onClick={() => setPlay(null)}>
                        Close
                    </button>
                </div>
                )
            </>}
        </>
    )
}