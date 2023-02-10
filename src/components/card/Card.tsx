import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledCard } from "./Card.styled";

function Card(props: any) {
  let navigate = useNavigate();

  const handleNavigateToArtiste = (
    artiste_id: string,
    artiste_name: string
  ) => {
    navigate(`/artiste/${artiste_id}/${artiste_name}`);
  };

  const handleNavigateToAlbum = (album_id: string, album_name: string) => {
    navigate(`/album/${album_id}/${album_name}`);
  };

  return (
    <StyledCard>
      <div
        className="image"
        style={{
          backgroundImage: `url(${props.itemData?.album?.cover_medium})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <h4>
        {props.itemData?.title?.length > 18
          ? props.itemData?.title.slice(0, 18) + "..."
          : props.itemData?.title}
      </h4>
      <div className="row gap-5">
        <span
          onClick={() =>
            handleNavigateToArtiste(
              props.itemData?.artist?.id,
              props.itemData?.artist?.name
            )
          }
        >
          {props.itemData?.artist?.name}
        </span>
        {props.itemData && (
          <div style={{ display: "inline", textAlign: "center" }}>•</div>
        )}
        <span
          onClick={() =>
            handleNavigateToAlbum(
              props.itemData?.album?.id,
              props.itemData?.album?.title
            )
          }
        >
          {" "}
          {props.itemData?.album?.title?.length > 12
            ? props.itemData?.album?.title?.slice(0, 12) + "..."
            : props.itemData?.album?.title}
        </span>
      </div>
    </StyledCard>
  );
}

export default Card;
