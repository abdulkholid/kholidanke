import React from "react";
import { BookOpen } from "react-feather";
import TopRightFlower from "../../Components/Invitation/TopRightFlower";
import Button from "../../Components/Invitation/Button";

const HomePage1 = () => {
    const logo = "logo.png";
    return (
        <div className="min-h-screen relative flex items-center bg-texture-main bg-repeat">
            {/* top flower */}
            <TopRightFlower />

            <div className="flex flex-col w-full">
                {/* Logo */}
                <img
                    // src={`common/images/${logo}`}
                    src={`AnkeKholid/ankekholid - blagold.png`}
                    className="w-[180px] h-auto mx-auto -mb-3 relative"
                />

                <div className="flex text-lg justify-center text-primary -mb-3">
                    <div className="pt-3 font-bold">Juni</div>
                    <div className="text-secondary px-3 mx-3 date-has-border">
                        <b className="text-4xl font-heading">22</b>
                    </div>
                    <div className="pt-3 font-bold">2024</div>
                </div>

                <div className="flexflex-col text-xs justify-end text-center pt-40 bg-flower-left bg-no-repeat bg-left-top">
                    <b>Kepada Yth,</b>
                    <h2 className="text-heading text-primary text-xl font-bold mb-2">
                        Lady Tiara Octavia
                    </h2>
                    <div className="w-[200px] mx-auto">
                        Dengan penuh suka cita kami ingin berbagi kabar bahagia.
                    </div>
                </div>

                <Button>
                    <b>Buka Undangan</b>
                    <BookOpen size={15} />
                </Button>
            </div>
        </div>
    );
};

export default HomePage1;
