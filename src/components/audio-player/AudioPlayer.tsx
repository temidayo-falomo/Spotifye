import React, { useContext } from "react";
import { AppContext } from "../../global/Context";
import { StyledAudioPlayer } from "./AudioPlayer.styled";
import { FaHeart, FaPlay } from "react-icons/fa";
import {
  RiPictureInPictureFill,
  RiSkipBackFill,
  RiSkipForwardFill,
} from "react-icons/ri";
import { BiShuffle } from "react-icons/bi";
import { TbDevices2, TbRepeat } from "react-icons/tb";
import { BsPlayFill } from "react-icons/bs";
import { HiOutlineViewList } from "react-icons/hi";
import { RxSpeakerLoud } from "react-icons/rx";

function AudioPlayer() {
  const { displayAudioPlayer, setDisplayAudioPlayer } = useContext(AppContext);

  const handleDisplayAudioPlayer = () => {
    setDisplayAudioPlayer(!displayAudioPlayer);
  };

  return (
    <StyledAudioPlayer displayAudioPlayer={displayAudioPlayer}>
      <div className="nav"></div>
      <div className="main-info row">
        <div
          className="big-img"
          style={{
            backgroundImage: `url("https://assets.vogue.com/photos/609bb445758287e5e091eeed/1:1/w_2000,h_2000,c_limit/Billie-Eilish-Happier-Than-Ever.jpeg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="col"></div>
      </div>

      <div
        className="audio-player-container"
        onClick={handleDisplayAudioPlayer}
      >
        <div className="row gap-1 center">
          <div
            className="thumbnail-img"
            style={{
              backgroundImage: `url("https://assets.vogue.com/photos/609bb445758287e5e091eeed/1:1/w_2000,h_2000,c_limit/Billie-Eilish-Happier-Than-Ever.jpeg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="col gap-5">
            <h4>Oxytocin</h4>
            <span>Billie Eilish</span>
          </div>
          <div className="row gap-1 center" style={{ marginLeft: "1rem" }}>
            <FaHeart />
            <RiPictureInPictureFill />
          </div>
        </div>

        <div className="slide">
          <div className="col center gap-1">
            <div className="row gap-1 center">
              <BiShuffle />
              <RiSkipBackFill />
              <button
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  display: "grid",
                  placeContent: "center",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              >
                <BsPlayFill />
              </button>
              <RiSkipForwardFill />
              <TbRepeat />
            </div>
            <div className="slide-bar row gap-5"></div>
          </div>
        </div>

        <div
          className="row center gap-1"
          style={{
            fontSize: "1.5rem",
          }}
        >
          <HiOutlineViewList />
          <TbDevices2 />
          <div className="row gap-5">
            <RxSpeakerLoud />
            <input
              type="range"
              min="1"
              max="100"
              value="50"
              id="myRange"
            ></input>
          </div>
        </div>
      </div>
    </StyledAudioPlayer>
  );
}

export default AudioPlayer;
