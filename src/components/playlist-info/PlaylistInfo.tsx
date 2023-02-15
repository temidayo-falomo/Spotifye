import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { StyledPlaylistInfo } from "./PlaylistInfo.styled";
import { ColorExtractor } from "react-color-extractor";

function PlaylistInfo() {
  const [colors, setColors] = useState<any>(null);

  const getColors = (detectedColorCodes: any) => {
    setColors(detectedColorCodes);
  };

  return (
    <StyledPlaylistInfo>
      <div
        className="her-bg"
        style={{
          backgroundColor: colors ? colors[0] : "#000",
        }}
      >
        <Navbar />
        <div className="extractor-holder">
          <ColorExtractor getColors={getColors}>
            <img
              src="https://i0.wp.com/www.six9ja.com/wp-content/uploads/2022/06/Rema.jpeg?fit=1024%2C1022&ssl=1"
              style={{ width: 0, height: 0 }}
              alt="sample"
            />
          </ColorExtractor>

          <h1>MixTAPE Playlist</h1>
        </div>
        <div className="row main center gap-1">
          <div className="cover-img"></div>
          <div className="col gap-1">
            <span>PLAYLIST</span>
            <h1>Ruger Mix</h1>
            <p>Burna, Omah Lay, Arya Star</p>
          </div>
        </div>
      </div>
    </StyledPlaylistInfo>
  );
}

export default PlaylistInfo;
