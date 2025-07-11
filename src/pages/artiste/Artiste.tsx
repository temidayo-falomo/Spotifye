import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArtisteInfo from "../../components/artiste-info/ArtisteInfo";
import Loading from "../../components/loading/Loading";
import Sidebar from "../../components/sidebar/Sidebar";
import { AppContext } from "../../global/Context";
import { StyledArtiste } from "./Artiste.styled";

function Artiste() {
  const id = useParams().id;
  let navigate = useNavigate();

  const { setArtisteAlbums, setArtisteTracks } = useContext(AppContext);

  const [loading, setLoading] = useState(true);
  const [artisteData, setArtisteData] = useState<any>(null);
  const [artisteRelated, setArtisteRelated] = useState<any>([]);

  const fetchArtiste = async () => {
    // setArtisteData(null);
    fetch(
      `${process.env.REACT_APP_PROXY_URL}` +
        encodeURIComponent(`https://api.deezer.com/artist/${id}`)
    )
      .then((res) => res.json())
      .then((data) => {
        setArtisteData(data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchArtisteAlbums = async () => {
    setArtisteAlbums(null);
    fetch(
      `${process.env.REACT_APP_PROXY_URL}` +
        encodeURIComponent(`https://api.deezer.com/artist/${id}/albums`)
    )
      .then((res) => res.json())
      .then((data) => {
        setArtisteAlbums(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchArtisteTracks = async () => {
    setArtisteTracks(null);
    fetch(
      `${process.env.REACT_APP_PROXY_URL}` +
        encodeURIComponent(`https://api.deezer.com/artist/${id}/top?limit=30`)
    )
      .then((res) => res.json())
      .then((data) => {
        setArtisteTracks(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchArtisteRelated = async () => {
    setArtisteRelated(null);
    setLoading(true);
    fetch(
      `${process.env.REACT_APP_PROXY_URL}` +
        encodeURIComponent(`https://api.deezer.com/artist/${id}/related`)
    )
      .then((res) => res.json())
      .then((data) => {
        setArtisteRelated(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchArtisteRadio = async () => {
    fetch(`https://api.deezer.com/artist/${id}/radio`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchArtistePlaylists = async () => {
    fetch(`https://api.deezer.com/artist/${id}/playlists`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchArtiste();
    fetchArtisteAlbums();
    fetchArtisteTracks();
    fetchArtisteRelated();
  }, [navigate]);

  return (
    <StyledArtiste>
      <Sidebar />
      {loading ? (
        <Loading />
      ) : (
        <ArtisteInfo
          artisteData={artisteData}
          artisteRelated={artisteRelated}
        />
      )}
    </StyledArtiste>
  );
}

export default Artiste;
