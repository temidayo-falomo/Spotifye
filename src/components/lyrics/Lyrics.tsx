import React from "react";
import { StyledLyrics } from "./Lyrics.styled";

function Lyrics(props: any) {
  return (
    <StyledLyrics>
      <article>{props?.lyricsText}</article>
    </StyledLyrics>
  );
}

export default Lyrics;
