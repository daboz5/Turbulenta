import { Link } from "react-router-dom";

export default function HomeData() {

    type HomeInfo = {
        title: string;
        text: JSX.Element;
        link: JSX.Element;
    }[]

    const infoPointsArr: HomeInfo = [{
        title: "What is Turbulenta",
        text: <>
            {`Turbulenta is a western marches inspired D&D online campaign where almost anybody can join in.
                    The game is set on an island of Turbulenta where a new colony from the Iron Rose Kingdom,
                    or Rosa de Hierro, is established - the town Rosa Riendo being the main settlement.`}<br />
        </>,
        link: <Link
            to="artefacts">
            {`It is unknown how misterious it is.`}
        </Link>
    }, {
        title: "Rules",
        text: <>
            {`Beyond the rules of common decency and listening to our DMs and community leaders, here are some useful rules to get you into the game:`}<br />
        </>,
        link: <Link
            to="artefacts">
            {`Know thy rules`}
        </Link>
    }, {
        title: "Where to find us",
        text: <>
            {`The D&D game itself is happening on the discord server DigiMC, which is the offical discord server
                     of Mladi zmaji.`}<br />
            {`The game is running Amulet D20 which partnered with Mladi zmaji to bring us Turbulenta.`}<br />
        </>,
        link: <Link
            to="artefacts">
            {`Come and join us.`}
        </Link>
    }]

    {/*
    {
        title: "",
        text: <>
            {``}<br />
            {``}
        </>,
        link: <Link
            to="">
            {``}
        </Link>
    },
*/}

    return { infoPointsArr };
}