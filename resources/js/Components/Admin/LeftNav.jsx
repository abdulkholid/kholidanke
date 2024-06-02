import { Link, usePage } from "@inertiajs/react";
import React from "react";
import {
    Grid,
    PieChart,
    Layers,
    Voicemail,
    MessageSquare,
    Settings,
} from "react-feather";

const LeftNav = () => {
    const iconSize = 20;
    const leftNavItems = [
        {
            icon: <Grid size={iconSize} />,
            link: route("admin.dashboard"),
            text: "Dasbor",
            isActive: route().current("admin.dashboard"),
        },
        {
            icon: <PieChart size={iconSize} />,
            link: route("admin.event_session.index"),
            text: "Sesi Acara",
            isActive: route().current("admin.event_session.*"),
        },
        {
            icon: <Layers size={iconSize} />,
            link: route("admin.invitation.index"),
            text: "Tamu Undangan",
            isActive: route().current("admin.invitation.*"),
        },
        // {
        //     icon: <Voicemail size={iconSize} />,
        //     link: "#",
        //     text: "Pesan Suara",
        //     isActive: false,
        // },
        // {
        //     icon: <MessageSquare size={iconSize} />,
        //     link: "#",
        //     text: "Ucapan Selamat",
        //     isActive: false,
        // },
        // {
        //     icon: <Settings size={iconSize} />,
        //     link: route("admin.setting.index"),
        //     text: "Pengaturan",
        //     isActive: route().current("admin.setting.*"),
        // },
    ];

    return (
        <ul className="flex flex-col">
            {leftNavItems.map((leftNavItem, key) => (
                <li key={key}>
                    <Link
                        href={leftNavItem.link}
                        className={`p-4 text-purple-100 flex items-center gap-4 ${
                            leftNavItem.isActive && "bg-primary"
                        }`}
                    >
                        {leftNavItem.icon}
                        <div>{leftNavItem.text}</div>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default LeftNav;
