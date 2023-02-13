import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumInfo from "../../components/album-info/AlbumInfo";
import Loading from "../../components/loading/Loading";
import Sidebar from "../../components/sidebar/Sidebar";
import { AppContext } from "../../global/Context";
import { StyledAlbum } from "./Album.styled";

function Album() {
  const id = useParams().id;

  const { setAlbumData } = useContext(AppContext);

  const [loading, setLoading] = useState(true);

  const fetchAlbum = async () => {
    setAlbumData(null);
    fetch(
      "https://api.allorigins.win/raw?url=" +
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
      {loading ? <Loading /> : <AlbumInfo />}
    </StyledAlbum>
  );
}

export default Album;
