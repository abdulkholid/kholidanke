import React, { useContext } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { animateScroll, scroller } from "react-scroll";
import { DataContext } from "@/Contexts/InvitationContext";

const Button = ({
    delay,
    offset = 150,
    to,
    isPlaySong = true,
    toBottom = false,
    children,
}) => {
    const { song, playSong, setPlaySong } = useContext(DataContext);
    const className =
        "mt-5 border border-primary flex w-[300px] max-w-[90%] mx-auto justify-center items-center bg-primary text-white py-3 rounded-3xl gap-2";

    const handleClick = (element) => {
        if (isPlaySong && playSong === false) {
            setPlaySong(true);
            song.play();
        }

        if (toBottom) {
            animateScroll.scrollToBottom();
        } else {
            scroller.scrollTo(element, {
                smooth: true,
            });
        }
    };

    return (
        <ScrollAnimation animateIn="fadeInUp" delay={delay} offset={offset}>
            <div className="pt-5">
                <button className={className} onClick={() => handleClick(to)}>
                    {children}
                </button>
            </div>
        </ScrollAnimation>
    );
};

export default Button;
