import { DataContext } from "@/Contexts/InvitationContext";
import React, { useContext, useEffect, useState } from "react";

const TheSong = () => {
    const { song } = useContext(DataContext);

    // useEffect(() => {
    //     if (song.readyState === 4) {
    //         if (!playSong) {
    //             song.pause();
    //             setSongIndicatorText("Play Sound");
    //         } else {
    //             song.play();
    //             setSongIndicatorText("Pause Sound");
    //         }
    //     }
    // }, [playSong, song.readyState]);

    return (
        <div>{/* <button onClick={() => song.play()}>click</button> */}</div>
    );
};

export default TheSong;
