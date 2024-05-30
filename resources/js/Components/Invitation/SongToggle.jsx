import { DataContext } from "@/Contexts/InvitationContext";
import React, { useContext, useEffect, useState } from "react";
import { PauseCircle, PlayCircle } from "react-feather";

const SongToggle = () => {
    const { playSong, setPlaySong } = useContext(DataContext);

    const audio_path = "/uploads/options/songs/invitation-song.mp3";
    const [song, setSong] = useState(new Audio(audio_path));
    const [songIndicatorText, setSongIndicatorText] = useState("Loading...");

    useEffect(() => {
        if (song.readyState === 4) {
            if (!playSong) {
                song.pause();
                setSongIndicatorText("Play Sound");
            } else {
                song.play();
                setSongIndicatorText("Pause Sound");
            }
        }
    }, [playSong, song.readyState]);

    const handleClick = () => {
        if (song.readyState !== 4) {
            alert(
                "File musik belum terbaca secara sempurna karena koneksi internet lambat. Silakan refresh halaman ini."
            );
        } else {
            setPlaySong(!playSong);
        }
    };
    return (
        <>
            <button
                className="flex gap-2 items-center border border-white py-2 rounded w-[150px] justify-center text-white"
                onClick={handleClick}
            >
                {!playSong ? (
                    <PlayCircle size={17} />
                ) : (
                    <PauseCircle size={17} />
                )}
                {songIndicatorText}
            </button>
        </>
    );
};

export default SongToggle;
