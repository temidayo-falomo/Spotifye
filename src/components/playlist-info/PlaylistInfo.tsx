import React, { useContext, useState } from "react";
import Navbar from "../navbar/Navbar";
import { StyledPlaylistInfo } from "./PlaylistInfo.styled";
import { ColorExtractor } from "react-color-extractor";
import { FaPlay } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { AppContext } from "../../global/Context";
import SongCardRow from "../song-card-row/SongCardRow";
import { FiHeart } from "react-icons/fi";
import PlayTrackMid from "../play-track-mid/PlayTrackMid";

function PlaylistInfo() {
  const [colors, setColors] = useState<any>(null);
  const { playlistData } = useContext(AppContext);

  let currentPlaylistObj = JSON.parse(
    localStorage.getItem("currentPlaylistObj") || "{}"
  );

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
              src={currentPlaylistObj.picture_xl}
              style={{ width: 0, height: 0 }}
              alt="sample"
            />
          </ColorExtractor>
        </div>

        <div className="row main center gap-1 top-holder">
          <div
            className="cover-img img-def"
            style={{
              backgroundImage: `url(${currentPlaylistObj?.picture_xl})`,
            }}
          ></div>
          <div className="col gap-1">
            <span>PLAYLIST</span>
            <h1>{currentPlaylistObj?.title}</h1>
            <p>
              {playlistData?.slice(0, 3).map((song: any, index: number) => {
                return <span key={index}>{song?.artist.name}, </span>;
              })}
              & {playlistData?.length - 3} more
            </p>
          </div>
        </div>
      </div>

      {/* <div className="row mid center">
        <div className="play">
          <FaPlay />
        </div>

        <FiHeart className="pointer" />

        <SlOptions className="pointer" />
      </div> */}

      <PlayTrackMid allSongs={playlistData} />

      <div className="col gap-5">
        {playlistData?.map((song: any, index: number) => {
          return <SongCardRow song={song} index={index} key={index} />;
        })}
      </div>
    </StyledPlaylistInfo>
  );
}

export default PlaylistInfo;
