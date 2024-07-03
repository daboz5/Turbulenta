import { type CharData } from "../types";

export default function CharData() {

    const chars: CharData = [
        {
            tag: "Nobody",
            class: [{
                class: "Unknown",
                lvl: 1
            }, {
                class: "Misterious",
                lvl: 5
            }],
            description: <>
                {`Nobody is unknown and misterious`}<br />
                {`It is unknown how misterious it is.`}
            </>,
        },
        {
            tag: "",
            class: [{
                class: "",
                lvl: 0
            }],
            description: <>{``}</>
        },
    ]

    return { chars };
}