import "./Roleplay.css"

export default function Roleplay() {
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
                <a href="char1.html">
                    <div className="rp-box">
                        <h2>Episode 1 </h2>
                        <hr />
                        <p>Mashed potatoes, "mating" and much more!</p>
                    </div>
                </a>
            </div>
        </>
    )
}