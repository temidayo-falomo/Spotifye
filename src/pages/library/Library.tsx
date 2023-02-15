import React from "react";
import LibraryInfo from "../../components/library-info/LibraryInfo";
import Sidebar from "../../components/sidebar/Sidebar";
import { StyledLibrary } from "./Library.styled";

function Library() {
  return (
    <StyledLibrary>
      <Sidebar />
      <LibraryInfo />
    </StyledLibrary>
  );
}

export default Library;
