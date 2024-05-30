import LeftNav from "@/Components/Admin/LeftNav";
import Toast from "@/Components/Admin/Toast";
import { usePage } from "@inertiajs/react";
import React from "react";

const AdminLayout = ({ page_title, children }) => {
    const { flash } = usePage().props;
    return (
        <div className="flex pl-[250px] text-gray-600 text-[14px] min-h-screen">
            {/* left sidebar */}
            <div className="bg-secondary flex-none w-[250px] h-full fixed flex z-50 left-0 top-0 flex-col justify-between">
                {/* top-section */}
                <div className="h-24 w-full p-5">
                    {/* logo */}
                    <div className="w-[200px] h-[70px] bg-secondary__lighten mx-auto"></div>
                </div>
                {/* end top-section */}

                {/* mid-section */}
                <div className="w-full">
                    <LeftNav />
                </div>
                {/* end mid-section */}

                {/* bottom-section */}
                <div className="p-5 w-full">
                    <div className="w-full bg-secondary__lighten h-[120px] rounded-xl"></div>
                </div>
                {/* end bottom-section */}
            </div>
            {/* end left sidebar */}

            {/* content section */}
            <div className="bg-light w-full relative">
                <div className="fixed w-full top-0 text-lg px-10 py-3 bg-white shadow-lg font-semibold">
                    {page_title}
                </div>
                <div className="p-10 pt-24">{children}</div>
            </div>
            {/* end content section */}

            {flash.notif_status && flash.notif_message && (
                <Toast status={flash.notif_status} text={flash.notif_message} />
            )}
        </div>
    );
};

export default AdminLayout;
