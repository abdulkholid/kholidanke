import React, { useContext, useEffect } from "react";
import "animate.css/animate.compat.css";
import SlideMenuItem from "./SlideMenuItem";
import { XCircle } from "react-feather";
import { usePage } from "@inertiajs/react";
import SongToggle from "./SongToggle";
import { DataContext } from "@/Contexts/InvitationContext";
import Credit from "./Credit";
import { scrollSpy } from "react-scroll";

const SlideMenu = () => {
    const { menuOpenStatus, setMenuOpenStatus } = useContext(DataContext);
    const { logo } = usePage().props;
    const classes = {
        show: "animated h-full overflow-hidden duration-[300ms] fixed left-0 top-0 w-full bg-[#111111] z-[1000] flex flex-col justify-center items-center",
        hide: "animated h-0 overflow-hidden fixed left-0 top-0 w-full bg-[#111111] z-[1000] flex flex-col justify-center items-center",
    };

    const handleMenuStatus = (status) => {
        if (status === "close") {
            setMenuOpenStatus(false);
        }
    };

    useEffect(() => {
        scrollSpy.update();
    }, []);

    return (
        <div className={menuOpenStatus ? classes["show"] : classes["hide"]}>
            <Credit />

            <div className="flex w-24 h-24 border rounded-full p-2 mb-20">
                <img src={`/uploads/${logo.dark}`} alt="logo anke & kholid" />
            </div>

            <ul className="pb-32">
                <SlideMenuItem
                    to="cover"
                    menuStatus={handleMenuStatus}
                    current_route="invitation.cover"
                    spy={true}
                    activeClass="active"
                >
                    Undangan
                </SlideMenuItem>

                <SlideMenuItem
                    current_route="invitation.bridegroom"
                    to="bridegroom"
                    menuStatus={handleMenuStatus}
                >
                    Kedua Mempelai
                </SlideMenuItem>

                <SlideMenuItem
                    current_route="invitation.save-the-date"
                    to="save-the-date"
                    menuStatus={handleMenuStatus}
                >
                    Detail Acara
                </SlideMenuItem>

                <SlideMenuItem
                    current_route="invitation.thank-you"
                    to="thank-you"
                    menuStatus={handleMenuStatus}
                >
                    Ucapan Terima Kasih
                </SlideMenuItem>
            </ul>

            <div className="absolute left-0 bottom-0 w-full overflow-hidden">
                <div className="text-center">
                    <button
                        className="inline-flex w-16 h-16 justify-center items-center rounded-full mb-5"
                        onClick={() => setMenuOpenStatus(false)}
                    >
                        <XCircle
                            className="text-[#333]"
                            size={40}
                            strokeWidth={1}
                        />
                    </button>
                </div>
                <div className="w-full bg-[#0c0c0c] flex justify-center items-center p-3 gap-3">
                    <SongToggle />
                </div>
            </div>
        </div>
    );
};

export default SlideMenu;
