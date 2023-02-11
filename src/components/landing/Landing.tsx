import React from "react";
import Charts from "../charts/Charts";
import Greeting from "../greeting/Greeting";
import Navbar from "../navbar/Navbar";
import Podcasts from "../podcasts/Podcasts";
import PopularArtistes from "../popular-artistes/PopularArtistes";
import { StyledLanding } from "./Landing.styled";

function Landing() {
  return (
    <StyledLanding>
      <Navbar />
      <Greeting />
      <Charts />
      <PopularArtistes />
      <Podcasts />
    </StyledLanding>
  );
}

export default Landing;
