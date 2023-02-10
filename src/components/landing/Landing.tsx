import React from "react";
import Charts from "../charts/Charts";
import Greeting from "../greeting/Greeting";
import Navbar from "../navbar/Navbar";
import Radio from "../radio/Radio";
import { StyledLanding } from "./Landing.styled";

function Landing() {
  return (
    <StyledLanding>
      <Navbar />
      <Greeting />
      <Charts />
      <Radio />
    </StyledLanding>
  );
}

export default Landing;
