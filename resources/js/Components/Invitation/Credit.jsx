import React, { useEffect, useState } from "react";
import { Cpu, XCircle } from "react-feather";
import CreditItem from "./CreditItem";
import "animate.css/animate.compat.css";

const Credit = () => {
    const [containerVisibility, setContainerVisibility] = useState("invisible");
    const [contentVisibility, setContentVisibility] = useState("invisible");
    const container_styles = {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left 20px, right 20px",
        backgroundSize: "auto 130px",
        backgroundImage:
            'url("/common/images/flower-left.png"), url("/common/images/flower-right.png")',
    };
    const container_classes = {
        visible: "w-full h-full top-0 right-0 rounded-none",
        invisible: "w-14 h-14 -top-3 -right-3  rounded-[50%] rounded-tr-[0px]",
    };
    const content_classes = {
        visible: "animated fadeIn",
        invisible: "animated fadeOut",
    };

    useEffect(() => {
        if (containerVisibility === "visible") {
            setTimeout(() => {
                setContentVisibility("visible");
            }, 500);
            clearTimeout();
        }
    }, [containerVisibility]);

    const closeCredit = () => {
        setContentVisibility("invisible");

        setTimeout(() => {
            setContainerVisibility("invisible");
        }, 500);
        clearTimeout();
    };

    return (
        <>
            <div
                className={`${container_classes[containerVisibility]} z-[9999] duration-300 ease-in absolute overflow-hidden flex justify-center items-center bg-[#1e1e1e] text-white`}
            >
                {containerVisibility !== "visible" && (
                    <button
                        className="absolute z-[8000] text-[#444]"
                        onClick={() => setContainerVisibility("visible")}
                    >
                        <Cpu size={15} className="mr-2 mt-1" />
                    </button>
                )}

                <div
                    className={`${content_classes[contentVisibility]} bg-[#1e1e1e] h-dvh w-full`}
                    style={container_styles}
                >
                    <div className="mt-40 px-10">
                        <h1 className="font-heading text-2xl font-bold text-center text-primary">
                            CREDIT
                        </h1>

                        <ul className="text-center mt-20">
                            <CreditItem
                                role="Graphic Designer"
                                name="Andra Gembara"
                                link="https://www.instagram.com/andragembara/"
                            />
                            <CreditItem
                                role="Logo Artist"
                                name="Sarid Ezra"
                                link="https://www.instagram.com/srdez/"
                            />
                            <CreditItem
                                role="UX Supervisor"
                                name="Anke L. Kirana"
                                link="https://www.instagram.com/ankelk/"
                            />
                            <CreditItem
                                role="Programmer"
                                name="Abdul Kholid"
                                link="https://www.instagram.com/abdulkholid_/"
                            />
                            <CreditItem
                                role="The Sound<br/>'Same dream, same mind, same night'"
                                name="Seventeen<br/>Piano Cover"
                                link="https://www.youtube.com/watch?v=ZxGfYx3vS_4"
                            />
                        </ul>
                    </div>
                </div>

                {contentVisibility === "visible" && (
                    <div className="absolute left-0 bottom-0 w-full overflow-hidden text-center">
                        <button
                            className="inline-flex w-16 h-16 justify-center items-center rounded-full mb-5"
                            onClick={() => closeCredit()}
                        >
                            <XCircle
                                className="text-[#333]"
                                size={40}
                                strokeWidth={1}
                            />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Credit;
