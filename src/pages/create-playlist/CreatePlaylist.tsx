import React, { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import CreatePlaylistIfo from "../../components/create-playlist-info/CreatePlaylistInfo";
import Sidebar from "../../components/sidebar/Sidebar";
import { AppContext } from "../../global/Context";
import { StyledCreatePlaylist } from "./CreatePlaylist.styled";

function CreatePlaylist() {
  const { user } = useContext(AppContext);

  const [cookies, setCookie] = useCookies(["user"]);
  let navigate = useNavigate();

  useEffect(() => {
    if (!cookies.user) {
      navigate("/404");
    }
  }, []);

  return (
    <StyledCreatePlaylist>
      <Sidebar />
      {user && <CreatePlaylistIfo />}
    </StyledCreatePlaylist>
  );
}

export default CreatePlaylist;
