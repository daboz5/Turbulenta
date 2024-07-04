import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import BannerData from "../data/BannerData"
import landingImg from "../assets/banners/landing.png";
import "./Banner.css"

export default function Banner() {

    const defBanner = {
        path: "/",
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
            case "/artefacts":
                setBanner(banners.artefactsPage);
                break;
            case "/roleplay":
                setBanner(banners.roleplayPage);
                break;
            case "/characters":
                setBanner(banners.characterPage);
                break;
            default:
                setBanner(defBanner)
        }
    }, []);

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