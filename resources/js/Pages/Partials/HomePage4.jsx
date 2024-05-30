import TopRightFlower from "@/Components/Invitation/TopRightFlower";
import React from "react";

const HomePage4 = () => {
    return (
        <div className="min-h-screen relative flex items-center bg-[#1E1E1E] text-white">
            <div className="flex flex-col w-full">
                <div className="mb-10">
                    <div className="mb-3 text-center font-heading text-3xl text-primary">
                        <b>Terima Kasih</b>
                    </div>
                    <div className="text-center">
                        atas ucapan dan doanya. Sampai bertemu
                        <br />
                        di hari istimewa kami!
                    </div>
                </div>
                <div className="mb-10">
                    {/* Logo */}
                    <img
                        // src={`common/images/${logo}`}
                        src={`AnkeKholid/ankekholid - whigold.png`}
                        className="w-[180px] h-auto mx-auto relative"
                    />

                    <div className="flex text-lg justify-center">
                        <div className="pt-3 font-bold">Juni</div>
                        <div className="px-3 mx-3 date-has-border">
                            <b className="text-4xl text-primary font-heading">
                                22
                            </b>
                        </div>
                        <div className="pt-3 font-bold">2024</div>
                    </div>
                </div>
                <div className="text-center text-sm px-5 text-gray-200">
                    Kami yang berbahagia, keluarga
                    <br />
                    Bpk. Sukaryanto (Alm.) & Ibu Sri Yuliningsih
                    <br />
                    dan Bpk. H. Samsuddin & Ibu Hj. Khatiah
                </div>
            </div>
        </div>
    );
};

export default HomePage4;
