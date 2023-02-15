import React, { useContext } from "react";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../global/Context";
import { StyledAlbumCard } from "./AlbumCard.styled";

function AlbumCard(props: any) {
  const { setCurrentSong, playPause, setSongsList } = useContext(AppContext);
  let navigate = useNavigate();

  const playFirstSong = () => {
    fetch(
      "https://api.allorigins.win/raw?url=" +
        encodeURIComponent(
          `https://api.deezer.com/album/${props?.album?.id}/tracks`
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
  };

  const handleNavigateToAlbum = (album_id: string, album_name: string) => {
    navigate(`/album/${album_id}/${album_name}`);
  };

  return (
    <StyledAlbumCard className="a-card">
      <div
        className="image"
        style={{
          backgroundImage: `url(${props?.album?.cover_medium})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        onClick={() => {
          handleNavigateToAlbum(props?.album?.id, props?.album?.title);
        }}
      ></div>
      <h4>
        {" "}
        {props.album?.title?.length > 16
          ? props?.album?.title?.slice(0, 16) + "..."
          : props?.album?.title}
      </h4>
      <div className="row gap-5">
        <span>{props.album?.release_date?.split("-")[0]}</span>
        {props.album?.release_date && (
          <div style={{ display: "inline", textAlign: "center" }}>•</div>
        )}
        <span>{props.album?.type}</span>
      </div>

      <button
        className="play-btn"
        onClick={() => {
          playFirstSong();
        }}
      >
        <FaPlay />
      </button>
    </StyledAlbumCard>
  );
}

export default AlbumCard;
