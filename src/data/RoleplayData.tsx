import { CharNames, RPTags } from "../types";

export default function RoleplayData() {

    type RPData = {
        title: string;
        shortDesc: string;
        tags: RPTags[];
        chars: CharNames[];
        contents: {
            char: string;
            content: JSX.Element;
        }[];
    }[]

    const roleplays: RPData = [{
        title: "",
        shortDesc: "",
        tags: [],
        chars: [],
        contents: [{
            char: "",
            content: <>{``}</>
        }, {
            char: "",
            content: <>{``}</>
        }]
    }]

    return { roleplays }
}