import React, { createContext, useState } from "react";

export const DataContext = createContext();

const InvitationContext = ({ children }) => {
    const audio_path = "/uploads/options/songs/lagu-undangan-trim.mp3";

    const [song, setSong] = useState(new Audio(audio_path));
    const [menuOpenStatus, setMenuOpenStatus] = useState(false);
    const [playSong, setPlaySong] = useState(false);

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
            {children}
        </DataContext.Provider>
    );
};

export default InvitationContext;
