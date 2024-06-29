import bannerImg from "../assets/shipwreck.png";

export default function Homepage() {
    return (
        <>
            <span className='bannerBox'>
                <h1>Welcome to Turbulenta!</h1>
                <p className='bannerText'>Turbulenta is a (free) online D&D campaign, that was started in 2023 by Mladi zmaji, in collaboration with Amulet D20. It's played on the official Mladi Zmaji discord server DigiMC.</p>
                <img className='bannerImg' src={bannerImg} alt="Banner Image" />
            </span>

            <div className="qna">
                <div className="questions">
                    <h2>What is Turbulenta</h2>
                    <p>
                        Turbulenta is a western marches inspired D&D online campaign where almost anybody can join in.
                        The game is set on an island of Turbulenta where a new colony from the Iron Rose Kingdom,
                        or Rosa de Hierro, is established - the town Rosa Riendo being the main settlement.
                        <br />
                        <a href="./router/info.html#about">More here</a>
                    </p>
                </div>
                <div className="questions">
                    <h2>Where to find us?</h2>
                    <p>
                        The D&D game itself is happening on the discord server DigiMC, which is the offical discord server
                        of Mladi zmaji.
                        The game is running Amulet D20 which partnered with Mladi zmaji to bring us Turbulenta.
                        <br />
                        <a href="./router/info.html#desc">More here</a>
                    </p>
                </div>
                <div className="questions">
                    <h2>Rules</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam illum facilis perferendis dolore
                        reprehenderit, eveniet quasi est delectus sapiente amet. Iste ullam et possimus. Sapiente facilis
                        placeat dolor magni?</p>
                </div>
            </div>
        </>
    )
}