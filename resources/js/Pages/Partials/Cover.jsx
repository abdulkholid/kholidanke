import Button from "@/Components/Invitation/Button";
import TopRightFlower from "@/Components/Invitation/TopRightFlower";
import React from "react";
import { BookOpen } from "react-feather";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { Element } from "react-scroll";
import SlideMenuToggle from "@/Components/Invitation/SlideMenuToggle";

const Cover = ({ invitation, options }) => {
    const the_date = new Date(invitation.the_dates.akad_session.day_month_year);
    const month = [
        "Januari",
        "Pebruari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    return (
        <Element name="cover">
            <div className="overflow-hidden h-dvh relative flex justify-center items-center bg-texture-main bg-repeat">
                <SlideMenuToggle mode="light_mode" offset={0} />

                {/* top flower */}
                <TopRightFlower offset={0} />

                <div className="flex flex-col w-full">
                    <ScrollAnimation
                        animateIn="fadeIn"
                        duration={3}
                        delay={1500}
                        offset={0}
                    >
                        <img
                            src={`/uploads/${options.logo["light"]}`}
                            className="w-[180px] h-auto mx-auto -mb-3 relative mt-16"
                        />
                    </ScrollAnimation>

                    <ScrollAnimation
                        animateIn="fadeInUp"
                        delay={2500}
                        offset={0}
                    >
                        <div className="flex text-lg justify-center text-primary -mb-3">
                            <div className="pt-3 font-bold">
                                {month[the_date.getMonth()]}
                            </div>
                            <div className="text-secondary px-3 mx-3 date-has-border">
                                <b className="text-4xl font-heading">
                                    {the_date.getDate()}
                                </b>
                            </div>
                            <div className="pt-3 font-bold">
                                {the_date.getFullYear()}
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInLeft" duration={2}>
                        <img
                            src="/common/images/flower-left.png"
                            alt="left flower"
                            className="w-auto h-40"
                        />
                    </ScrollAnimation>

                    <div className="flex flex-col text-xs justify-end text-center">
                        <ScrollAnimation
                            animateIn="fadeInDown"
                            delay={3000}
                            offset={0}
                        >
                            <b>Kepada Yth,</b>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn="fadeInUp"
                            delay={3000}
                            offset={0}
                        >
                            <h2 className="text-heading text-primary text-xl font-bold mb-2">
                                {invitation.name}
                            </h2>
                        </ScrollAnimation>
                    </div>

                    <Button
                        offset={0}
                        delay={3500}
                        to="bridegroom"
                        isPlaySong={true}
                    >
                        <b>Buka Undangan</b>
                        <BookOpen size={15} />
                    </Button>
                </div>
            </div>
        </Element>
    );
};

export default Cover;
