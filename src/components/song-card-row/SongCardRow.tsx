import React, { useContext } from "react";
import { FaPlay } from "react-icons/fa";
import { MdExplicit } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../global/Context";
import { StyledSongCardRow } from "./SongCardRow.styled";

function SongCardRow(props: any) {
  const { setCurrentSong, playPause, setSongsList, categoryData, albumData } =
    useContext(AppContext);
  const location = useLocation();

  const handleAddSongsToLocalStorage = (currSong: object) => {
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

    localStorage.setItem("currentSong", JSON.stringify(currSong));
    setCurrentSong(currSong);

    playPause();
  };

  return (
    <StyledSongCardRow>
      <div className="init-row row gap-1 center">
        <span className="number">{props.index + 1}</span>
        <span
          className="play"
          onClick={() => {
            handleAddSongsToLocalStorage(props.song);
          }}
        >
          <FaPlay />
        </span>
        <div className="col gap-5">
          <h4>{props.song?.title}</h4>
          <Link
            to={`/artiste/${props.song?.artist?.id}/${props.song?.artist?.name}`}
            className="row center gap-5"
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
