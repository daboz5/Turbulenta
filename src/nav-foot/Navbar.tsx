import { Link } from "react-router-dom"
import d20Icon from "../assets/icons/dice-twenty-faces-one-svgrepo-com.svg"
import discordIcon from "../assets/icons/discord-svgrepo-com.svg"
import dragonIcon from "../assets/icons/dragon-svgrepo-com.svg"
import instgramIcon from "../assets/icons/instagram-svgrepo-com.svg"
import homeIcon from "../assets/icons/island-svgrepo-com.svg"
import upIcon from "../assets/icons/Arrow_up.svg"

import "./Navbar.css"

export default function Navbar() {

    const openMenu = (blockOpen?: boolean) => {
        const screen = document.getElementById("menuScreen");
        const arrow = document.getElementById("navArrowBtn");
        const menu = document.getElementById("menu");
        if (screen && menu && arrow) {
            if (screen && screen.style.height !== "100%" && !blockOpen) {
                screen.style.height = "100%";
                screen.style.backgroundColor = "rgba(0, 72, 120, 1)";
                screen.style.boxShadow = "inset 0 0 100px 1px rgb(0, 19, 80)";
                menu.style.display = "flex";
                arrow.style.transform = "translateY(-35px) rotate(180deg)";
                arrow.style.zIndex = "1";
            } else {
                screen.style.height = "110px";
                screen.style.backgroundColor = "rgba(0, 72, 120, 0)";
                screen.style.boxShadow = "inset 0 0 0 0 black";
                menu.style.display = "none";
                arrow.style.transform = "translateY(5px) rotate(0deg)";
                arrow.style.zIndex = "0";
            }
        }
    }

    return (
        <header>
            <nav>

                <span id="menuScreen">
                    <Link
                        to="/"
                        onClick={() => openMenu(true)}>
                        <img
                            id="homeBtn"
                            src={homeIcon}
                            alt="Home Button"
                        />
                    </Link>
                    <button
                        id="navArrowBtn"
                        onClick={() => openMenu()}>
                        <img
                            id="navArrow"
                            src={upIcon}
                            alt="Arrow"
                        />
                    </button>

                    <span id="menu">
                        <div className="dropBox">
                            <Link to="info" className="tab">Info</Link>
                            <div className="drop">
                                <Link to="/">About The Game</Link>
                                <Link to="/">Where To Find Us</Link>
                                <Link to="/">Rules</Link>
                            </div>
                        </div>

                        <div className="dropBox">
                            <Link to="/" className="tab">The Island of Turbulenta</Link>
                            <div className="drop">
                                <Link to="/">General Lore</Link>
                                <Link to="/">Flora and Fauna</Link>
                                <Link to="/">Tribes</Link>
                                <Link to="/">Stores</Link>
                                <Link to="/">Crafting</Link>
                                <Link to="/">Locations</Link>
                                <Link to="/">Portal lake</Link>
                            </div>
                        </div>

                        <div className="dropBox">
                            <Link to="/" className="tab">Campaign</Link>
                            <div className="drop">
                                <Link to="/">Reports</Link>
                                <Link to="/">Season 1</Link>
                                <Link to="/">Season 2</Link>
                                <Link to="artefacts">Artefacts</Link>
                            </div>
                        </div>

                        <div className="dropBox">
                            <Link to="/" className="tab">Archives</Link>
                            <div className="drop">
                                <Link to="/characters">Characters</Link>
                                <Link to="roleplay">Role-play and fiction</Link>
                                <Link to="/">Audio recordings</Link>
                                <Link to="/">Art</Link>
                            </div>
                        </div>

                        <span id="navbarIcons">
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
                        </span>
                    </span>
                </span>

            </nav>
        </header>
    )
}