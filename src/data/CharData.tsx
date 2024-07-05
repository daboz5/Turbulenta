import { CharNames } from "../types";

export default function CharData() {

    type CharData = {
        name: CharNames;
        class: {
            class: string;
            lvl: number;
        }[];
        description: JSX.Element;
    }[]

    const chars: CharData = [
        {
            name: "",
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
            name: "",
            class: [{
                class: "",
                lvl: 0
            }],
            description: <>{``}</>
        },
    ]

    return { chars };
}