import { Link } from "react-router-dom"
import d20Icon from "../assets/icons/dice-twenty-faces-one-svgrepo-com.svg"
import discordIcon from "../assets/icons/discord-svgrepo-com.svg"
import dragonIcon from "../assets/icons/dragon-svgrepo-com.svg"
import instgramIcon from "../assets/icons/instagram-svgrepo-com.svg"
import homeIcon from "../assets/icons/island-svgrepo-com.svg"
import upIcon from "../assets/icons/Arrow_up.svg"

import "./Navbar.css"
import useDragonStore from "../useDragonStore"

export default function Navbar() {

    type DropDown = {
        tabTitle: string;
        tabPath: string;
        tabFunc?: () => void;
        dropContent: {
            dropTitle: string;
            dropPath: string;
            dropFunc?: () => void;
        }[];
    }

    const { setMapState } = useDragonStore();

    // const dropInfo: DropDown = {
    //     tabTitle: "Info",
    //     tabPath: "info",
    //     dropContent: [{
    //         dropTitle: "About the Game",
    //         dropPath: "/"
    //     }, {
    //         dropTitle: "Where To Find Us",
    //         dropPath: "/"
    //     }, {
    //         dropTitle: "Rules",
    //         dropPath: "/"
    //     }]
    // }

    const dropIsland: DropDown = {
        tabTitle: "The Island of Turbulenta",
        tabPath: "island",
        dropContent: [{
            dropTitle: "Island Map",
            dropPath: "island",
            dropFunc: () => setMapState("map")
        }, {
            dropTitle: "List of Locations",
            dropPath: "island",
            dropFunc: () => setMapState("list")
        }
            // {
            //     dropTitle: "General Lore",
            //     dropPath: "/"
            // }, {
            //     dropTitle: "Flora & Fauna",
            //     dropPath: "/"
            // }, {
            //     dropTitle: "Tribes",
            //     dropPath: "/"
            // }, {
            //     dropTitle: "Stores",
            //     dropPath: "/"
            // }, {
            //     dropTitle: "Crafting",
            //     dropPath: "/"
            // }, {
            //     dropTitle: "Portal Lake",
            //     dropPath: "/"
            // }
        ]
    }

    const dropCamp: DropDown = {
        tabTitle: "Campaigns",
        tabPath: "/",
        dropContent: [
            //     {
            //     dropTitle: "Reports",
            //     dropPath: "/"
            // }, {
            //     dropTitle: "Season 1",
            //     dropPath: "/"
            // }, {
            //     dropTitle: "Season 2",
            //     dropPath: "/"
            // },
            {
                dropTitle: "Artefacts",
                dropPath: "artefacts"
            }]
    }

    // const dropArchive: DropDown = {
    //     tabTitle: "Archives",
    //     tabPath: "/",
    //     dropContent: [
    //         {
    //         dropTitle: "Characters",
    //         dropPath: "characters"
    //     }, {
    //         dropTitle: "Roleplays",
    //         dropPath: "roleplays"
    //     }, {
    //         dropTitle: "Recordings",
    //         dropPath: "/"
    //     }, {
    //         dropTitle: "Art",
    //         dropPath: "/"
    //     }
    // ]
    // }

    const openMenu = (blockOpen?: boolean, func?: () => void) => {
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
        if (func) { func() }
    }

    const createDropdown = (content: DropDown) => {
        return (
            <div className="dropBox">
                <div className="tab">
                    <Link
                        className="tabLink"
                        to={content.tabPath}
                        onClick={() => {
                            openMenu()
                            content.tabFunc && content.tabFunc()
                        }}>
                        {content.tabTitle}
                    </Link>
                    <div className="drop">
                        {content.dropContent.map((link) => {
                            return (
                                <span
                                    className="linkBox"
                                    key={`nav${link.dropTitle.replace(" ", "")}`}>
                                    <Link
                                        to={link.dropPath}
                                        onClick={() => {
                                            openMenu()
                                            link.dropFunc && link.dropFunc()
                                        }}>
                                        {link.dropTitle}
                                    </Link>
                                    <hr />
                                </span>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
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

                        {/* {createDropdown(dropInfo)} */}

                        {createDropdown(dropIsland)}

                        {createDropdown(dropCamp)}

                        {/* {createDropdown(dropArchive)} */}

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