import React from "react";

const ButtonGroup = ({ children, className }) => {
    return <div className={"flex gap-1 " + className}>{children}</div>;
};

export default ButtonGroup;
