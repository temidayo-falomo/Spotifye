import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../global/Context";
import { StyledAudioPlayer } from "./AudioPlayer.styled";
import {
  RiPictureInPictureFill,
  RiSkipBackFill,
  RiSkipForwardFill,
} from "react-icons/ri";
import { BiLibrary, BiSearch, BiShuffle } from "react-icons/bi";
import { TbDevices2, TbPlaylist, TbRepeat } from "react-icons/tb";
import { BsHeart, BsHeartFill, BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiHome, HiOutlineViewList } from "react-icons/hi";
import { RxSpeakerLoud } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import Lyrics from "../lyrics/Lyrics";
import UpNext from "../upNext/UpNext";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import { useCookies } from "react-cookie";
import { MdVolumeMute } from "react-icons/md";

function AudioPlayer() {
  let navigate = useNavigate();

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
    displayAudioPlayerMobile,
    setDisplayAudioPlayerMobile,
  } = useContext(AppContext);

  const [cookies, setCookie] = useCookies(["user"]);

  const [number, setNumber] = useState<number>(1);
  const [lyricsText, setLyricsText] = useState<string>("");

  const [progress, setProgress] = useState<any>(0);
  const [length, setLength] = useState<any>(0);

  const [shuffleClicked, setShuffleClicked] = useState<boolean>(false);
  const clickRef = useRef<any>();

  const [displayLyricsandRelated, setDisplayLyricsandRelated] =
    useState<boolean>(false);

  const [volume, setVolume] = useState<number>(60);

  const [mute, setMute] = useState<boolean>(false);

  const handleDisplayAudioPlayer = () => {
    setDisplayAudioPlayer(!displayAudioPlayer);
  };

  const handleNumber = (num: number) => {
    setNumber(num);
  };

  const handleFetchLyrics = () => {
    fetch(
      `${process.env.REACT_APP_PROXY_URL}` +
        encodeURIComponent(
          `https://lyrist.vercel.app/api/:${currentSong?.title}/:${currentSong?.artist?.name}`
        )
    )
      .then((res) => res.json())
      .then((data) => {
        setLyricsText(data.lyrics);
      })
      .catch((err) => {
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
      (x: { title: string | undefined }) => x.title === currentSong?.title
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
      .put("https://spotifye-backend.vercel.app/api/like-song", {
        currentSong,
        userId: cookies.user,
      })
      .catch((err) => console.error(err));

    setUser({
      ...user,
      likedSongs: [...user.likedSongs, currentSong],
    });
  };

  const handleRemovelike = async () => {
    await axios
      .put("https://spotifye-backend.vercel.app/api/unlike-song", {
        currentSong,
        userId: cookies.user,
      })
      .catch((err) => console.error(err));

    setUser({
      ...user,
      likedSongs: user.likedSongs.filter(
        (song: {
          title: string | undefined;
          artist: { name: string | undefined };
        }) => song.title !== currentSong?.title
      ),
    });
  };

  useEffect(() => {
    handleFetchLyrics();
  }, [currentSong]);

  useEffect(() => {
    if (audioElem) {
      audioElem.current.volume = volume / 100;

      if (volume > 0) {
        setMute(false);
      } else if (volume <= 0) {
        setMute(true);
      }
    }
  }, [volume, audioElem]);

  return (
    <StyledAudioPlayer
      displayAudioPlayer={displayAudioPlayer}
      displayLyricsandRelated={displayLyricsandRelated}
      displayAudioPlayerMobile={displayAudioPlayerMobile}
    >
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
        <div
          className="avatar img-def"
          style={{
            backgroundImage: `url(${user?.userAvatar})`,
          }}
          onClick={() => {
            if (user) {
              navigate("/");
            } else {
              navigate("/login");
            }
          }}
        >
          {!user?.userAvatar && <FcGoogle />}
        </div>
      </div>
      <div className="main-info row">
        <div
          className="big-img img-def"
          onClick={playPause}
          style={{
            backgroundImage: `url(${
              currentSong?.album?.cover_xl ||
              `https://e-cdns-images.dzcdn.net/images/cover/${currentSong?.md5_image}/1000x1000-000000-80-0-0.jpg`
            })`,
          }}
        >
          <div className="grd"></div>
        </div>

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
              <Lyrics
                lyricsText={lyricsText}
                handleFetchLyrics={handleFetchLyrics}
              />
            </div>
          )}
        </div>
      </div>

      <div
        className="audio-player-container"
        // onClick={handleDisplayAudioPlayer}
      >
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
            <span
              className="pointer"
              onClick={() => {
                navigate(
                  `/artiste/${currentSong?.artist?.id}/${currentSong?.artist?.name}`
                );
              }}
            >
              {currentSong?.artist?.name}
            </span>
          </div>
          <div
            className="row gap-1 center"
            style={{ marginLeft: "1rem", fontSize: "1.5rem", gap: "1.5rem" }}
          >
            <RiPictureInPictureFill
              onClick={handleDisplayAudioPlayer}
              className="pointer"
            />
            <AiOutlineCloseCircle
              className="pointer close"
              onClick={() => setDisplayAudioPlayerMobile(false)}
            />
          </div>
        </div>

        <div className="slide">
          <div className="col center gap-1">
            <div className="row gap-1 center">
              {user?.likedSongs.some((e: any) => e?.id === currentSong?.id) ? (
                <BsHeartFill
                  onClick={handleRemovelike}
                  className="pointer liked"
                />
              ) : (
                <BsHeart onClick={handleAddlike} className="pointer" />
              )}
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
              <TbPlaylist
                style={{
                  color: `${displayLyricsandRelated ? "#1DB954" : "#fff"}`,
                }}
                className="pointer"
                onClick={() => {
                  setDisplayLyricsandRelated(!displayLyricsandRelated);
                }}
              />
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
              title={currentSong?.title}
              src={currentSong?.preview}
              ref={audioElem}
              onTimeUpdate={onPlaying}
            />
          </div>
        </div>

        <div
          className="row center gap-1 end"
          style={{
            fontSize: "1.5rem",
          }}
        >
          <HiOutlineViewList />
          <TbDevices2 />
          <div className="row gap-5">
            {mute ? (
              <MdVolumeMute
                className="pointer"
                onClick={() => {
                  setVolume(50);
                }}
              />
            ) : (
              <RxSpeakerLoud
                className="pointer"
                onClick={() => {
                  setVolume(0);
                  setMute(true);
                }}
              />
            )}
            <input
              type="range"
              min="1"
              max="100"
              id="myRange"
              value={volume}
              onChange={(e: any) => setVolume(e.target.value)}
            ></input>
          </div>
        </div>
      </div>

      <div className="row center btw foot">
        <NavLink
          to="/"
          onClick={() => setDisplayAudioPlayer(false)}
          className={({ isActive }) =>
            isActive ? "active-link col center" : "col center"
          }
        >
          <HiHome />
          <span>Home</span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link col center" : "col center"
          }
          to="/search"
          onClick={() => setDisplayAudioPlayer(false)}
        >
          <BiSearch />
          <span>Search</span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link col center" : "col center"
          }
          onClick={() => setDisplayAudioPlayer(false)}
          to="/library"
        >
          <BiLibrary />
          <span>Library</span>
        </NavLink>
      </div>
    </StyledAudioPlayer>
  );
}

export default AudioPlayer;
