import React from "react";

const Card = ({ shadow, children }) => {
    const shadows = {
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl",
        "2xl": "shadow-2xl",
    };
    return (
        <div
            className={`bg-white px-0 py-0 rounded-lg ${
                shadow && shadows[shadow]
            }`}
        >
            {children}
        </div>
    );
};

const Title = ({ title, bold = false, icon, children }) => {
    return (
        <h2
            className={`px-5 py-4 flex items-center gap-2 justify-between ${
                bold && `font-bold`
            }`}
        >
            <div className="flex items-center gap-2">
                {icon}
                {title}
            </div>

            {children}
        </h2>
    );
};

const TitleOption = ({ children }) => {
    return <div className="flex items-end text-xs">{children}</div>;
};

const Body = ({ children }) => {
    return <div className="p-5">{children}</div>;
};

Card.Title = Title;
Card.Title.Option = TitleOption;
Card.Body = Body;

export default Card;
