import React, { useContext, useEffect, useRef, useState } from "react";
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
import { BsHeart, BsHeartFill, BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiOutlineViewList } from "react-icons/hi";
import { RxSpeakerLoud } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import Lyrics from "../lyrics/Lyrics";
import UpNext from "../upNext/UpNext";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useCookies } from "react-cookie";

function AudioPlayer() {
  const {
    displayAudioPlayer,
    setDisplayAudioPlayer,
    currentSong,
    audioElem,
    playPause,
    isPlaying,
    setCurrentSong,
    setIsPlaying,
    songsList,
    user,
    setUser,
  } = useContext(AppContext);

  const [cookies, setCookie] = useCookies(["user"]);

  const [number, setNumber] = useState<number>(1);
  const [lyricsText, setLyricsText] = useState<string>("");

  const [progress, setProgress] = useState<any>(0);
  const [length, setLength] = useState<any>(0);

  const [shuffleClicked, setShuffleClicked] = useState<boolean>(false);
  const clickRef = useRef<any>();

  const handleDisplayAudioPlayer = () => {
    setDisplayAudioPlayer(!displayAudioPlayer);
  };

  const handleNumber = (num: number) => {
    setNumber(num);
  };

  const handleFetchLyrics = () => {
    fetch(
      "https://n3rdy-cors-proxy.glitch.me/useproxy?link=" +
        encodeURIComponent(
          `https://lyrist.vercel.app/api/:${currentSong?.title}/:${currentSong?.artist?.name}`
        )
    )
      .then((res) => res.json())
      .then((data) => {
        setLyricsText(data.lyrics);
      })
      .catch((err) => {
        console.log(err);
        setLyricsText("No lyrics found");
      });
  };

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setProgress((ct / duration) * 100);
    setLength(duration);

    if (ct === duration) {
      setIsPlaying(false);
      nextSong();
    }
  };

  const checkWidth = (e: any) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * length;
  };

  const nextSong = () => {
    const random = Math.floor(Math.random() * songsList.length);
    const index = songsList.findIndex(
      (x: any) => x.title === currentSong?.title
    );

    if (index === songsList.length - 1) {
      setCurrentSong(songsList[0]);
      setProgress(0);
      setIsPlaying(true);

      setTimeout(function () {
        audioElem.current.play();
      }, 150);
    } else {
      setCurrentSong(songsList[shuffleClicked ? random : index + 1]);
      setProgress(0);
      setIsPlaying(true);

      setTimeout(function () {
        audioElem.current.play();
      }, 150);
    }

    audioElem.current.currentTime = 0;
  };

  const prevSong = () => {
    const index = songsList.findIndex(
      (x: any) => x.title === currentSong?.title
    );

    if (index === 0) {
      setCurrentSong(songsList[0]);
    } else {
      setCurrentSong(songsList[index - 1]);
      setProgress(0);
      setIsPlaying(true);

      setTimeout(function () {
        audioElem.current.play();
      }, 150);
    }
  };

  const handleAddlike = async () => {
    await axios
      .put("http://localhost:8080/api/like-song", {
        currentSong,
        userId: cookies.user,
      })
      .catch((err) => console.error(err));

    setUser({
      ...user,
      likedSongs: [...user.likedSongs, currentSong],
    });
  };

  useEffect(() => {
    handleFetchLyrics();
  }, [currentSong]);

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
          className="big-img img-def"
          style={{
            backgroundImage: `url(${
              currentSong?.album?.cover_xl ||
              `https://e-cdns-images.dzcdn.net/images/cover/${currentSong?.md5_image}/1000x1000-000000-80-0-0.jpg`
            })`,
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
          {number === 1 && <UpNext setProgress={setProgress} />}
          {number === 2 && (
            <div className="lyrics">
              <Lyrics lyricsText={lyricsText} />
            </div>
          )}
        </div>
      </div>

      <div className="audio-player-container">
        <div className="row gap-1 center">
          <div
            className="thumbnail-img img-def"
            style={{
              backgroundImage: `url(${
                currentSong?.album?.cover_big ||
                `https://e-cdns-images.dzcdn.net/images/cover/${currentSong?.md5_image}/250x250-000000-80-0-0.jpg`
              })`,
            }}
          ></div>
          <div className="col gap-5">
            <h4>{currentSong?.title}</h4>
            <span>{currentSong?.artist?.name}</span>
          </div>
          <div className="row gap-1 center" style={{ marginLeft: "1rem" }}>
            {user?.likedSongs.some((e: any) => e?.id === currentSong?.id) ? (
              <BsHeartFill
                // onClick={handleRemoveLike}
                className="pointer liked"
              />
            ) : (
              <BsHeart onClick={handleAddlike} className="pointer" />
            )}
            <RiPictureInPictureFill
              onClick={handleDisplayAudioPlayer}
              className="pointer"
            />
          </div>
        </div>

        <div className="slide">
          <div className="col center gap-1">
            <div className="row gap-1 center">
              <BiShuffle
                className="pointer"
                onClick={() => {
                  setShuffleClicked(!shuffleClicked);
                }}
                style={{
                  color: `${shuffleClicked ? "#1DB954" : "#fff"}`,
                }}
              />
              <RiSkipBackFill onClick={prevSong} className="pointer" />
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
                onClick={playPause}
              >
                {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
              </button>
              <RiSkipForwardFill onClick={nextSong} className="pointer" />
              <TbRepeat />
            </div>
            <div
              className="slide-bar pointer"
              onClick={checkWidth}
              ref={clickRef}
            >
              <div
                className="snake"
                style={{
                  width: `${progress}%`,
                }}
              ></div>
            </div>
            <audio
              src={currentSong?.preview}
              ref={audioElem}
              onTimeUpdate={onPlaying}
            />
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
