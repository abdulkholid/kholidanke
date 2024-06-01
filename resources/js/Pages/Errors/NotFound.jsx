import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import { ArrowLeftCircle } from "react-feather";

const NotFound = () => {
    const { logo } = usePage().props;
    console.log(logo);

    return (
        <>
            <Head>
                <title>Tersesat.. oo tersesat..</title>
            </Head>
            <div className="font-quattrocento flex flex-col w-full h-dvh bg-secondary items-center justify-center text-white">
                <div className="text-center px-5">
                    <h1 className="text-2xl m-0 p-0 font-heading font-bold text-primary">
                        <b>Tersesat.. Ooo tersesat!!</b>
                    </h1>

                    <div className="mt-5">
                        Allah sudah membuatkan jalan yang lurus,
                        <br />
                        kenapa kamu malah lewat jalan tersesat ini?
                        <br />
                        Yuk balik ke jalan yang lurus yuk!
                    </div>

                    <div className="mt-10">
                        <Link
                            className="gap-2 bg-white rounded-xl font-bold text-secondary flex h-16 w-[300px] mx-auto justify-center items-center"
                            href={route("home")}
                        >
                            <ArrowLeftCircle size={20} strokeWidth={1.5} />
                            Kembali ke Laman Utama
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;
