import React, { useContext } from "react";
import { BsPauseFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { AppContext } from "../../global/Context";
import { StyledUpNext } from "./UpNext.styled";

function UpNext(props: any) {
  const {
    songsList,
    currentSong,
    setCurrentSong,
    setIsPlaying,
    audioElem,
    playPause,
  } = useContext(AppContext);

  return (
    <StyledUpNext>
      {songsList?.map(
        (
          song: {
            id: number;
            title: string;
            album: { cover_small: string; md5_image: string };
            artist: { name: string };
            md5_image: string;
          },
          i: number
        ) => {
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
                  {currentSong?.id !== song.id ? (
                    <FaPlay
                      className="play-btn"
                      onClick={() => {
                        setCurrentSong(song);
                        setIsPlaying(true);
                        setTimeout(function () {
                          audioElem.current.play();
                        }, 150);
                        props.setProgress(0);
                      }}
                    />
                  ) : (
                    <BsPauseFill
                      className="play-btn"
                      style={{
                        fontSize: "1.5rem",
                      }}
                      onClick={playPause}
                    />
                  )}
                </div>
                <div className="col">
                  <h4>
                    {" "}
                    {song?.title?.length > 20
                      ? song?.title.slice(0, 20) + "..."
                      : song?.title}
                  </h4>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "gainsboro",
                    }}
                  >
                    {song?.artist?.name?.length > 20
                      ? song?.artist?.name?.slice(0, 20) + "..."
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
        }
      )}
    </StyledUpNext>
  );
}

export default UpNext;
