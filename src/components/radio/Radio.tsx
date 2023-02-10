import React from "react";
import Card from "../card/Card";
import { StyledRadio } from "./Radio.styled";

function Radio() {
  return (
    <StyledRadio>
      <h3>Radios</h3>

      <div className="radios row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </StyledRadio>
  );
}

export default Radio;
