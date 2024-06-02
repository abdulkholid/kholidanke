import { Head, usePage } from "@inertiajs/react";
import React from "react";

const Greeting = ({ page_title }) => {
    const { logo } = usePage().props;

    return (
        <>
            <Head>
                <title>{page_title}</title>
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="/common/images/favicon.svg"
                />
            </Head>
            <div className="flex items-center justify-center fixed left-0 top-0 w-full h-full bg-[#111111]">
                <div className="flex items-center justify-center w-24 h-24 border rounded-full p-2 mb-20">
                    <img
                        src={`/uploads/${logo.dark}`}
                        alt="logo anke & kholid"
                    />
                </div>
            </div>
        </>
    );
};

export default Greeting;
