import React, { useContext } from "react";
import { BsSoundwave } from "react-icons/bs";
import { FaPause, FaPlay } from "react-icons/fa";
import { MdExplicit } from "react-icons/md";
import { AppContext } from "../../../global/Context";
import { StyledPopular } from "./Popular.styled";

function Popular() {
  const {
    artisteTracks,
    currentSong,
    setSongsList,
    setCurrentSong,
    playPause,
    setDisplayAudioPlayerMobile,
  } = useContext(AppContext);

  const handleAddSongsToLocalStorage = (currSong: object) => {
    setDisplayAudioPlayerMobile(true);
    localStorage.setItem(
      "songsList",
      JSON.stringify(artisteTracks?.slice(0, 18))
    );
    setSongsList(artisteTracks.slice(0, 18));

    localStorage.setItem("currentSong", JSON.stringify(currSong));
    setCurrentSong(currSong);

    playPause();
  };

  return (
    <StyledPopular>
      <h3>Popular</h3>

      <div className="popular-col col">
        {artisteTracks?.slice(0, 5).map((track: any, index: number) => {
          return (
            <div
              className="popular-card row center btw"
              key={index}
              style={{
                backgroundColor:
                  currentSong?.id === track.id ? "#282828" : "transparent",
              }}
            >
              <div className="init-row row gap-1 center">
                <span
                  className="number"
                  style={{
                    color: currentSong?.id === track.id ? "#1db954" : "inherit",
                    fontWeight:
                      currentSong?.id === track.id ? "800" : "inherit",
                  }}
                >
                  {currentSong?.id === track.id ? (
                    <BsSoundwave />
                  ) : (
                    <>{index + 1}</>
                  )}
                </span>

                <span
                  className="play"
                  onClick={() => {
                    handleAddSongsToLocalStorage(track);
                  }}
                  style={{
                    color:
                      track?.id === currentSong?.id ? "#1db954" : "inherit",
                  }}
                >
                  {/* use "isPlaying instead" */}
                  {track?.id === currentSong?.id ? <FaPause /> : <FaPlay />}
                </span>

                <div
                  className="artist-img img-def"
                  style={{
                    backgroundImage: `url(${track?.album?.cover_medium})`,
                  }}
                ></div>
                <span
                  style={{
                    color: currentSong?.id === track.id ? "#1db954" : "inherit",
                  }}
                >
                  {track?.title}
                </span>
                {track?.explicit_lyrics && <MdExplicit />}
              </div>

              {/* <span>1,759,456</span> */}

              <span style={{ display: "none" }}>lv</span>

              <span>
                {String(track?.duration).charAt(0) + ":"}
                {String(track?.duration).charAt(1)}
                {String(track?.duration).charAt(2)}
              </span>
            </div>
          );
        })}
      </div>
    </StyledPopular>
  );
}

export default Popular;
