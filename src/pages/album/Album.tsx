import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumInfo from "../../components/album-info/AlbumInfo";
import Loading from "../../components/loading/Loading";
import Sidebar from "../../components/sidebar/Sidebar";
import { StyledAlbum } from "./Album.styled";

function Album() {
  const id = useParams().id;

  const [albumData, setAlbumData] = useState<any>([]);

  const [loading, setLoading] = useState(true);

  const fetchAlbum = async () => {
    setAlbumData(null);
    fetch(
      "https://n3rdy-cors-proxy.glitch.me/useproxy?link=" +
        encodeURIComponent(`https://api.deezer.com/album/${id}`)
    )
      .then((res) => res.json())
      .then((data) => {
        setAlbumData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <StyledAlbum>
      <Sidebar />
      {loading ? <Loading /> : <AlbumInfo albumData={albumData} />}
    </StyledAlbum>
  );
}

export default Album;
