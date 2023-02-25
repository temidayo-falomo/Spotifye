import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import PlaylistInfo from "../../components/playlist-info/PlaylistInfo";
import Sidebar from "../../components/sidebar/Sidebar";
import { AppContext } from "../../global/Context";
import { StyledPlaylist } from "./Playlist.styled";

function Playlist() {
  const id = useParams().id;
  const { setPlaylistData } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  const fetchCategory = async () => {
    fetch(
      // "https://n3rdy-cors-proxy.glitch.me/useproxy?link=" +
      //   encodeURIComponent(
          `https://api.deezer.com/playlist/${id}/tracks`
          // )
    )
      .then((res) => res.json())
      .then((data) => {
        setPlaylistData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <StyledPlaylist>
      <Sidebar />
      {loading ? <Loading /> : <PlaylistInfo />}
    </StyledPlaylist>
  );
}

export default Playlist;
