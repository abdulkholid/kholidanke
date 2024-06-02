import React from "react";
import { AlertOctagon, Check } from "react-feather";

const Alert = ({ status = "fail", text }) => {
    const alert_class = {
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
            container: "flex items-center rounded-lg w-full p-3",
            icon: "flex items-center justify-center flex-none mr-3 w-6 h-6 rounded-full",
        },
    };
    const alert_container_class = `${alert_class["component"]["container"]} ${alert_class["color"][status]["container"]}`;
    const alert_icon_class = `${alert_class["component"]["icon"]} ${alert_class["color"][status]["icon"]}`;
    return (
        <div className="mb-5">
            <div className={alert_container_class}>
                <div className={alert_icon_class}>
                    {status === "success" ? (
                        <Check size="12" className="text-white" />
                    ) : (
                        <AlertOctagon size="12" className="text-white" />
                    )}
                </div>
                <div className="flex-auto text-white text-[13px] leading-[18px]">
                    {text}
                </div>
            </div>
        </div>
    );
};

export default Alert;
