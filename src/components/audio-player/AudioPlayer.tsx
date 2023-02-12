import React, { useContext, useState } from "react";
import { AppContext } from "../../global/Context";
import { StyledAudioPlayer } from "./AudioPlayer.styled";
import { FaHeart } from "react-icons/fa";
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
import { NavLink } from "react-router-dom";
import Lyrics from "../lyrics/Lyrics";
import UpNext from "../upNext/UpNext";
import { FcGoogle } from "react-icons/fc";

function AudioPlayer() {
  const { displayAudioPlayer, setDisplayAudioPlayer } = useContext(AppContext);
  const [number, setNumber] = useState<number>(1);

  const handleDisplayAudioPlayer = () => {
    setDisplayAudioPlayer(!displayAudioPlayer);
  };

  const handleNumber = (num: number) => {
    setNumber(num);
  };

  let trackName = "Oxytocin";
  let artistName = "Billie Eilish";

  const handleFetchLyrics = () => {
    fetch(`https://lyrist.vercel.app/api/:${trackName}/:${artistName}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <StyledAudioPlayer displayAudioPlayer={displayAudioPlayer}>
      <div className="nav">
        <div className="logo">Spotifye</div>
        <div className="row gap-1">
          <NavLink
            to="/"
            onClick={handleDisplayAudioPlayer}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/search"
            onClick={handleDisplayAudioPlayer}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Search
          </NavLink>
          <NavLink
            to="/library"
            onClick={handleDisplayAudioPlayer}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Library
          </NavLink>
        </div>
        <div className="avatar">
          <FcGoogle />
        </div>
      </div>
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

        <div className="col lyr-rel">
          <div className="row gap-1">
            <h4
              className={`normal-btn pointer ${number === 1 && "active-btn"}`}
              onClick={() => handleNumber(1)}
            >
              Up Next
            </h4>
            <h4
              className={`normal-btn pointer ${number === 2 && "active-btn"}`}
              onClick={() => handleNumber(2)}
            >
              Lyrics
            </h4>
          </div>
          {number === 1 && <UpNext />}
          {number === 2 && (
            <div className="lyrics">
              <Lyrics />
            </div>
          )}
        </div>
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
            <input
              type="range"
              min="1"
              max="80"
              id="myRange"
              style={{
                width: "400px",
                backgroundColor: "green",
                color: "green",
              }}
            ></input>
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
            <input type="range" min="1" max="100" id="myRange"></input>
          </div>
        </div>
      </div>
    </StyledAudioPlayer>
  );
}

export default AudioPlayer;
