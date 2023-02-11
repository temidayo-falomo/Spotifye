import React from "react";
import { StyledTopArtisteCard } from "./TopArtisteCard.styled";

function TopArtisteCard(props: any) {
  return (
    <StyledTopArtisteCard>
      <div
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
