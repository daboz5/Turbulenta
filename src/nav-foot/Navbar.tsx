import { Link } from "react-router-dom"
import d20Icon from "../assets/icons/dice-twenty-faces-one-svgrepo-com.svg"
import discordIcon from "../assets/icons/discord-svgrepo-com.svg"
import dragonIcon from "../assets/icons/dragon-svgrepo-com.svg"
import instgramIcon from "../assets/icons/instagram-svgrepo-com.svg"
import "./Navbar.css"

export default function Navbar() {

    return (
        <header>

            <nav>

                <div className="dropdownBox">
                    <Link to="/" className="tab">Home</Link>
                </div>

                <div className="dropdownBox">
                    <Link to="info" className="tab">Info</Link>
                    <div className="dropdown">
                        <Link to="/">About The Game</Link>
                        <Link to="/">Where To Find Us</Link>
                        <Link to="/">Rules</Link>
                    </div>
                </div>

                <div className="dropdownBox">
                    <Link to="/" className="tab">The Island of Turbulenta</Link>
                    <div className="dropdown">
                        <Link to="/">General Lore</Link>
                        <Link to="/">Flora and Fauna</Link>
                        <Link to="/">Tribes</Link>
                        <Link to="/">Stores</Link>
                        <Link to="/">Crafting</Link>
                        <Link to="/">Locations</Link>
                        <Link to="/">Portal lake</Link>
                    </div>
                </div>

                <div className="dropdownBox">
                    <Link to="/" className="tab">Campaign</Link>
                    <div className="dropdown">
                        <Link to="/">Reports</Link>
                        <Link to="/">Season 1</Link>
                        <Link to="/">Season 2</Link>
                        <Link to="artefacts">Artefacts</Link>
                    </div>
                </div>

                <div className="dropdownBox">
                    <Link to="/" className="tab">Archives</Link>
                    <div className="dropdown">
                        <Link to="roleplay">Role-play and fiction</Link>
                        <Link to="/">Audio recordings</Link>
                        <Link to="/">Art</Link>
                    </div>
                </div>

                <div id="navSpacer"></div>

                <a
                    className="navbarIconBox"
                    href="https://www.instagram.com/amulet_d20/"
                    target="_blank">
                    <img
                        className="navbarIcon"
                        src={instgramIcon}
                        alt="Instagram Icon" />
                </a>
                <a
                    className="navbarIconBox"
                    href="https://mladizmaji.si/"
                    target="_blank">
                    <img
                        className="navbarIcon"
                        src={dragonIcon}
                        alt="Mladi Zmaji Icon" />
                </a>
                <a
                    className="navbarIconBox"
                    href="https://d20.si/"
                    target="_blank">
                    <img
                        className="navbarIcon"
                        src={d20Icon}
                        alt="Amulet Icon" />
                </a>
                <a
                    className="navbarIconBox"
                    href="https://discord.gg/AakffpP876"
                    target="_blank">
                    <img
                        className="navbarIcon"
                        src={discordIcon}
                        alt="Discord Icon" />
                </a>

            </nav>

        </header>
    )
}