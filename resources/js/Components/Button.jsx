import { Link } from "@inertiajs/react";
import React from "react";

const Button = ({
    size = "regular",
    style = "outline",
    color = "primary",
    children,
    is_link = false,
    ...props
}) => {
    const size_variants = {
        regular:
            "flex gap-1 justify-center items-center h-8 px-3 py-2 rounded text-xs",
        full: "flex gap-1 justify-center items-center h-8 px-3 py-2 rounded text-xs w-full",
        full_md:
            "flex gap-2 justify-center items-center h-11 px-3 py-2 rounded w-full",
    };
    const color_vatiants = {
        solid: {
            primary: "bg-primary text-white hover:bg-primary__darken",
            info: "bg-blue-200 text-blue-500 hover:bg-blue-500 hover:text-white",
            danger: "bg-red-200 text-red-500 hover:bg-red-500 hover:text-white",
        },
        outline: {
            primary:
                "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",
            info: "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white",
            danger: "bg-transparent text-red-500 border border-red-500 hover:bg-red-500 hover:text-white",
        },
    };

    if (is_link) {
        return (
            <>
                <Link
                    className={`${size_variants[size]}  ${color_vatiants[style][color]}`}
                    {...props}
                >
                    {children}
                </Link>
            </>
        );
    }

    return (
        <>
            <button
                className={`${size_variants[size]}  ${color_vatiants[style][color]}`}
                {...props}
            >
                {children}
            </button>
        </>
    );
};

export default Button;
