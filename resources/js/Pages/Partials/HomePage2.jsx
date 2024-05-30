import React from "react";
import TopRightFlower from "../../Components/Invitation/TopRightFlower";
import { ArrowRight } from "react-feather";
import Button from "../../Components/Invitation/Button";
import BridePhoto from "@/Components/Invitation/BridePhoto";

const HomePage2 = () => {
    return (
        <div className="min-h-screen relative flex items-center bg-texture-main bg-repeat">
            {/* top flower */}
            <TopRightFlower />
            <div className="flex flex-col w-full">
                <div className="px-5">
                    <div
                        className="relative flex flex-col justify-center w-[330px] h-[240px] mx-auto bg-white p-10 mb-10 text-center bg-no-repeat bg-center"
                        style={{
                            backgroundImage:
                                "url('common/images/square-frame.png')",
                            backgroundSize: "95%",
                        }}
                    >
                        <div className="text-primary ">
                            Assalamu'alaikum Wr Wb
                        </div>
                        <h1 className="text-secondary font-heading font-bold text-xl mb-3">
                            Dengan Memohon Rahmat dan Ridha Allah SWT
                        </h1>
                        <div>
                            Kami bermaksud mengundang Anda untuk menghadiri
                            acara pernikahan kami berdua,
                        </div>
                    </div>

                    <BridePhoto
                        photo="common/images/bride-photo.png"
                        name="Anke Lintang Kirana"
                        description="Putri kedua dari Bpk. Sukaryanto (Alm) & Ibu Sri Yuliningsih"
                    />

                    <img
                        src="common/images/separator.png"
                        className="w-[90%] mx-auto my-5"
                        alt="Separator"
                    />

                    <BridePhoto
                        photo="common/images/bride-photo.png"
                        name="Abdul Kholid"
                        description="Putra keempat dari Bpk. H. Samsuddin & Ibu Hj. Khatiah"
                    />
                </div>

                <div className="mt-3">
                    <Button>
                        <b>Selanjutnya</b>
                        <ArrowRight size={15} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HomePage2;
