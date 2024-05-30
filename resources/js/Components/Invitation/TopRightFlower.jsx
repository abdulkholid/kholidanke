import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const TopRightFlower = ({ delay, offset = 150 }) => {
    return (
        <ScrollAnimation
            className="absolute top-0 right-0 z-5"
            animateIn="slideInRight"
            delay={delay}
            duration={2}
            offset={offset}
        >
            <img src="/common/images/flower-right.png" className="w-[150px]" />
        </ScrollAnimation>
    );
};

export default TopRightFlower;
