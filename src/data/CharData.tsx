import { Char } from "../types";

import remember1 from "../assets/chars/rememberme/Remember-Me-1.jpg"
import remember2 from "../assets/chars/rememberme/Remember-Me-2.jpg"
import remember3 from "../assets/chars/rememberme/Remember-Me-3.jpg"
import remember4 from "../assets/chars/rememberme/Remember-Me-4.jpg"
import remember5 from "../assets/chars/rememberme/Remember-Me-5.jpg"
import remember6 from "../assets/chars/rememberme/Remember-Me-6.jpg"
import remember3token from "../assets/chars/rememberme/Remember-Me-Token-3.png"
import remember4token from "../assets/chars/rememberme/Remember-Me-Token-4.png"
import remember5token from "../assets/chars/rememberme/Remember-Me-Token-5.png"
import remember6token from "../assets/chars/rememberme/Remember-Me-Token-6.png"
import repko from "../assets/chars/rememberme/Repko-Token.png"

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
            img: {
                imgDef: 2,
                tokenArr: [
                    remember3token,
                    remember4token,
                    remember5token,
                    remember6token
                ],
                imgArr: [
                    remember1,
                    remember2,
                    remember3,
                    remember4,
                    remember5,
                    remember6]
            },
            companions: [
                {
                    name: "Repko",
                    token: repko,
                    desc: "A traveling companiond and Remember Me's best friend."
                }
            ],
            possessions: [
                {
                    name: "Nobody's Respite",
                    desc: "",
                }
            ],
            desc: <>
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
            desc: <>{``}</>
        },
    ]

    return { chars };
}