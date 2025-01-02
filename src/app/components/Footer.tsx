import Image from "next/image";
// import NavBarLinks from "../navBar/NavBarLinks"
// import { social } from "./socail"
import SocialIcons from "./SocialIcons";
import Link from "next/link";

const Footer = () => {
    const socialMediaData = {
        nameENG: "MHD",
        name: "Store",
        about: "",
        imageHref: "",
        phone: "+963967586966",
        email: "info@store.sy",
        facebook: "https://www.facebook.com/",
        linkedIn: false,
        telegram: "https://t.me/HasnTD",
        github: false,
        whatsapp: "963967586966",
    };

    return (
        <footer className="footer lg:p-5 p-4 bg-blue-400 text-neutral-content mt-3 ">
            <div>
                <Link href={"/"} className="text-3xl font-bold">
                    Store
                </Link>
                <p className="font-bold">
                    All rights are preserved <span> ©</span> 1/1/2025
                </p>
                <div className="flex gap-3">
                    <p className="">
                        <a
                            className="text-black "
                            href={`https://wa.me/963967586966`}
                            target="_blank">Eng. MHD Hasan Tadmori
                        </a>
                    </p>
                </div>
            </div>

            {/* //?-----social start------- */}
            <div>
                <span className="footer-title">Social Links</span>
                <div className="flex  gap-4">
                    <SocialIcons
                        facebook={socialMediaData.facebook}
                        whatsapp={socialMediaData.whatsapp}
                        phone={socialMediaData.phone}
                        telegram={socialMediaData.telegram}
                    ></SocialIcons>
                </div>
            </div>
            {/* //?-----social ends------- */}
        </footer>
    );
};

export default Footer;
