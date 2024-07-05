import { CharNamesS1, CharNamesS2 } from "../types";

export default function CharData() {

    type CharData = {
        name: CharNamesS1 | CharNamesS2;
        class: {
            class: string;
            lvl: number;
        }[];
        description: JSX.Element;
        img?: string;
    }[]

    const chars: CharData = [
        {
            name: "Morwyn",
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
            img: ""
        },
        {
            name: "Minamoto",
            class: [{
                class: "",
                lvl: 0
            }],
            description: <>{``}</>
        },
    ]

    return { chars };
}