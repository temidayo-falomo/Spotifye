import React, { useContext } from "react";
import CreatePlaylistIfo from "../../components/create-playlist-info/CreatePlaylistInfo";
import Sidebar from "../../components/sidebar/Sidebar";
import { AppContext } from "../../global/Context";
import { StyledCreatePlaylist } from "./CreatePlaylist.styled";

function CreatePlaylist() {
  const { user } = useContext(AppContext);

  return (
    <StyledCreatePlaylist>
      <Sidebar />
      {user && <CreatePlaylistIfo />}
    </StyledCreatePlaylist>
  );
}

export default CreatePlaylist;
