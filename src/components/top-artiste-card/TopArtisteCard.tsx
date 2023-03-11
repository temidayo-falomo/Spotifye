import React, { useContext, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../global/Context";
import { StyledTopArtisteCard } from "./TopArtisteCard.styled";

function TopArtisteCard(
  props: //   {
  //   itemData: {
  //     id: string;
  //     name: string;
  //     picture_medium: string;
  //     picture_big: string;
  //     picture_xl: string;
  //     nb_fan: number;
  //     tracklist: string;
  //     type: string;
  //   };
  // }

  any

  //plssss
) {
  let navigate = useNavigate();
  const {
    setCurrentSong,
    playPause,
    setSongsList,
    setDisplayAudioPlayerMobile,
  } = useContext(AppContext);
  const [results, setResults] = useState<any>([]);

  const handleNavigateToArtiste = (
    artiste_id: string,
    artiste_name: string
  ) => {
    navigate(`/artiste/${artiste_id}/${artiste_name}`);
  };

  const playFirstSong = () => {
    setDisplayAudioPlayerMobile(true);
    fetch(
      "https://n3rdy-cors-proxy.glitch.me/useproxy?link=" +
        encodeURIComponent(
          `https://api.deezer.com/artist/${props.itemData?.id}/top?limit=30`
        )
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data.data);
        localStorage.setItem(
          "songsList",
          JSON.stringify(data.data.slice(0, 15))
        );
        setSongsList(data.data.slice(0, 15));
        localStorage.setItem("currentSong", JSON.stringify(data.data[0]));
        setCurrentSong(data.data[0]);
        playPause();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledTopArtisteCard>
      <button
        className="play-btn"
        onClick={() => {
          handleNavigateToArtiste(props.itemData?.id, props.itemData?.name);
          playFirstSong();
        }}
      >
        <FaPlay />
      </button>
      <div
        onClick={() =>
          handleNavigateToArtiste(props.itemData?.id, props.itemData?.name)
        }
        className="image"
        style={{
          backgroundImage: `url(${props.itemData?.picture_xl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="col gap-1">
        <h4>{props.itemData?.name}</h4>
        <span>{props.itemData?.type}</span>
      </div>
    </StyledTopArtisteCard>
  );
}

export default TopArtisteCard;
