import React, { useContext, useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { AppContext } from "../../../global/Context";
import AlbumCard from "../../album-card/AlbumCard";
import { StyledDiscography } from "./Discography.styled";

function Discography() {
  const { artisteAlbums } = useContext(AppContext);
  const [numStart, setNumStart] = useState(0);
  const [numEnd, setNumEnd] = useState(6);

  const handleMoveRight = () => {
    if (numEnd <= artisteAlbums?.length - 2) {
      setNumStart(numStart + 1);
      setNumEnd(numEnd + 1);
    }
  };

  const handleMoveLeft = () => {
    if (numStart >= 1) {
      setNumStart(numStart - 1);
      setNumEnd(numEnd - 1);
    }
  };

  return (
    <StyledDiscography>
      <div className="row center btw" style={{ marginBottom: "2rem" }}>
        <div>
          <h2>Discography</h2>
        </div>

        <div className="row center gap-5 icons">
          <BsArrowLeftCircle onClick={handleMoveLeft} className="pointer" />
          <BsArrowRightCircle onClick={handleMoveRight} className="pointer" />
        </div>
      </div>

      <div className="discography-row row gap-1">
        {artisteAlbums
          ?.filter((obj: any, index: any) => {
            return (
              index ===
              artisteAlbums.findIndex((o: any) => obj?.title === o?.title)
            );
          })
          ?.slice(numStart, numEnd)
          .map((album: any, index: number) => {
            return <AlbumCard key={index} album={album} />;
          })}
      </div>
    </StyledDiscography>
  );
}

export default Discography;
