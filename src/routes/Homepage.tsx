import HomeData from "../data/HomeData";
import "./Homepage.css";

export default function Homepage() {

    const { infoPointsArr } = HomeData();

    const createDataPoint = (contentArr: {
        title: string;
        text: JSX.Element;
        link: JSX.Element;
    }[]) => {
        return contentArr.map(
            (dataPoint) => {
                return (
                    <div
                        className="homeInfoBox"
                        key={`homeInfo${dataPoint.title}`}>
                        <h2>{dataPoint.title}</h2>
                        <p>{dataPoint.text}</p>
                        {dataPoint.link}
                    </div>
                )
            }
        )
    }

    return (
        <>
            <div className="homepage">

                {createDataPoint(infoPointsArr)}

            </div>
        </>
    )
}