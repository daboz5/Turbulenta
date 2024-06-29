import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {

    return (
        <header>
            <nav className="navbar">
                <div>
                    <Link to="/" id="tab">Home</Link>
                    <div className="dropdown">
                        <Link to="info" id="tab">Info</Link>
                        <div className="dropdown-content">
                            <Link to="/">About The Game</Link>
                            <Link to="/">Where To Find Us</Link>
                            <Link to="/">Rules</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to="/" id="tab">The Island of Turbulenta</Link>
                        <div className="dropdown-content">
                            <Link to="/">General Lore</Link>
                            <Link to="/">Flora and Fauna</Link>
                            <Link to="/">Tribes</Link>
                            <Link to="/">Stores</Link>
                            <Link to="/">Crafting</Link>
                            <Link to="/">Locations</Link>
                            <Link to="/">Portal lake</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to="/" id="tab">Campaign</Link>
                        <div className="dropdown-content">
                            <Link to="/">Reports</Link>
                            <Link to="/">Season 1</Link>
                            <Link to="/">Season 2</Link>
                            <Link to="artefacts">Artefacts</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to="/" id="tab">Archives</Link>
                        <div className="dropdown-content">
                            <Link to="roleplay">Role-play and fiction</Link>
                            <Link to="/">Audio recordings</Link>
                            <Link to="/">Art</Link>
                        </div>
                    </div>
                    <a href="https://www.instagram.com/amulet_d20/"><i className="fa-brands fa-instagram fa-2x"></i></a>
                    <a href="https://mladizmaji.si/"><i className="fa-solid fa-dragon fa-2x"></i></a>
                    <a href="https://d20.si/"><i className="fa-solid fa-dice-d20 fa-2x"></i></a>
                    <a href="https://discord.gg/AakffpP876"><i className="fa-brands fa-discord fa-2x"></i></a>
                </div>
            </nav>
        </header>
    )
}