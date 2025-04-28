import React, { useContext, memo } from "react";
import { BsSoundwave } from "react-icons/bs";
import { FaPause, FaPlay } from "react-icons/fa";
import { MdExplicit } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../global/Context";
import { StyledSongCardRow } from "./SongCardRow.styled";

interface Song {
  id: number;
  title: string;
  album: {
    cover_small: string;
    md5_image: string;
  };
  artist: {
    name: string;
    id: string;
  };
  md5_image: string;
  duration: number;
  explicit_lyrics: boolean;
}

interface SongCardRowProps {
  song: Song;
  index: number;
  categoryData?: Song[];
  albumData?: {
    tracks: {
      data: Song[];
    };
  };
}

const formatDuration = (duration: number): string => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const SongCardRow: React.FC<SongCardRowProps> = memo(
  ({ song, index, categoryData, albumData }) => {
    const {
      currentSong,
      setCurrentSong,
      playPause,
      setSongsList,
      playlistData,
      setDisplayAudioPlayerMobile,
      user,
      setIsPlaying,
      audioElem,
    } = useContext(AppContext);
    const location = useLocation();

    const isCurrentSong = song?.id === currentSong?.id;

    const handleAddSongsToLocalStorage = (currSong: Song, action: string) => {
      if (action === "play") {
        try {
          setDisplayAudioPlayerMobile(true);

          // Validate current song
          if (!currSong) {
            console.error("No song provided");
            return;
          }

          // Determine songs list based on route
          let songsToStore = [];

          if (location.pathname.includes("/category")) {
            songsToStore = categoryData?.slice(0, 20) || [];
          } else if (location.pathname.includes("/album")) {
            songsToStore = albumData?.tracks?.data || [];
          } else if (location.pathname.includes("/playlist")) {
            songsToStore = playlistData || [];
          } else if (location.pathname.includes("/liked-songs")) {
            songsToStore = user?.likedSongs || [];
          }

          // Store songs list
          try {
            localStorage.setItem("songsList", JSON.stringify(songsToStore));
            setSongsList(songsToStore);
          } catch (storageError) {
            console.error("Failed to store songs list:", storageError);
          }

          // Store current song and play it
          try {
            localStorage.setItem("currentSong", JSON.stringify(currSong));
            setCurrentSong(currSong);
            setIsPlaying(true);

            // Ensure audio element is loaded and played
            if (audioElem.current) {
              audioElem.current.load();
              audioElem.current.play().catch((error: Error) => {
                console.error("Error playing audio:", error);
              });
            }
          } catch (storageError) {
            console.error("Failed to store current song:", storageError);
          }
        } catch (error) {
          console.error("Error in handleAddSongsToLocalStorage:", error);
        }
      } else if (action === "pause") {
        setIsPlaying(false);
        if (audioElem.current) {
          audioElem.current.pause();
        }
      }
    };

    return (
      <StyledSongCardRow
        style={{
          backgroundColor: isCurrentSong ? "#282828" : "transparent",
        }}
        role="button"
        tabIndex={0}
        onKeyPress={(e: React.KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            handleAddSongsToLocalStorage(song, "play");
          }
        }}
      >
        <div className="init-row row gap-1 center">
          <span
            className="number"
            style={{
              color: isCurrentSong ? "#1db954" : "inherit",
            }}
          >
            {isCurrentSong ? (
              <BsSoundwave aria-label="Currently playing" />
            ) : (
              <>{index + 1}</>
            )}
          </span>
          {isCurrentSong && (
            <button
              className="play"
              onClick={() => handleAddSongsToLocalStorage(song, "pause")}
              style={{
                color: isCurrentSong ? "#1db954" : "inherit",
              }}
              aria-label={isCurrentSong ? "Pause song" : "Play song"}
            >
              <FaPause />
            </button>
          )}
          {!isCurrentSong && (
            <button
              className="play"
              onClick={() => handleAddSongsToLocalStorage(song, "play")}
              style={{
                color: "inherit",
              }}
              aria-label="Play song"
            >
              <FaPlay />
            </button>
          )}

          <div className="col gap-5">
            <h4
              style={{
                color: isCurrentSong ? "#1db954" : "inherit",
                textAlign: "left",
              }}
            >
              {song?.title}
            </h4>
            <Link
              to={`/artiste/${song?.artist?.id}/${song?.artist?.name}`}
              className="row center gap-5"
              style={{
                textAlign: "left",
              }}
            >
              {song?.explicit_lyrics && (
                <MdExplicit aria-label="Explicit content" />
              )}
              {song?.artist?.name}
            </Link>
          </div>
        </div>

        <span className="duration">{formatDuration(song?.duration)}</span>
      </StyledSongCardRow>
    );
  }
);

SongCardRow.displayName = "SongCardRow";

export default SongCardRow;
