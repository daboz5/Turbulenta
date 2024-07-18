import { Char } from "../types";

import remember1 from "../assets/chars/Remember-Me-1.jpg"
import remember2 from "../assets/chars/Remember-Me-2.jpg"
import remember3 from "../assets/chars/Remember-Me-3.jpg"
import remember4 from "../assets/chars/Remember-Me-4.jpg"
import remember5 from "../assets/chars/Remember-Me-5.jpg"
import remember6 from "../assets/chars/Remember-Me-6.jpg"


export default function CharData() {

    const chars: Char[] = [
        {
            name: "Remember Me",
            class: [{
                title: "Druid",
                lvl: 5
            }, {
                title: "Bard",
                lvl: 2
            }],
            background: "Acolyte",
            img: [
                remember1,
                remember2,
                remember3,
                remember4,
                remember5,
                remember6
            ],
            defImg: 2,
            descript: <>
                {`Nobody is unknown and misterious`}<br />
                {`It is unknown how misterious it is.`}
            </>,
        },
        {
            name: "Minamoto",
            class: [{
                title: "",
                lvl: 0
            }],
            background: "",
            descript: <>{``}</>
        },
    ]

    return { chars };
}