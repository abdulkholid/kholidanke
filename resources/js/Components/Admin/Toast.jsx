import React, { useEffect, useState } from "react";
import { AlertOctagon, Check, X } from "react-feather";

const Toast = ({ status, text }) => {
    const visible_time = 2000;
    const toast_class = {
        color: {
            fail: {
                container: "bg-red-700",
                icon: "bg-red-900",
            },
            success: {
                container: "bg-green-700",
                icon: "bg-green-900",
            },
        },
        component: {
            container: "flex items-center rounded-lg w-[300px] p-3",
            icon: "flex items-center justify-center flex-none mr-3 w-6 h-6 rounded-full",
        },
    };
    const toast_container_class = `${toast_class["component"]["container"]} ${toast_class["color"][status]["container"]}`;
    const toast_icon_class = `${toast_class["component"]["icon"]} ${toast_class["color"][status]["icon"]}`;

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (status && text && !visible) {
            // setVisible(true);
        }
        console.log("use-effect");
    }, [text]);

    const dismisToast = () => {
        setVisible(false);
    };
    console.log(visible);

    return (
        <>
            {visible && (
                <div className="fixed right-5 bottom-5">
                    <div className={toast_container_class}>
                        <div className={toast_icon_class}>
                            {status === "success" ? (
                                <Check size="12" className="text-white" />
                            ) : (
                                <AlertOctagon
                                    size="12"
                                    className="text-white"
                                />
                            )}
                        </div>
                        <div className="flex-auto text-white text-[13px] leading-[18px]">
                            {text}
                        </div>
                        <button>
                            <X
                                size="12"
                                className="text-white"
                                onClick={dismisToast}
                            />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Toast;
