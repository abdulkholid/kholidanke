import BridePhoto from "@/Components/Invitation/BridePhoto";
import Button from "@/Components/Invitation/Button";
import TopRightFlower from "@/Components/Invitation/TopRightFlower";
import React from "react";
import { ArrowRightCircle } from "react-feather";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { Element } from "react-scroll";
import SlideMenuToggle from "@/Components/Invitation/SlideMenuToggle";

const Bridegroom = ({ invitation, options }) => {
    return (
        <Element name="bridegroom">
            <div className="overflow-hidden h-dvh relative flex items-center bg-texture-main bg-repeat">
                <SlideMenuToggle mode="solid_mode" offset={0} />
                <TopRightFlower />

                <div className="flex flex-col w-full">
                    <div className="px-5">
                        <ScrollAnimation
                            animateIn="fadeIn"
                            delay={1500}
                            duration={2}
                        >
                            <div
                                className="relative flex flex-col justify-center w-[330px] h-[240px] mx-auto bg-white p-10 mb-5 text-center bg-no-repeat bg-center"
                                style={{
                                    backgroundImage:
                                        "url('/common/images/square-frame.png')",
                                    backgroundSize: "95%",
                                }}
                            >
                                <div className="text-primary ">
                                    <img
                                        src="/common/images/bismillah.png"
                                        alt="assalamualaikum"
                                        width="150"
                                        height="auto"
                                        className="mx-auto"
                                    />
                                </div>
                                <h1 className="text-secondary font-heading font-bold text-lg my-3 leading-tight">
                                    Dengan penuh syukur dan memohon ridha Allah
                                    SWT.
                                </h1>
                                <div className="text-sm">
                                    Kami mengundang Saudara/i untuk hadir pada
                                    acara pernikahan kami
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation
                            animateIn="fadeInLeft"
                            delay={2500}
                            duration={1}
                        >
                            <BridePhoto
                                photo={`/uploads/${options.bride.photo}`}
                                name={options.bride.name}
                                description={`${options.bride.remark} dari Bapak<br/> ${options.bride.father} & Ibu ${options.bride.mother}`}
                            />
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeIn" delay={2000}>
                            <img
                                src="/common/images/separator.png"
                                className="w-[90%] mx-auto my-5"
                                alt="Separator"
                            />
                        </ScrollAnimation>

                        <ScrollAnimation
                            animateIn="fadeInRight"
                            delay={2500}
                            duration={1}
                        >
                            <BridePhoto
                                photo={`/uploads/${options.groom.photo}`}
                                name={options.groom.name}
                                description={`${options.groom.remark} dari Bapak<br/> ${options.groom.father} & Ibu ${options.groom.mother}`}
                            />
                        </ScrollAnimation>
                    </div>

                    <div className="-mt-5">
                        <Button delay={3500} offset={10} to="save-the-date">
                            <b>Selanjutnya</b>
                            <ArrowRightCircle size={15} />
                        </Button>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Bridegroom;
