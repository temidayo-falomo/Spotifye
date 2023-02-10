import React from "react";
import { StyledAlbumCard } from "./AlbumCard.styled";

function AlbumCard(props: any) {
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
      ></div>
      <h4>
        {" "}
        {props.album?.title?.length > 16
          ? props?.album?.title?.slice(0, 16) + "..."
          : props?.album?.title}
      </h4>
      <div className="row gap-5">
        <span>{props.album?.release_date?.split("-")[0]}</span>
        <div style={{ display: "inline", textAlign: "center" }}>•</div>
        <span>{props.album?.type}</span>
      </div>
    </StyledAlbumCard>
  );
}

export default AlbumCard;
