import React from "react";
import { StyledLyrics } from "./Lyrics.styled";

function Lyrics(props: any) {
  return (
    <StyledLyrics>
      <article>
        {props?.lyricsText}
        {!props?.lyricsText && (
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        )}
      </article>
    </StyledLyrics>
  );
}

export default Lyrics;
