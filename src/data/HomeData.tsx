import { Link } from "react-router-dom";

export default function HomeData() {

    type HomeInfo = {
        title: string;
        text: JSX.Element;
        link: JSX.Element;
    }[]

    const infoPointsArr: HomeInfo = [
        {
            title: "Test title",
            text: <>
                {`Nobody is unknown and misterious`}<br />
                {`Nobody is unknown and misterious`}
            </>,
            link: <Link
                to="artefacts">
                {`It is unknown how misterious it is.`}
            </Link>
        },
    ]

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