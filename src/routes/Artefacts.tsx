import { useState } from "react";
import bannerImg from "../assets/kat.png";

import img1 from "../assets/items/RingOfSafetyDistance.png"
import img2 from "../assets/items/RoyalRoseLongbow.png"
import img3 from "../assets/items/VinegraspShield.png"
import img4 from "../assets/items/RapidsGlaive.png"
import img5 from "../assets/items/ConchShellOfTheMaokah.png"
import img6 from "../assets/items/Bailar.png"
import img7 from "../assets/items/EchoBracelet.png"
import img8 from "../assets/items/LightningStone.png"
import img9 from "../assets/items/HelmOfShidin.png"
import img10 from "../assets/items/RodOfKadram.png"
import img11 from "../assets/items/TormentDagger.png"
import img12 from "../assets/items/Hugfish.png"
import img13 from "../assets/items/DreadlordsCleaver.png"
import img14 from "../assets/items/VeilOfMidnight.png"
import img15 from "../assets/items/DemodandTriangleOfAncestralMemory.png"
import img16 from "../assets/items/CrystalOfBedlam.png"
import img17 from "../assets/items/ShieldOfSlaad.png"
import img18 from "../assets/items/ClokworkCrossbow.png"

import "./Artefacts.css"

export default function Artefacts() {

    const [pic, setPic] = useState(0);

    const openPic = (num: number) => {
        const picBoxEl = document.getElementById("popup");
        const picEl = document.getElementById("popItem" + num);
        if (picBoxEl && picEl) {
            picBoxEl.style.display = "flex";
            picEl.style.display = "block";
        }
        setPic(num);
    }

    const closePic = () => {
        const picBoxEl = document.getElementById("popup");
        const picEl = document.getElementById("popItem" + pic);
        if (picBoxEl && picEl) {
            picBoxEl.style.display = "none";
            picEl.style.display = "none";
        }
    }

    const seasonsArr = [
        {
            title: "Season 1",
            artefacts: [
                { id: 1, src: img1 },
                { id: 2, src: img2 },
                { id: 3, src: img3 },
                { id: 4, src: img4 },
                { id: 5, src: img5 },
                { id: 6, src: img6 },
                { id: 7, src: img7 },
                { id: 8, src: img8 },
                { id: 9, src: img9 },
                { id: 10, src: img10 }
            ]
        }, {
            title: "Season 2",
            artefacts: [
                { id: 11, src: img11 },
                { id: 12, src: img12 },
                { id: 13, src: img13 },
                { id: 14, src: img14 },
                { id: 15, src: img15 },
                { id: 16, src: img16 },
                { id: 17, src: img17 },
                { id: 18, src: img18 },
            ]
        }];

    const createArtefactGrids = (content: {
        title: string;
        artefacts: {
            id: number;
            src: string;
        }[];
    }[]
    ) => {
        return content.map((season, index) => {
            return (
                <span key={`season${index}Items`}>
                    <h2>{season.title}</h2>
                    <span className="itemsBox">
                        {season.artefacts.map((artefact) => {
                            return (
                                <button
                                    id={`item${artefact.id}`}
                                    className="item"
                                    onClick={() => openPic(artefact.id)}
                                    key={`item${artefact.id}`}>
                                    <img id={`image${artefact.id}`} src={artefact.src} alt="Artefact" />
                                </button>
                            )
                        })}
                    </span>
                </span>
            )
        })
    }

    const enlargedPics = () => {
        let counter = 0;
        return (
            <span id="popup" onClick={() => closePic()}>
                <span id="closeBtnBox">
                    <button id="closeBtn">X</button>
                </span>
                {seasonsArr.map((season, sIndex) => {
                    return season.artefacts.map((artefact, aIndex) => {
                        counter++
                        return (
                            <img
                                id={`popItem${counter}`}
                                className="popupItem"
                                src={artefact.src}
                                alt="Full Artefact Image"
                                key={`artefactS${sIndex}A${aIndex}`} />
                        )
                    })
                })
                }
            </span>
        )
    }

    return (
        <>

            <span className='bannerBox'>
                <h1>Artefacts</h1>
                <p className='bannerText'>Items in the Hall of Artifacts.</p>
                <img className='bannerImg' src={bannerImg} alt="Banner Image" />
            </span>

            {createArtefactGrids(seasonsArr)}

            {enlargedPics()}

        </>
    )
}