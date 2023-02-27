import React, { useContext } from "react";
import { AppContext } from "../../global/Context";
import Navbar from "../navbar/Navbar";
import { StyledArtisteInfo } from "./ArtisteInfo.styled";
import { GoVerified } from "react-icons/go";
import Popular from "./popular/Popular";
import Discography from "./discography/Discography";
import Related from "./fans-also-like/Related";
import PlayTrackMid from "../play-track-mid/PlayTrackMid";

function ArtisteInfo() {
  const { artisteData,  } = useContext(AppContext);

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
        
        <PlayTrackMid />

        <Popular />
        <Discography />
        <Related />
      </div>
    </StyledArtisteInfo>
  );
}

export default ArtisteInfo;
