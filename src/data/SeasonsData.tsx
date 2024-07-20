import { CharNamesS1, CharNamesS2 } from "../types";

export default function SeasonsData() {

    type season = {
        title: string;
        dms: string[];
        players: (CharNamesS1 | CharNamesS2)[];
        shortDesc: JSX.Element;
    };

    const seasons: season[] = [{
        title: "Season 1",
        dms: [],
        players: [],
        shortDesc: <>{``}</>
    }, {
        title: "Season 2",
        dms: [],
        players: [],
        shortDesc: <>{``}</>
    },]

    return { seasons }
}