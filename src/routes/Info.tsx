import bannerImg from "../assets/banners/artefacts.png";

import "./Info.css"

export default function Info() {
    return (
        <>
            <span className='bannerBox'>
                <h1>Welcome to Turbulenta!</h1>
                <p className='bannerText'>Turbulenta is a (free) online D&D campaign, that was started in 2023 by Mladi zmaji, in collaboration with Amulet D20. It's played on the official Mladi Zmaji discord server DigiMC.</p>
                <img className='bannerImg' src={bannerImg} alt="Banner Image" />
            </span>

            <h2>Information</h2>
            <div className="grid1">
                <div id="aboutTurbulenta">
                    <h3>About Turbulenta</h3>
                    <hr />
                    <p>Turbulenta is a western marches inspired D&D online campaign where almost anybody can join in.
                        The game is set on an island of Turbulenta where a new colony from the Iron Rose Kingdom, or Rosa de
                        Hierro,
                        is established - the town Rosa Riendo being the main settlement.
                        After the turbulent happenings of the first season, where heroic newcomers got to battle traitors
                        and gods,
                        explore the treacherous and deadly jungles and treat with the natives, a lull of 30 years followed.
                        New blood came to the island and rebuilt what was lost in the destruction only for misfortune to
                        strike again.
                        With multiplanar thieves jumping in, stealing the priceless artifacts from the heroes and killing
                        many on the way
                        there was again time for the heroes to step up and donn their armor. But what happens when the
                        heroes don't return from their mission?
                        Second season picks up with the death of Mayor and Commander Manuel and the disappearance of heroes
                        of the past as they went to avenge him and retrieve the artifacts.
                        Newcomers, some born on the island, some freshly arrived, are there to pick up fallen mantles of
                        their mentors and leaders.
                        And as their first delve into the mysterious caverns under the island leads them to planar rifts, a
                        large planar lake and a strange being known as the Fisherman, nobody know where they'll land next.
                    </p>
                </div>
                <img src="../images/shipvertical.png" alt="" />

            </div>

            <div className="grid2" id="grid">
                <img src="../images/find-full.png" alt="" />
                <div id="desc">
                    <h3>The Game</h3>
                    <hr />
                    <p>The D&D game itself is happening on the discord server DigiMC, which is the offical discord server of
                        Mladi zmaji.
                        The game is running Amulet D20 which partnered with Mladi zmaji to bring us Turbulenta.</p>
                </div>
                <div id="mladizmaji">
                    <h3>Mladi Zmaji</h3>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem fuga reprehenderit porro
                        consectetur amet nisi quis ipsum, vero aut laboriosam commodi ex minus voluptas incidunt nulla eius
                        repellendus maiores.</p>
                </div>
                <div id="digimc">
                    <h3>DigiMC</h3>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem fuga reprehenderit porro
                        consectetur amet nisi quis ipsum, vero aut laboriosam commodi ex minus voluptas incidunt nulla eius
                        repellendus maiores.</p>
                </div>
                <div id="amulet">
                    <h3>Amulet D20</h3>
                    <hr />
                    <p>Amulet D20 is a forefront creative fantasy community in Slovenia. They are great lovers of D&D and
                        other TTRPGs, and also hero creativity and artistic works of their members and visitors. Their goal
                        is to create a safe and friendly environment for all fantasy lovers and creators</p>
                </div>
            </div>
        </>
    )
}