import React, { useContext, useEffect, useState } from "react";
import { BsHeartFill, BsPauseFill, BsPlayFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../global/Context";
import { StyledPlayTrackMid } from "./PlayTrackMid.styled";

function PlayTrackMid(props: any) {
  const location = useLocation();
  const [clicked, setClicked] = useState(false);
  const [liked, setLiked] = useState(false);

  const {
    playPause,
    isPlaying,
    setDisplayAudioPlayerMobile,
    setCurrentSong,
    setSongsList,
    user,
  } = useContext(AppContext);

  const [modal, setModal] = useState(false);

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

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 2000);
    }
  }, [clicked]);

  return (
    <StyledPlayTrackMid location={location}>
      {modal && (
        <div className="mod">
          <span
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setClicked(!clicked);
            }}
          >
            {clicked ? "Copied!" : "Copy link to playlist"}
          </span>
          <span onClick={props.handleDeletePlaylist}>Delete</span>
          <span
            onClick={() => {
              props.setShowEdit(true);
            }}
          >
            Edit details
          </span>
          <span
            style={{
              opacity: 0.5,
              cursor: "not-allowed",
            }}
          >
            Radio
          </span>
        </div>
      )}
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
          <>
            {liked ? (
              <BsHeartFill
                className="pointer"
                onClick={() => setLiked(!liked)}
              />
            ) : (
              <FiHeart className="pointer" onClick={() => setLiked(!liked)} />
            )}
          </>
        ) : (
          <>
            {!user?.followedArtists?.some(
              (artiste: any) => artiste.artistId === props.artistId
            ) ? (
              <button className="follow-btn" onClick={props.handleFollowArtist}>
                Follow
              </button>
            ) : (
              <button
                className="follow-btn"
                onClick={props.handleUnfollowArtist}
              >
                Following
              </button>
            )}
          </>
        )}

        {user?.id === props.userId && (
          <>
            {props.handleDeletePlaylist && (
              <>
                {modal ? (
                  <MdClose
                    className="pointer"
                    onClick={() => {
                      setModal(!modal);
                    }}
                  />
                ) : (
                  <SlOptions
                    className="pointer"
                    onClick={() => {
                      setModal(!modal);
                    }}
                  />
                )}
              </>
            )}
          </>
        )}
      </div>
    </StyledPlayTrackMid>
  );
}

export default PlayTrackMid;
