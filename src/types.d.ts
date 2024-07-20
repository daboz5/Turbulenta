type POICont = {
    name: string,
    type: "poi" | "shield",
    img?: string,
    alt: string,
    desc: JSX.Element,
    link?: string
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
    artefacts: Artefact[]
}

type Char = {
    name: (CharNamesS1 | CharNamesS2 | "");
    class: { title: string, lvl: number }[];
    background: string;
    img?: {
        imgDef: number,
        tokenArr: string[],
        imgArr: string[]
    };
    companions?: {
        name: string,
        token: string,
        desc: string
    }[];
    possessions?: {
        name: string,
        desc: string
    }[];
    desc: JSX.Element;
}

type RPGroup = {
    id: string;
    roleplays: RPGPlay[];
}

type RPPlay = {
    title: string;
    shortDesc: string;
    tags: RPTags[];
    chars: (CharNamesS1 | CharNamesS2 | "")[];
    contents: {
        char: string;
        content: JSX.Element;
    }[];
}

type RPTags = "sex" | "blood";

type CharNamesS1 = "Remember Me" | "Minamoto" | "Morwyn";

type CharNamesS2 = "Remember Me" | "Minamoto" | "Morwyn" | "Ceres" | "Thian" | "Caraxes" | "Jožef" | "Anderson" | "Alvida" | "Bob" | "Parateretes" | "Catalan" | "Janez" | "Davric" | "Rua" | "Coco";

type Seasons = "Season 1" | "Season 2";

export {
    Artefact,
    Artefacts,
    CharNamesS1,
    CharNamesS2,
    POI,
    POICont,
    RPTags,
    Seasons,
    Char,
    RPGroup,
    RPPlay,
}