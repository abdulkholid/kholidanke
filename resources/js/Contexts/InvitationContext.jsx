import React, { createContext, useState } from "react";

export const DataContext = createContext();

const InvitationContext = ({ children }) => {
    const [menuOpenStatus, setMenuOpenStatus] = useState(false);
    const [playSong, setPlaySong] = useState(false);

    return (
        <DataContext.Provider
            value={{
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
