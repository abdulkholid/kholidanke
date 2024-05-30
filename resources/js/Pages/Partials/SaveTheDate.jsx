import Button from "@/Components/Invitation/Button";
import TopRightFlower from "@/Components/Invitation/TopRightFlower";
import React from "react";
import { ArrowRightCircle, MapPin } from "react-feather";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { Element } from "react-scroll";
import SlideMenuToggle from "@/Components/Invitation/SlideMenuToggle";

const SaveTheDate = ({ invitation, options }) => {
    let resepsi_begin_at =
        invitation.the_dates.main_session["begin_at"]["hour_minute"];
    let resepsi_end_at =
        invitation.the_dates.main_session["end_at"]["hour_minute"];

    if (
        invitation.the_dates.main_session["begin_at"]["hour_minute"] ===
        invitation.the_dates.akad_session["hour_minute"]
    ) {
        resepsi_begin_at =
            invitation.the_dates.resepsi_session["begin_at"]["hour_minute"];
        resepsi_end_at =
            invitation.the_dates.resepsi_session["end_at"]["hour_minute"];
    }

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
        <Element name="save-the-date">
            <div className="overflow-hidden h-dvh relative flex items-center bg-texture-main bg-repeat">
                <SlideMenuToggle mode="solid_mode" offset={0} />
                {/* top flower */}
                <TopRightFlower />

                <div className="flex flex-col w-full">
                    <ScrollAnimation
                        animateIn="fadeInDown"
                        delay={1500}
                        offset={0}
                    >
                        <div className="px-5 relative">
                            <img
                                src="/common/images/save-the-date.png"
                                className="w-[200px] mx-auto my-5"
                                alt="Save the date"
                            />
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInDown" delay={3000}>
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

                    <div className="flex mt-7 width-full">
                        <ScrollAnimation animateIn="fadeIn" delay={4500}>
                            <div className="flex-none w-[155px] text-right pr-5 border-r border-primary overflow-hidden">
                                <ScrollAnimation
                                    animateIn="fadeInRight"
                                    delay={5000}
                                >
                                    <div className="mb-5">
                                        <div className="font-heading font-bold text-xl mb-1">
                                            Akad
                                        </div>
                                        <span className="text-sm py-1 px-3 inline-block rounded-2xl border border-primary">
                                            <b className="text-secondary ">
                                                {
                                                    invitation.the_dates
                                                        .akad_session[
                                                        "hour_minute"
                                                    ]
                                                }
                                            </b>
                                            <small className="ml-1">WIB</small>
                                        </span>
                                    </div>
                                </ScrollAnimation>

                                <ScrollAnimation
                                    animateIn="fadeInRight"
                                    delay={5500}
                                >
                                    <div className="mb-5">
                                        <div className="font-heading font-bold text-xl mb-1">
                                            Resepsi
                                        </div>
                                        <span className="text-sm py-1 px-3 inline-block rounded-2xl border border-primary">
                                            <b className="text-secondary ">
                                                {resepsi_begin_at}-
                                                {resepsi_end_at}
                                            </b>
                                            <small className="ml-1">WIB</small>
                                        </span>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </ScrollAnimation>

                        <div className="flex-auto text-left pl-5 overflow-hidden">
                            <ScrollAnimation
                                animateIn="fadeInLeft"
                                delay={3500}
                            >
                                <div className="font-heading font-bold text-xl mb-1">
                                    {options.venue.name}
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation
                                animateIn="fadeInLeft"
                                delay={4000}
                            >
                                <div className="text-secondary text-sm mb-5">
                                    {options.venue.address}
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="bounceIn" delay={6500}>
                                <a
                                    href={options.venue.maps}
                                    target="_blank"
                                    className="pb-2 pt-2 px-5 text-primary inline-flex items-center rounded-3xl border border-primary"
                                >
                                    <MapPin size={14} />
                                    <b className="ml-2">Lihat Peta</b>
                                </a>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <ScrollAnimation
                        animateIn="fadeInLeft"
                        duration={2}
                        className="-mt-0 h-[180px] w-full bg-contain bg-flower-left bg-no-repeat bg-left-top"
                    ></ScrollAnimation>

                    <div className="-mt-32">
                        <Button
                            href={route("invitation.thank-you", {
                                uuid: invitation.uuid,
                            })}
                            delay={7000}
                            offset={0}
                            to="thank-you"
                            toBottom={true}
                        >
                            <b>Selanjutnya</b>
                            <ArrowRightCircle size={15} />
                        </Button>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default SaveTheDate;
