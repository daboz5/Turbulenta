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
                <div className="homeInfoBox">
                    <h2>What is Turbulenta</h2>
                    <p>
                        Turbulenta is a western marches inspired D&D online campaign where almost anybody can join in.
                        The game is set on an island of Turbulenta where a new colony from the Iron Rose Kingdom,
                        or Rosa de Hierro, is established - the town Rosa Riendo being the main settlement.
                    </p>
                    <a href="./router/info.html#about">More here</a>
                </div>
                <div className="homeInfoBox">
                    <h2>Where to find us?</h2>
                    <p>
                        The D&D game itself is happening on the discord server DigiMC, which is the offical discord server
                        of Mladi zmaji.
                        The game is running Amulet D20 which partnered with Mladi zmaji to bring us Turbulenta.
                    </p>
                    <a href="./router/info.html#desc">More here</a>
                </div>
                <div className="homeInfoBox">
                    <h2>Rules</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam illum facilis perferendis dolore
                        reprehenderit, eveniet quasi est delectus sapiente amet. Iste ullam et possimus. Sapiente facilis
                        placeat dolor magni?
                    </p>
                </div>

                {createDataPoint(infoPointsArr)}

            </div>
        </>
    )
}