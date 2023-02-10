import React from "react";
import { MdExplicit } from "react-icons/md";
import { Link } from "react-router-dom";
import { StyledSongCardRow } from "./SongCardRow.styled";

function SongCardRow(props: any) {
  return (
    <StyledSongCardRow>
      <div className="init-row row gap-1 center">
        <span>{props.index + 1}</span>
        <div className="col gap-5">
          <h4>{props.song?.title}</h4>
          <Link
            to={`/artiste/${props.song?.artist?.id}/${props.song?.artist?.name}`}
            className="row center gap-5"
            style={{ alignItems: "center" }}
          >
            {" "}
            {props.song?.explicit_lyrics && <MdExplicit />}
            {props.song?.artist?.name}
          </Link>
        </div>
      </div>

      {/* <span style={{ display: "none" }}>lv</span> */}

      <span>
        {String(props.song?.duration).charAt(0) + ":"}
        {String(props.song?.duration).charAt(1)}
        {String(props.song?.duration).charAt(2)}
      </span>
    </StyledSongCardRow>
  );
}

export default SongCardRow;
