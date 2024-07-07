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

type RPTags = "sex" | "blood";

type CharNamesS1 = "Remember Me" | "Minamoto" | "Morwyn";

type CharNamesS2 = "Remember Me" | "Minamoto" | "Morwyn" | "Ceres" | "Thian" | "Caraxes" | "Jožef" | "Anderson" | "Alvida" | "Bob" | "Parateretes" | "Catalan" | "Janez" | "Davric" | "Rua" | "Coco";

type Seasons = "Season 1" | "Season 2";

export {
    Artefact,
    Artefacts,
    RPTags,
    CharNamesS1,
    CharNamesS2,
    Seasons
}