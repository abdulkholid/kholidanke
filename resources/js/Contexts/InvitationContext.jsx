import React, { createContext, useState } from "react";
import InvitationSong from "../../songs/invitation-song.mp3";
export const DataContext = createContext();

const InvitationContext = ({ children }) => {
    const audio_path = "/uploads/options/songs/mars-perindo.mp3";
    const [song, setSong] = useState(new Audio(InvitationSong));
    const [menuOpenStatus, setMenuOpenStatus] = useState(false);
    const [playSong, setPlaySong] = useState(false);

    const handleClick = () => {
        const audio = document.getElementById("audio");

        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    };

    return (
        <DataContext.Provider
            value={{
                song,
                setSong,
                menuOpenStatus,
                setMenuOpenStatus,
                playSong,
                setPlaySong,
            }}
        >
            <audio id="audio" controls className="relative">
                <source src={audio_path} type="audio/mp3" />
            </audio>
            <button onClick={handleClick}>xx</button>
            {children}
        </DataContext.Provider>
    );
};

export default InvitationContext;
