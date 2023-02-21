import React, { useContext } from "react";
import { AppContext } from "../../global/Context";
import Navbar from "../navbar/Navbar";
import { StyledArtisteInfo } from "./ArtisteInfo.styled";
import { GoVerified } from "react-icons/go";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import Popular from "./popular/Popular";
import Discography from "./discography/Discography";
import Related from "./fans-also-like/Related";

function ArtisteInfo() {
  const { artisteData, isPlaying, playPause } = useContext(AppContext);

  return (
    <StyledArtisteInfo id="scroller">
      <div
        className="hero-bg img-def"
        style={{
          backgroundImage: `url(${artisteData?.picture_xl})`,
        }}
      >
        <Navbar />
        <div className="info-txt">
          <span className="row gap-5 center">
            {artisteData?.type}
            <GoVerified />
          </span>
          <h1>{artisteData?.name}</h1>
          <p>{artisteData?.nb_fan?.toLocaleString()} fans</p>
        </div>
      </div>

      <div className="dark-bg">
        <div className="follow row center">
          <button
            className="play"
            style={{ fontSize: "2.5rem" }}
            onClick={playPause}
          >
            {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
          </button>

          <button className="follow-btn">Follow</button>
        </div>

        <Popular />
        <Discography />
        <Related />
      </div>
    </StyledArtisteInfo>
  );
}

export default ArtisteInfo;
