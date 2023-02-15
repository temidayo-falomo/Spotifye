import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { StyledPlaylist } from "./Playlist.styled";

function Playlist() {
  return (
    <StyledPlaylist>
      <Sidebar />
      <div></div>
    </StyledPlaylist>
  );
}

export default Playlist;
