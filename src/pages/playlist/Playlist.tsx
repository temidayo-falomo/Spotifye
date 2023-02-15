import React from "react";
import PlaylistInfo from "../../components/playlist-info/PlaylistInfo";
import Sidebar from "../../components/sidebar/Sidebar";
import { StyledPlaylist } from "./Playlist.styled";

function Playlist() {
  return (
    <StyledPlaylist>
      <Sidebar />
      <PlaylistInfo />
    </StyledPlaylist>
  );
}

export default Playlist;
