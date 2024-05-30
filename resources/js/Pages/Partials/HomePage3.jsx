import Button from "@/Components/Invitation/Button";
import TopRightFlower from "@/Components/Invitation/TopRightFlower";
import React from "react";
import { ArrowDownCircle, MapPin } from "react-feather";

const HomePage3 = () => {
    return (
        <div className="min-h-screen relative flex items-center bg-texture-main bg-repeat">
            {/* top flower */}
            <TopRightFlower />
            <div className="flex flex-col w-full">
                <div className="px-5 relative">
                    <img
                        src="common/images/save-the-date.png"
                        className="w-[200px] mx-auto my-5"
                        alt="Save the date"
                    />
                </div>

                <div className="flex text-lg justify-center text-primary -mb-3">
                    <div className="pt-3 font-bold">Juni</div>
                    <div className="text-secondary px-3 mx-3 date-has-border">
                        <b className="text-4xl font-heading">22</b>
                    </div>
                    <div className="pt-3 font-bold">2024</div>
                </div>

                <div className="flex mt-7 width-full">
                    <div className="flex-none w-[155px] text-right pr-5 border-r border-primary">
                        <div className="mb-5">
                            <div className="font-heading font-bold text-xl mb-1">
                                Akad
                            </div>
                            <span className="text-sm py-1 px-3 inline-block rounded-2xl border border-primary">
                                <b className="text-secondary ">13.30</b>
                                <small className="ml-1">WIB</small>
                            </span>
                        </div>
                        <div className="mb-5">
                            <div className="font-heading font-bold text-xl mb-1">
                                Resepsi
                            </div>
                            <span className="text-sm py-1 px-3 inline-block rounded-2xl border border-primary">
                                <b className="text-secondary ">16.30-17.30</b>
                                <small className="ml-1">WIB</small>
                            </span>
                        </div>
                    </div>

                    <div className="flex-auto text-left pl-5">
                        <div className="font-heading font-bold text-xl mb-1">
                            Joglo Brongkol
                        </div>
                        <div className="text-secondary mb-5">
                            Jl. Mulyo Sari,RT.02/RW.03, Brongkol, Sidomulyo,
                            Kec. Godean, Kab. Sleman, Yogyakarta 55264
                        </div>
                        <a
                            href="#"
                            className="pb-2 pt-2 px-5 text-primary inline-flex items-center rounded-3xl border border-primary"
                        >
                            <MapPin size={14} />
                            <b className="ml-2">Lihat Peta</b>
                        </a>
                    </div>
                </div>

                <div className="-mt-5 h-[180px] w-full bg-contain bg-flower-left bg-no-repeat bg-left-top"></div>

                <div className="-mt-5">
                    <Button>
                        <b>Selanjutnya</b>
                        <ArrowDownCircle size={15} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HomePage3;
