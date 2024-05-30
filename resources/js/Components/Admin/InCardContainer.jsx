import React from "react";

const InCardContainer = ({ children, width = "w-[50%]" }) => {
    return (
        <div
            className={`${width} border border-dashed border-grey-300 p-5 rounded-lg`}
        >
            {children}
        </div>
    );
};

export default InCardContainer;
