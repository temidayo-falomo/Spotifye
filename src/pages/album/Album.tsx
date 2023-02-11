import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import AlbumInfo from "../../components/album-info/AlbumInfo";
import Sidebar from "../../components/sidebar/Sidebar";
import { AppContext } from "../../global/Context";
import { StyledAlbum } from "./Album.styled";

function Album() {
  const id = useParams().id;

  const { setAlbumData } = useContext(AppContext);

  const fetchAlbum = async () => {
    setAlbumData(null);
    fetch(
      "https://api.allorigins.win/raw?url=" +
        encodeURIComponent(`https://api.deezer.com/album/${id}`)
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAlbumData(data);
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
      <AlbumInfo />
    </StyledAlbum>
  );
}

export default Album;
