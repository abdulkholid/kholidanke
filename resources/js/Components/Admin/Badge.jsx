import React from "react";

const Badge = ({ text, color = "danger" }) => {
    const color_class = {
        success: "bg-green-100 text-green-600",
        danger: "bg-red-100 text-red-600",
    };
    return (
        <span
            className={`${color_class[color]} inline-block p-1 px-2 text-xs rounded`}
        >
            {text}
        </span>
    );
};

export default Badge;
