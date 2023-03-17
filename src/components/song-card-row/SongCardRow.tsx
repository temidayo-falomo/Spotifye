import React, { useContext } from "react";
import { BsSoundwave } from "react-icons/bs";
import { FaPause, FaPlay } from "react-icons/fa";
import { MdExplicit } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../global/Context";
import { StyledSongCardRow } from "./SongCardRow.styled";

function SongCardRow(
  props: //    {
  //   itemData: {
  //     id: number;
  //     title: string;
  //     album: { cover_small: string; md5_image: string };
  //     artist: { name: string; id: string };
  //     md5_image: string;
  //   };
  //   index: number;
  //   setDisplayAudioPlayerMobile: React.Dispatch<React.SetStateAction<boolean>>;
  //   song: {
  //     id: number;
  //     title: string;
  //     album: { cover_small: string; md5_image: string };
  //     artist: { name: string; id: string };
  //     md5_image: string;
  //     duration: number;
  //     explicit_lyrics: boolean;
  //   };
  // }
  any
) {
  const {
    currentSong,
    setCurrentSong,
    playPause,
    setSongsList,
    playlistData,
    setDisplayAudioPlayerMobile,
    user,
  } = useContext(AppContext);
  const location = useLocation();

  const { categoryData, albumData } = props;

  const handleAddSongsToLocalStorage = (currSong: object) => {
    setDisplayAudioPlayerMobile(true);

    if (location.pathname.includes("/category")) {
      localStorage.setItem(
        "songsList",
        JSON.stringify(categoryData?.slice(0, 20))
      );
      setSongsList(categoryData?.slice(0, 20));
    }

    if (location.pathname.includes("/album")) {
      localStorage.setItem(
        "songsList",
        JSON.stringify(albumData?.tracks?.data)
      );
      setSongsList(albumData?.tracks?.data);
    }

    if (location.pathname.includes("/playlist")) {
      localStorage.setItem("songsList", JSON.stringify(playlistData));
      setSongsList(playlistData);
    }

    if (location.pathname.includes("/liked-songs")) {
      localStorage.setItem("songsList", JSON.stringify(user?.likedSongs));
      setSongsList(user?.likedSongs);
    }

    localStorage.setItem("currentSong", JSON.stringify(currSong));
    setCurrentSong(currSong);

    playPause();
  };

  return (
    <StyledSongCardRow
      style={{
        backgroundColor:
          props.song?.id === currentSong?.id ? "#282828" : "transparent",
      }}
    >
      <div className="init-row row gap-1 center">
        <span
          className="number"
          style={{
            color: props.song?.id === currentSong?.id ? "#1db954" : "inherit",
          }}
        >
          {currentSong?.id === props.song?.id ? (
            <BsSoundwave />
          ) : (
            <>{props.index + 1}</>
          )}
        </span>
        <span
          className="play"
          onClick={() => {
            handleAddSongsToLocalStorage(props.song);
          }}
          style={{
            color: props.song?.id === currentSong?.id ? "#1db954" : "inherit",
          }}
        >
          {/* use "isPlaying instead" */}
          {props.song?.id === currentSong?.id ? <FaPause /> : <FaPlay />}
        </span>
        <div className="col gap-5">
          <h4
            style={{
              color: props.song?.id === currentSong?.id ? "#1db954" : "inherit",
              textAlign: "left",
            }}
          >
            {props.song?.title}
          </h4>
          <Link
            to={`/artiste/${props.song?.artist?.id}/${props.song?.artist?.name}`}
            className="row center gap-5"
            style={{
              textAlign: "left",
            }}
          >
            {props.song?.explicit_lyrics && <MdExplicit />}
            {props.song?.artist?.name}
          </Link>
        </div>
      </div>

      {/* <span style={{ display: "none" }}>lv</span> */}

      <span>
        {String(props.song?.duration).charAt(0) + ":"}
        {String(props.song?.duration).charAt(1)}
        {String(props.song?.duration).charAt(2)}
      </span>
    </StyledSongCardRow>
  );
}

export default SongCardRow;
