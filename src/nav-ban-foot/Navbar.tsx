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
        const body = document.getElementsByTagName("body")[0];
        const screen = document.getElementById("menuScreen");
        const arrow = document.getElementById("navArrowBtn");
        const menu = document.getElementById("menu");
        if (body && screen && menu && arrow) {
            if (screen.style.height !== "100%" && !blockOpen) {
                body.style.overflow = "hidden";
                screen.style.height = "100%";
                screen.style.backgroundColor = "rgba(0, 72, 120, 1)";
                screen.style.boxShadow = "inset 0 0 100px 1px rgb(0, 19, 80)";
                menu.style.display = "flex";
                arrow.style.transform = "translateY(-35px) rotate(180deg)";
                arrow.style.zIndex = "1";
            } else if (screen.style.height === "100%") {
                body.style.overflow = "visible";
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
                            <div className="tab">
                                <Link className="tabLink" to="info">Info</Link>
                                <div className="drop">
                                    <span className="linkBox">
                                        <Link to="/">About The Game</Link>
                                        <hr />
                                    </span>
                                    <span className="linkBox">
                                        <Link to="/">Where To Find Us</Link>
                                        <hr />
                                    </span>
                                    <span className="linkBox">
                                        <Link to="/">Rules</Link>
                                        <hr />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="dropBox">
                            <div className="tab">
                                <Link className="tabLink" to="/">The Island of Turbulenta</Link>
                                <div className="drop">
                                    <span className="linkBox">
                                        <Link to="/">General Lore</Link>
                                        <hr />
                                    </span>
                                    <span className="linkBox">
                                        <Link to="/">Flora and Fauna</Link>
                                        <hr />
                                    </span>
                                    <span className="linkBox">
                                        <Link to="/">Tribes</Link>
                                        <hr />
                                    </span>
                                    <span className="linkBox">
                                        <Link to="/">Stores</Link>
                                        <hr />
                                    </span>
                                    <span className="linkBox">
                                        <Link to="/">Crafting</Link>
                                        <hr />
                                    </span>
                                    <span className="linkBox">
                                        <Link to="/">Locations</Link>
                                        <hr />
                                    </span>
                                    <span className="linkBox">
                                        <Link to="/">Portal lake</Link>
                                        <hr />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="dropBox">
                            <div className="tab">
                                <Link className="tabLink" to="/" >Campaign</Link>
                                <div className="drop">
                                    <span className="linkBox">
                                        <Link to="/">Reports</Link>
                                        <hr />
                                    </span>
                                    <span className="linkBox">
                                        <Link to="/">Season 1</Link>
                                        <hr />
                                    </span>
                                    <span className="linkBox">
                                        <Link to="/">Season 2</Link>
                                        <hr />
                                    </span>
                                    <span className="linkBox">
                                        <Link to="artefacts">Artefacts</Link>
                                        <hr />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="dropBox">
                            <div className="tab">
                                <Link className="tabLink" to="/" >Archives</Link>
                                <div className="drop">
                                    <span className="linkBox">
                                        <Link to="/characters">Characters</Link>
                                        <hr />
                                    </span>
                                    <span className="linkBox">
                                        <Link to="roleplay">Role-play and fiction</Link>
                                        <hr />
                                    </span>
                                    <span className="linkBox">
                                        <Link to="/">Audio recordings</Link>
                                        <hr />
                                    </span>
                                    <span className="linkBox">
                                        <Link to="/">Art</Link>
                                        <hr />
                                    </span>
                                </div>
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