import { DataContext } from "@/Contexts/ModalContext";
import React, { useContext } from "react";

const ModalLayout = () => {
    const { modalOpen, modalComponent } = useContext(DataContext);

    return (
        <>
            {modalOpen && (
                <div className="fixed z-[200] left-0 top-0 w-full h-full flex items-center justify-center bg-black">
                    {modalComponent}
                </div>
            )}
        </>
    );
};

export default ModalLayout;
