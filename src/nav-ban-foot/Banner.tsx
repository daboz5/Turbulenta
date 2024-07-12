import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import BannerData from "../data/BannerData"
import landingImg from "../assets/banners/landing.png";
import "./Banner.css"

export default function Banner() {

    const defBanner = {
        title: "Welcome to Turbulenta!",
        text: "Something went wrong, maybe try another page.",
        img: landingImg,
    }

    const { pathname } = useLocation();
    const { banners } = BannerData();
    const [banner, setBanner] = useState(defBanner);

    useEffect(() => {
        switch (pathname) {
            case "/":
                setBanner(banners.landingPage);
                break;
            case "/island":
                setBanner(banners.islandPage);
                break;
            case "/campaigns":
                setBanner(banners.campaignsPage);
                break;
            case "/campaigns/artefacts":
                setBanner(banners.artefactsPage);
                break;
            case "/characters":
                setBanner(banners.characterPage);
                break;
            case "/roleplays":
                setBanner(banners.roleplayPage);
                break;
            default:
                setBanner(defBanner)
        }
    }, [pathname]);

    return (<>
        <div id='bannerBox'>
            <h1>
                {banner.title}
            </h1>
            <p
                id='bannerText'>
                {banner.text}
            </p>
            <img
                id='bannerImg'
                src={banner.img}
                alt="Banner Image"
            />
        </div>
    </>)
}