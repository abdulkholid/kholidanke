import React from "react";

const Card = ({ shadow, children }) => {
    return (
        <div
            className={`bg-white px-0 py-0 rounded-lg ${
                shadow && "shadow-" + shadow
            }`}
        >
            {children}
        </div>
    );
};

const Title = ({ title, bold = false, icon }) => {
    return (
        <h2
            className={`px-5 py-4 flex items-center gap-2 ${
                bold && `font-bold`
            }`}
        >
            {icon}
            {title}
        </h2>
    );
};

const Body = ({ children }) => {
    return <div className="p-5">{children}</div>;
};

Card.Title = Title;
Card.Body = Body;

export default Card;
