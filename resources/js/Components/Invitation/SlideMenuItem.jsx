import React from "react";
import { MousePointer } from "react-feather";
import { Link } from "react-scroll";

const SlideMenuItem = ({ current_route, children, menuStatus, ...props }) => {
    return (
        <li className="block text-center">
            <Link
                className="menu-item py-2 inline-block text-white text-xl font-bold gap-2 relative"
                smooth={true}
                offset={0}
                {...props}
                onClick={(e) => menuStatus("close")}
                spy={true}
                activeClass="active"
            >
                {children}
                <MousePointer
                    size={19}
                    className="mt-2 text-primary absolute -right-7 top-2"
                />
            </Link>
        </li>
    );
};

export default SlideMenuItem;
