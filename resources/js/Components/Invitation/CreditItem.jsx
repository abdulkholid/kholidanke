import React from "react";
import { Link } from "react-feather";

const CreditItem = ({ name, role, link = "#" }) => {
    return (
        <li className="mb-3 flex gap-5 justify-center font-heading text-sm">
            <div
                className="w-1/2 text-[#777] text-right"
                dangerouslySetInnerHTML={{ __html: role }}
            />
            <div className="w-1/2 text-left font-semibold">
                <span dangerouslySetInnerHTML={{ __html: name }}></span>
                <a
                    href={link}
                    target="_blank"
                    className="inline-block relative"
                >
                    <Link
                        size={13}
                        className="absolute -right-6 -top-3 text-primary"
                    />
                </a>
            </div>
        </li>
    );
};

export default CreditItem;
