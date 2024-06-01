import React, { createContext, useState } from "react";
import InvitationSong from "../../songs/invitation-song.mp3";
export const DataContext = createContext();

const InvitationContext = ({ children }) => {
    const audio_path = "/uploads/options/songs/mars-perindo.mp3";

    const [song, setSong] = useState(new Audio(InvitationSong));
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
