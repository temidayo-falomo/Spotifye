import React from "react";
import CreatePlaylistIfo from "../../components/create-playlist-info/CreatePlaylistInfo";
import Sidebar from "../../components/sidebar/Sidebar";
import { StyledCreatePlaylist } from "./CreatePlaylist.styled";

function CreatePlaylist() {
  return (
    <StyledCreatePlaylist>
      <Sidebar />
      <CreatePlaylistIfo />
    </StyledCreatePlaylist>
  );
}

export default CreatePlaylist;
