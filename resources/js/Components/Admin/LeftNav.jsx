import React from "react";
import { Grid, PieChart, Users, Voicemail, MessageSquare } from "react-feather";

const LeftNav = () => {
    const iconSize = 20;
    const leftNavItems = [
        {
            icon: <Grid size={iconSize} />,
            link: "#",
            text: "Dasbor",
            isActive: true,
        },
        {
            icon: <PieChart size={iconSize} />,
            link: "#",
            text: "Sesi Acara",
            isActive: false,
        },
        {
            icon: <Users size={iconSize} />,
            link: "#",
            text: "Tamu Undangan",
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
                    <a
                        href="#"
                        className={`p-4 text-purple-100 flex items-center gap-4 ${
                            leftNavItem.isActive && "bg-purple-800"
                        }`}
                    >
                        {leftNavItem.icon}
                        <div>{leftNavItem.text}</div>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default LeftNav;
