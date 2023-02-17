import React, { useContext } from "react";
import { FaPlay } from "react-icons/fa";
import { AppContext } from "../../global/Context";
import { StyledUpNext } from "./UpNext.styled";

function UpNext() {
  const {
    songsList,
    currentSong,
    setCurrentSong,
    audioElem,
    playPause,
    setIsPlaying,
  } = useContext(AppContext);

  return (
    <StyledUpNext>
      {songsList?.map((song: any, i: number) => {
        return (
          <div
            className="up-next-card"
            key={i}
            style={{
              backgroundColor:
                currentSong?.id === song.id ? "#282828" : "transparent",
            }}
          >
            <div className="init-row">
              <div
                className="img img-def"
                style={{
                  backgroundImage: `url(${
                    song?.album?.cover_small ||
                    `https://e-cdns-images.dzcdn.net/images/cover/${song?.md5_image}/250x250-000000-80-0-0.jpg`
                  })`,
                }}
              >
                <FaPlay
                  className="play-btn"
                  onClick={() => {
                    setCurrentSong(song);
                    playPause();
                  }}
                />
              </div>
              <div className="col">
                <h4>
                  {" "}
                  {song?.title?.length > 10
                    ? song?.title.slice(0, 10) + "..."
                    : song?.title}
                </h4>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "gainsboro",
                  }}
                >
                  {song?.artist?.name?.length > 10
                    ? song?.artist?.name?.slice(0, 10) + "..."
                    : song?.artist?.name}
                </span>
              </div>
            </div>

            <span
              style={{
                fontSize: "0.8rem",
                color: "gainsboro",
              }}
            >
              0:30
            </span>
          </div>
        );
      })}
    </StyledUpNext>
  );
}

export default UpNext;
