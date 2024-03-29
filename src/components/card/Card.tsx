import React, { useContext } from "react";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../global/Context";
import { StyledCard } from "./Card.styled";

function Card(props: any) {
  let navigate = useNavigate();

  const {
    homeData,
    setCurrentSong,
    playPause,
    setSongsList,
    setUnableToPlay,
    setDisplayAudioPlayerMobile,
  } = useContext(AppContext);

  const handleNavigateToArtiste = (
    artiste_id: string,
    artiste_name: string
  ) => {
    if (artiste_name && artiste_id) {
      navigate(`/artiste/${artiste_id}/${artiste_name}`);
    }
  };

  const handleNavigateToAlbum = (album_id: string, album_name: string) => {
    if (album_id && album_name) {
      navigate(`/album/${album_id}/${album_name}`);
    }
  };

  const handleAddSongsToLocalStorage = (currSong: object) => {
    setDisplayAudioPlayerMobile(true);
    if (props.itemData?.type === "track") {
      localStorage.setItem("songsList", JSON.stringify(homeData?.tracks?.data));
      setSongsList(homeData?.tracks?.data);

      localStorage.setItem("currentSong", JSON.stringify(currSong));
      setCurrentSong(currSong);

      playPause();
    }

    if (props.itemData?.type === "podcast") {
      setUnableToPlay(true);
    }
  };

  return (
    <StyledCard>
      <div
        onClick={() => {
          handleNavigateToAlbum(
            props.itemData?.album?.id,
            props.itemData?.album?.title
          );
        }}
        className="image img-def"
        style={{
          backgroundImage: `url(${
            props.itemData?.album?.cover_medium ||
            props.itemData?.picture_medium
          })`,
        }}
      ></div>
      <h4>
        {props.itemData?.title?.length > 18
          ? props.itemData?.title.slice(0, 18) + "..."
          : props.itemData?.title}
      </h4>
      {props.itemData?.artist && (
        <div className="row gap-5">
          <span
            onClick={() =>
              handleNavigateToArtiste(
                props.itemData?.artist?.id,
                props.itemData?.artist?.name
              )
            }
          >
            {props.itemData?.artist?.name?.length > 10
              ? props.itemData?.artist?.name.slice(0, 10)
              : props.itemData?.artist?.name}
          </span>

          <div style={{ display: "inline", textAlign: "center" }}>•</div>

          <span
            onClick={() =>
              handleNavigateToAlbum(
                props.itemData?.album?.id,
                props.itemData?.album?.title
              )
            }
          >
            {" "}
            {props.itemData?.album?.title?.length > 11
              ? props.itemData?.album?.title?.slice(0, 11) + "..."
              : props.itemData?.album?.title}
          </span>
        </div>
      )}
      {props.itemData?.type === "podcast" && (
        <span style={{ color: "gainsboro", fontSize: "0.8rem" }}>
          {" "}
          {props.itemData?.description.length > 70
            ? props.itemData?.description.slice(0, 70) + "..."
            : props.itemData?.description}
        </span>
      )}

      {props.itemData?.preview && (
        <button
          className="play-btn"
          onClick={() =>
            handleAddSongsToLocalStorage({
              id: props.itemData?.id,
              title: props.itemData?.title,
              artist: props.itemData?.artist,
              album: props.itemData?.album,
              preview: props.itemData?.preview,
              duration: props.itemData?.duration,
              link: props.itemData?.link,
              type: props.itemData?.type,
            })
          }
        >
          <FaPlay />
        </button>
      )}
    </StyledCard>
  );
}

export default Card;
