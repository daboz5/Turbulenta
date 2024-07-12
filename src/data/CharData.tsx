import { Char } from "../types";

export default function CharData() {

    const chars: Char[] = [
        {
            name: "Remember Me",
            class: [{
                title: "Unknown",
                lvl: 1
            }, {
                title: "Misterious",
                lvl: 5
            }],
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
            descript: <>{``}</>
        },
    ]

    return { chars };
}