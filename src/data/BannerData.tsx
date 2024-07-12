import landingImg from "../assets/banners/landing.png"
import arteactsImg from "../assets/banners/artefacts.png";
import roleplayImg from "../assets//banners/roleplay.png";

export default function BannerData() {

    const banners = {
        landingPage: {
            title: "Welcome to Turbulenta!",
            text: "Turbulenta is a (free) online D&D campaign, that was started in 2023 by Mladi zmaji, in collaboration with Amulet D20. It's played on the official Mladi Zmaji discord server DigiMC.",
            img: landingImg,
        },
        islandPage: {
            title: "Island of Turbulenta",
            text: "Here you can find interesting locations on Turbulenta and from Turbulenta navigatable places.",
            img: roleplayImg,
        },
        campaignsPage: {
            title: "Campaigns",
            text: "Quick look into past campaigns.",
            img: arteactsImg,
        },
        artefactsPage: {
            title: "Artefacts",
            text: "Items in the Hall of Artifacts.",
            img: arteactsImg,
        },
        roleplayPage: {
            title: "Stories",
            text: "Here you can find some of the Roleplays that our wonderful player have written and ported to this website.",
            img: roleplayImg,
        },
        characterPage: {
            title: "Characters",
            text: "More info about characters.",
            img: roleplayImg,
        },
    }

    return { banners }
}