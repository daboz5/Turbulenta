import SeasonsData from "../data/SeasonsData"
import "./Campaigns.css"

export default function Campaigns() {

    const { seasons } = SeasonsData();

    return (
        <span id="campaignBox">
            {seasons.map((season, inx) => {
                return (
                    <div className="campaign" key={`campaign${season.title}`}>
                        <h2>{season.title}</h2>
                        {season.dms.length > 0 &&
                            <span>
                                {season.dms.map((dm) => {
                                    return (
                                        <p
                                            className="campaignDM"
                                            key={`dm${dm}C${inx}key`}>
                                            {dm}
                                        </p>
                                    )
                                })}
                            </span>}
                        {season.players.length > 0 &&
                            <span>
                                {season.players.map((player) => {
                                    return (
                                        <p
                                            className="campaignDM"
                                            key={`player${player}C${inx}key`}>
                                            {player}
                                        </p>
                                    )
                                })}
                            </span>}
                        <p className="campaignDesc">
                            {season.shortDesc}
                        </p>
                    </div>
                )
            })}
        </span>
    )
}