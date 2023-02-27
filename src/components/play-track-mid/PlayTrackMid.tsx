import React, { useContext } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../global/Context";
import { StyledPlayTrackMid } from "./PlayTrackMid.styled";

function PlayTrackMid(props: any) {
  let navigate = useNavigate();
  const location = useLocation();

  const {
    playPause,
    isPlaying,
    setDisplayAudioPlayerMobile,
    setCurrentSong,
    setSongsList,
  } = useContext(AppContext);

  const handleAddSongsToLocalStorage = (currSong: object) => {
    setDisplayAudioPlayerMobile(true);

    if (props.allSongs) {
      localStorage.setItem("songsList", JSON.stringify(props.allSongs));
      setSongsList(props.allSongs);
    }

    localStorage.setItem("currentSong", JSON.stringify(currSong));
    setCurrentSong(currSong);

    playPause();
  };

  return (
    <StyledPlayTrackMid location={location}>
      <div className="row middle center">
        <div
          className="play"
          onClick={() => {
            handleAddSongsToLocalStorage(props.allSongs[0]);
          }}
          style={{ fontSize: "2rem" }}
        >
          {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
        </div>

        {!location.pathname.includes("/artiste") ? (
          <FiHeart className="pointer" />
        ) : (
          <button className="follow-btn">Follow</button>
        )}

        <SlOptions className="pointer" />
      </div>
    </StyledPlayTrackMid>
  );
}

export default PlayTrackMid;
