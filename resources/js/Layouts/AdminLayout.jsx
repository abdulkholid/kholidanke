import LeftNav from "@/Components/Admin/LeftNav";
import React from "react";

const AdminLayout = ({ children }) => {
    return (
        <div className="flex pl-[300px] text-gray-600 text-[14px]">
            {/* left sidebar */}
            <div className="bg-purple-700 flex-none w-[300px] h-full fixed flex z-50 left-0 top-0 flex-col justify-between">
                {/* top-section */}
                <div className="h-24 w-full p-5">
                    {/* logo */}
                    <div className="w-[200px] h-[70px] bg-purple-300 mx-auto"></div>
                </div>
                {/* end top-section */}

                {/* mid-section */}
                <div className="w-full">
                    <LeftNav />
                </div>
                {/* end mid-section */}

                {/* bottom-section */}
                <div className="p-5 w-full">
                    <div className="w-full bg-purple-800 h-[120px] rounded-xl"></div>
                </div>
                {/* end bottom-section */}
            </div>
            {/* end left sidebar */}

            {/* content section */}
            <div className="bg-gray-50 p-10">{children}</div>
            {/* end content section */}
        </div>
    );
};

export default AdminLayout;
