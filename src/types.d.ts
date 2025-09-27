type POICont = {
    name: string;
    type: "poi" | "shield";
    img?: string;
    alt: string;
    desc: JSX.Element;
    link?: string;
}

type POI = {
    x: number;
    y: number;
    content: POICont;
}

type Artefact = {
    id: string;
    name: string;
    story: string;
    shortDesc: string;
    src: string;
}

type Artefacts = {
    title: string;
    artefacts: Artefact[];
}

type Char = {
    name: (CharNamesS1 | CharNamesS2 | "");
    gender: {
        pronoun: string,
        defToken: string
    };
    class: { title: string, lvl: number }[];
    background: string;
    img?: {
        imgDef: number;
        tokenArr: string[];
        imgArr: string[];
    };
    desc: string | JSX.Element;
    companions?: {
        name: string | JSX.Element;
        token: string;
        desc: string | JSX.Element;
    }[];
    possessions?: {
        name: string | JSX.Element;
        desc: string | JSX.Element;
    }[];
    backstory?: string | JSX.Element;
}

type RPGroup = {
    id: string;
    roleplays: RPGPlay[];
}

type RPPlay = {
    title: string;
    date: number;
    shortDesc: string;
    chars: (CharNamesS1 | CharNamesS2 | NPCNamesS1 | NPCNamesS2 | "")[];
    contents: {
        char: { name: CharNamesS1 | CharNamesS2 | NPCNamesS1 | NPCNamesS2 | "", token?: number };
        content: JSX.Element;
    }[];
}

type CharNamesS1 = "Minamoto";
type CharNamesS2 = "Remember Me" | "Minamoto" | "Morwyn" | "Ceres" | "Thian" | "Caraxes" | "Jožef" | "Anderson" | "Alvida" | "Bob" | "Parateretes" | "Catalan" | "Janez" | "Davric" | "Rua" | "Coco";
type NPCNamesS1 = "";
type NPCNamesS2 = "";

type Seasons = "Season 1" | "Season 2";

export {
    Artefact,
    Artefacts,
    CharNamesS1,
    CharNamesS2,
    NPCNamesS1,
    NPCNamesS2,
    POI,
    POICont,
    RPTags,
    Seasons,
    Char,
    RPGroup,
    RPPlay,
}