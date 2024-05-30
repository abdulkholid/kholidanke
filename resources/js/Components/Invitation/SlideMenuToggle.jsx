import { DataContext } from "@/Contexts/InvitationContext";
import React, { useContext } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Compass } from "react-feather";

const SlideMenuToggle = ({ mode = "dark_mode", offset = 150 }) => {
    const { setMenuOpenStatus } = useContext(DataContext);

    const toggle_class = {
        dark_mode:
            "w-10 h-10 bg-[rgba(255,255,255,.05)] text-white flex items-center justify-center rounded-full",
        light_mode:
            "w-10 h-10 bg-[rgba(0,0,0,.05)] text-[#D5B581] flex items-center justify-center rounded-full",
        solid_mode:
            "w-10 h-10 bg-[#eee] text-[#D5B581] flex items-center justify-center rounded-full",
    };
    return (
        <div className="absolute left-3 top-3 z-50 font-heading text-white">
            <ScrollAnimation offset={offset} animateIn="fadeInLeft">
                <button
                    className={toggle_class[mode]}
                    onClick={(e) => setMenuOpenStatus(true)}
                >
                    <Compass size={20} />
                </button>
            </ScrollAnimation>
        </div>
    );
};

export default SlideMenuToggle;
