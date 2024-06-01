import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { Element } from "react-scroll";
import SlideMenuToggle from "@/Components/Invitation/SlideMenuToggle";

const ThankYou = ({ invitation, options }) => {
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
        <Element name="thank-you">
            <div className="overflow-hidden h-dvh relative flex items-center bg-[#1E1E1E] text-white">
                <SlideMenuToggle offset={0} />
                <div className="flex flex-col w-full">
                    <div className="mb-10">
                        <ScrollAnimation
                            animateIn="fadeInDown"
                            offset={0}
                            delay={1500}
                            duration={2}
                        >
                            <div className="mb-3 text-center font-heading text-3xl text-primary">
                                <b>Terima Kasih</b>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation
                            animateIn="fadeInUp"
                            delay={1500}
                            duration={2}
                            offset={0}
                        >
                            <div className="text-center">
                                atas restu dan doanya. Sampai bertemu
                                <br />
                                di hari istimewa kami!
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="mb-10">
                        <ScrollAnimation
                            animateIn="fadeIn"
                            duration={3}
                            delay={3000}
                            offset={0}
                        >
                            <img
                                src={`/uploads/${options.logo["dark"]}`}
                                className="w-[180px] h-auto mx-auto relative"
                            />
                        </ScrollAnimation>

                        <div className="flex text-lg justify-center mb-5">
                            <div className="pt-[13px] font-bold">
                                <ScrollAnimation
                                    animateIn="fadeInLeft"
                                    delay={4000}
                                    offset={0}
                                >
                                    {month[the_date.getMonth()]}
                                </ScrollAnimation>
                            </div>
                            <div className="px-3 mx-0">
                                <ScrollAnimation
                                    animateIn="bounceIn"
                                    delay={3500}
                                    offset={0}
                                >
                                    <b className="text-4xl text-primary font-heading">
                                        {the_date.getDate()}
                                    </b>
                                </ScrollAnimation>
                            </div>
                            <div className="pt-[13px] font-bold">
                                <ScrollAnimation
                                    animateIn="fadeInRight"
                                    delay={4500}
                                    offset={0}
                                >
                                    {the_date.getFullYear()}
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>

                    <div className="text-center h-[auto] text-sm px-5 text-gray-400">
                        <ScrollAnimation
                            animateIn="fadeInDown"
                            duration={2}
                            offset={0}
                        >
                            <div className="text-lg font-bold">
                                Kami yang berbahagia
                            </div>
                            keluarga Bpk. {options.bride["father"]} & Ibu{" "}
                            {options.bride["mother"]}
                            <br />
                            dan Bpk. {options.groom["father"]} & Ibu{" "}
                            {options.groom["mother"]}
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default ThankYou;
