import React, { useContext, useState } from "react";
import { MdExplicit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../global/Context";
import Navbar from "../navbar/Navbar";
import { StyledAlbumInfo } from "./AlbumInfo.styled";
import { CgTimer } from "react-icons/cg";
import SongCardRow from "../song-card-row/SongCardRow";
import { ColorExtractor } from "react-color-extractor";

function AlbumInfo() {
  const { albumData } = useContext(AppContext);
  const [colors, setColors] = useState<any>(null);
  let navigate = useNavigate();

  const getColors = (detectedColorCodes: any) => {
    setColors(detectedColorCodes);
  };

  return (
    <StyledAlbumInfo>
      <div
        className="hero-bg"
        style={{
          backgroundColor: colors ? colors[0] : "#000",
        }}
      >
        <Navbar />
        <div className="row gap-1 center" style={{ zIndex: "999" }}>
          <div
            className="xl_image img-def"
            style={{
              backgroundImage: `url(${albumData?.cover_xl})`,
            }}
          ></div>
          <div className="col">
            <span className="row center gap-5">
              {albumData?.explicit_lyrics && <MdExplicit />}
              {albumData?.record_type}
            </span>
            <h1>{albumData?.title}</h1>
            <div className="row center gap-5 desc">
              {albumData && (
                <div
                  className="tiny-circle img-def pointer"
                  style={{
                    backgroundImage: `url(${albumData?.artist?.picture_small})`,
                  }}
                  onClick={() =>
                    navigate(
                      `/artiste/${albumData?.artist?.id}/${albumData?.artist?.name}`
                    )
                  }
                ></div>
              )}
              <Link
                to={`/artiste/${albumData?.artist?.id}/${albumData?.artist?.name}`}
              >
                {albumData?.artist?.name}
              </Link>
              {albumData && <span>•</span>}
              <span>{albumData?.release_date?.split("-")[0]}</span>
              {albumData && <span>•</span>}
              {albumData && <span>{albumData?.nb_tracks} songs,</span>}
              <span>{albumData?.duration}</span>
            </div>
          </div>

          <div className="extractor-holder">
            <ColorExtractor getColors={getColors}>
              <img
                src={albumData?.cover_xl}
                style={{ width: 0, height: 0 }}
                alt="sample"
              />
            </ColorExtractor>
          </div>
        </div>
      </div>

      <div className="mid"></div>

      <div className="row btw center title-dur">
        <div className="row gap-5 center ">
          <span>#</span>
          <span>TITLE</span>
        </div>

        <CgTimer />
      </div>

      <div className="col gap-1 album-songs">
        {albumData?.tracks?.data.map((song: any, index: number) => {
          return <SongCardRow key={index} song={song} index={index} />;
        })}
      </div>
    </StyledAlbumInfo>
  );
}

export default AlbumInfo;
