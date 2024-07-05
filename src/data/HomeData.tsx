import { Link } from "react-router-dom";

export default function HomeData() {

    const infoPointsArr = [
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

    return { infoPointsArr };
}