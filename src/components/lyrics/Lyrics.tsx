import React, { useEffect } from "react";
import { StyledLyrics } from "./Lyrics.styled";

function Lyrics(props: any) {
  // useEffect(() => {
  //   props.handleFetchLyrics();
  // }, []);

  // useEffect(() => {
  //   if (props?.lyricsText) {
  //     const lyrics = document.querySelector("article");
  //     lyrics?.scrollTo({
  //       top: lyrics?.scrollHeight,
  //       behavior: "smooth",
  //     });
  //   }
  // }, []);

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
