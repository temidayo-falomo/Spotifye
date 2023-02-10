import moment from "moment";
import React, { useContext } from "react";
import { MdExplicit } from "react-icons/md";
import { AppContext } from "../../../global/Context";
import { StyledPopular } from "./Popular.styled";

function Popular() {
  const { artisteAlbums, artisteTracks } = useContext(AppContext);

  return (
    <StyledPopular>
      <h3>Popular</h3>

      <div className="popular-col col">
        {artisteTracks?.slice(0, 5).map((track: any, index: number) => {
          return (
            <div className="popular-card row center btw" key={index}>
              <div className="init-row row gap-1 center">
                <span>{index + 1}</span>
                <div
                  className="artist-img"
                  style={{
                    backgroundImage: `url(${track?.album?.cover_medium})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <span>{track?.title}</span>
                {track?.explicit_lyrics && <MdExplicit />}
              </div>

              {/* <span>1,759,456</span> */}

              <span style={{ display: "none" }}>lv</span>

              <span>
                {String(track?.duration).charAt(0) + ":"}
                {String(track?.duration).charAt(1)}
                {String(track?.duration).charAt(2)}
              </span>
            </div>
          );
        })}
      </div>
    </StyledPopular>
  );
}

export default Popular;
