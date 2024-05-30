import React from "react";

const BridePhoto = ({ photo, name, description }) => {
    return (
        <div className="flex items-center">
            <div className="flex-none">
                <img
                    src={photo}
                    alt="foto mempelai"
                    className="photo-frame w-28 h-auto rounded-full"
                />
            </div>
            <div className="flex-auto pl-5">
                <div className="text-xl font-bold font-heading mb-1 text-primary">
                    {name}
                </div>
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
        </div>
    );
};

export default BridePhoto;
