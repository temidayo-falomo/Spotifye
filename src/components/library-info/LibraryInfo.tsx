import React from "react";
import { BiLibrary } from "react-icons/bi";
import Navbar from "../navbar/Navbar";
import { StyledLibraryInfo } from "./LibraryInfo.styled";

function LibraryInfo() {
  return (
    <StyledLibraryInfo>
      <Navbar />
      <div className="nothing">
        <h2 className="row center gap-5">
          <BiLibrary />
          Nothing to show yet
        </h2>
      </div>
    </StyledLibraryInfo>
  );
}

export default LibraryInfo;
