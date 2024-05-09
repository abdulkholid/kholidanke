import { Link } from "@inertiajs/react";
import React from "react";
import {
    Grid,
    PieChart,
    Layers,
    Voicemail,
    MessageSquare,
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
            link: route("admin.event_session.list"),
            text: "Sesi Acara",
            isActive: route().current("admin.event_session.*"),
        },
        {
            icon: <Layers size={iconSize} />,
            link: "#",
            text: "Tamu Undangan",
            isActive: false,
        },
        {
            icon: <Voicemail size={iconSize} />,
            link: "#",
            text: "Pesan Suara",
            isActive: false,
        },
        {
            icon: <MessageSquare size={iconSize} />,
            link: "#",
            text: "Ucapan Selamat",
            isActive: false,
        },
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
