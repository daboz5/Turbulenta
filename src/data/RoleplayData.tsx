import { CharNames, RPTags, Seasons } from "../types";

export default function RoleplayData() {

    type RPData = {
        title: string;
        season: Seasons;
        shortDesc: string;
        tags: RPTags[];
        chars: CharNames[];
        contents: {
            char: CharNames;
            content: JSX.Element;
        }[];
    }[]

    const roleplays: RPData = [{
        title: "Test Play",
        season: "Season 2",
        shortDesc: "Here to test how dialog would look like",
        tags: ["blood"],
        chars: ["Remember Me", "Minamoto"],
        contents: [{
            char: "Remember Me",
            content: <>{`Remember Me says something funny, something that would make old sailor blush.`}</>
        }, {
            char: "Minamoto",
            content: <>{`Minamoto laughs, it says something else.`}</>
        }, {
            char: "Remember Me",
            content: <>{`Remember Me doesn't get it`}</>
        }]
    }]

    return { roleplays }
}