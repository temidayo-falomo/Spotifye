import React, { useContext } from "react";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../global/Context";
import { StyledPlaylistCard } from "./PlaylistCard.styled";

function PlaylistCard(props: any) {
  const { setCurrentSong, playPause, setSongsList } = useContext(AppContext);
  let navigate = useNavigate();

  const playFirstSong = () => {
    fetch(
      "https://n3rdy-cors-proxy.glitch.me/useproxy?link=" +
        encodeURIComponent(
      `https://api.deezer.com/playlist/${props.playlist.id}/tracks`
      )
    )
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("songsList", JSON.stringify(data.data));
        setSongsList(data.data);

        localStorage.setItem("currentSong", JSON.stringify(data.data[0]));
        setCurrentSong(data.data[0]);

        playPause();
      })
      .catch((err) => {
        console.log(err);
      });

    navigate(
      `/playlist/${props.playlist.id}/${encodeURIComponent(
        props.playlist.title
      )}`
    );
    localStorage.setItem("currentPlaylistObj", JSON.stringify(props.playlist));
  };

  return (
    <StyledPlaylistCard>
      <div
        className="image img-def"
        style={{
          backgroundImage: `url(${props.playlist.picture_big})`,
        }}
        onClick={() => {
          navigate(`/playlist/${props.playlist.id}/${props.playlist.title}`);
          localStorage.setItem(
            "currentPlaylistObj",
            JSON.stringify(props.playlist)
          );
        }}
      ></div>
      <h4>
        {props.playlist.title?.length > 16
          ? props.playlist.title.slice(0, 16) + "..."
          : props.playlist?.title}
      </h4>
      <span>
        By{" "}
        {props.playlist.user?.name?.length > 20
          ? props.playlist.user?.name?.slice(0, 20) + "..."
          : props.playlist.user?.name}
      </span>

      <button
        className="play-btn"
        onClick={() => {
          playFirstSong();
        }}
      >
        <FaPlay />
      </button>
    </StyledPlaylistCard>
  );
}

export default PlaylistCard;
