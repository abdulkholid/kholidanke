import { Head, usePage } from "@inertiajs/react";
import React from "react";

const MobileOnly = () => {
    const { logo } = usePage().props;
    return (
        <>
            <Head title="Dibuka pake hape yaah :)" />
            <div className="flex flex-col items-center justify-center fixed left-0 top-0 w-full h-full bg-[#111111]">
                <div className="flex items-center justify-center w-24 h-24 border rounded-full p-2 mb-10">
                    <img
                        src={`/uploads/${logo.dark}`}
                        alt="logo anke & kholid"
                        width={100}
                        height={"auto"}
                        className="mx-auto"
                    />
                </div>
                <div className="w-[350px] max-w-full text-white text-center">
                    <div className="mt-5">
                        For the best experience, please kindly open this page
                        through out your mobile phone browser (Google Chrome or
                        Safari).
                        <br />
                        Thank you :)
                        <div className="mt-10">
                            ----------------
                            <div className="mt-10 font-heading font-bold">
                                <span className="text-primary">Anke</span>
                                <span className="mx-2">&</span>
                                <span className="text-primary">Kholid</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileOnly;
