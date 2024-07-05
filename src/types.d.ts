type Artefacts = {
    title: string;
    artefacts: {
        id: string;
        name: string;
        story: string;
        shortDesc: string;
        src: string;
    }[]
}

type RPTags = "sex" | "blood";

type CharNamesS1 = "Remember Me" | "Minamoto" | "Morwyn";

type CharNamesS2 = "Remember Me" | "Minamoto" | "Morwyn";

type Seasons = "Season 1" | "Season 2";

export {
    Artefacts,
    RPTags,
    CharNamesS1,
    CharNamesS2,
    Seasons
}