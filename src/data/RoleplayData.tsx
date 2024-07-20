import { RPGroup } from "../types"

export default function RoleplayData() {

    const rpS1: RPGroup = {
        id: "Season 1",
        roleplays: [{
            title: "Test Play",
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
    }

    const rpS2: RPGroup = {
        id: "Season 2",
        roleplays: [{
            title: "Test Play",
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
    }

    return { rpS1, rpS2 }
}