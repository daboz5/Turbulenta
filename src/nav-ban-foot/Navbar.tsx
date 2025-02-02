import { Link } from "react-router-dom"
import d20Icon from "../assets/icons/dice-twenty-faces-one-svgrepo-com.svg"
import discordIcon from "../assets/icons/discord-svgrepo-com.svg"
import dragonIcon from "../assets/icons/dragon-svgrepo-com.svg"
import instgramIcon from "../assets/icons/instagram-svgrepo-com.svg"
import homeIcon from "../assets/icons/island-svgrepo-com.svg"
import Arrow from "../assets/icons/Arrow_up.tsx"

import "./Navbar.css"
import useDragonStore from "../useDragonStore"
import { useState } from "react"

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

    const [dropIslandHeight, setDropIslandHeight] = useState(0);
    const [dropCampHeight, setDropCampHeight] = useState(0);
    // const [dropArchiveHeight, setDropArchiveHeight] = useState(0);
    const [dropInfoHeight, setDropInfoHeight] = useState(0);

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
        }, {
            dropTitle: "Rosa Riendo",
            dropPath: "island/rosa-riendo",
            dropFunc: () => setMapState("list")
        }, {
            dropTitle: "Faro de Luz",
            dropPath: "island/faro-de-luz",
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
        tabPath: "/campaigns",
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
            {
                dropTitle: "Artefacts",
                dropPath: "/campaigns/artefacts"
            }, {
                dropTitle: "Characters",
                dropPath: "/campaigns/characters"
            }, {
                dropTitle: "Stories",
                dropPath: "/campaigns/stories"
            }]
    }

    // const dropArchive: DropDown = {
    //     tabTitle: "Archive",
    //     tabPath: "/art",
    //     dropContent: [{
    //         dropTitle: "Stories",
    //         dropPath: "stories"
    //     }, {
    //         dropTitle: "Art",
    //         dropPath: "/art"
    //     }]
    // }


    const dropInfo: DropDown = {
        tabTitle: "Extra Info",
        tabPath: "info",
        dropContent: [{
            dropTitle: "Credits",
            dropPath: "/info/credits"
        },
            //     {
            //     dropTitle: "About the Game",
            //     dropPath: "/"
            // }, {
            //     dropTitle: "Where To Find Us",
            //     dropPath: "/"
            // }, {
            //     dropTitle: "Rules",
            //     dropPath: "/"
            // }
        ]
    }

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
                screen.style.pointerEvents = "all";
                menu.style.display = "flex";
                arrow.style.transform = "translateY(-20px) rotate(0deg)";
                arrow.style.zIndex = "1";
            } else if (screen.style.height === "100%") {
                body.style.overflow = "visible";
                screen.style.height = "110px";
                screen.style.backgroundColor = "rgba(0, 72, 120, 0)";
                screen.style.boxShadow = "inset 0 0 0 0 black";
                screen.style.pointerEvents = "none";
                menu.style.display = "none";
                arrow.style.transform = "translateY(-25px) rotate(180deg)";
                arrow.style.zIndex = "0";
            }
        }
        if (func) { func() }
    }

    const createDropdown = (
        content: DropDown,
        func: (num: number) => void,
        funcRes: number
    ) => {
        return (
            <div className="dropBox flexCen"
                onMouseEnter={(e) => func(e.currentTarget.clientHeight - 5)}>
                <div className="tab flexCol">
                    <span
                        className="tabLink">
                        {content.tabTitle}
                    </span>
                    <div className="drop"
                        style={{ top: funcRes }}>
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
                        <Arrow />
                    </button>

                    <span id="menu" className="flexCol flexCen">

                        {createDropdown(dropIsland, setDropIslandHeight, dropIslandHeight)}
                        {createDropdown(dropCamp, setDropCampHeight, dropCampHeight)}
                        {createDropdown(dropInfo, setDropInfoHeight, dropInfoHeight)}
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