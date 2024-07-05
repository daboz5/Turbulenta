import RoleplayData from "../data/RoleplayData"
import "./Roleplay.css"

export default function Roleplay() {

    const { roleplays } = RoleplayData();

    const createRoleplay = () => {
        return roleplays.map((act, index) => {
            return (
                <div
                    className="roleplayBox"
                    key={`roleplay${index}`}>
                    <h3>{act.title}</h3>
                    <p className="seasonRP">
                        {act.season}
                    </p>
                    <p className="shortDescRP">
                        {act.shortDesc}
                    </p>
                    <div className="charsRP">
                        {act.chars.map((char, charInx) => {
                            return (
                                <span
                                    className="charRP"
                                    key={`char${charInx}`}>
                                    {char}
                                </span>
                            )
                        })}
                    </div>
                    <div className="tagsRP">
                        {act.tags.map((tag, tagInx) => {
                            return (
                                <span
                                    className="tagRP"
                                    key={`tag${tagInx}`}>
                                    {tag}
                                </span>
                            )
                        })}
                    </div>
                    <div className="roleplay">
                        {act.contents.map((talk, talkInx) => {
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
                </div>
            )
        });
    }

    return (
        <>
            <h2>Our Latest Roleplays!</h2>
            <div className="roleplayBox">
                <div className="legend">
                    <h3>Tags:</h3>
                    <ul>
                        <li><span id="primer">16+</span> = roleplay may include: violence, [todo] </li>
                        <li><span id="primer">18+</span> = roleplay may include: heavy violence, sexual intercourse [todo]
                        </li>
                        <li><span id="primer">character name</span> = this character is participating in the roleplay </li>
                    </ul>
                </div>
            </div>

            {createRoleplay()}
        </>
    )
}