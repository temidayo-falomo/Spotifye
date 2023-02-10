import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArtisteInfo from "../../components/artiste-info/ArtisteInfo";
import Sidebar from "../../components/sidebar/Sidebar";
import { AppContext } from "../../global/Context";
import { StyledArtiste } from "./Artiste.styled";

function Artiste() {
  const id = useParams().id;
  let navigate = useNavigate();

  const {
    setArtisteData,
    setArtisteAlbums,
    setArtisteTracks,
    setArtisteRelated,
  } = useContext(AppContext);

  const fetchArtiste = async () => {
    setArtisteData(null);
    fetch(`https://api.deezer.com/artist/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArtisteData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchArtisteAlbums = async () => {
    setArtisteAlbums(null);
    fetch(`https://api.deezer.com/artist/${id}/albums`)
      .then((res) => res.json())
      .then((data) => {
        setArtisteAlbums(data.data);
        // console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchArtisteTracks = async () => {
    setArtisteTracks(null);
    fetch(`https://api.deezer.com/artist/${id}/top?limit=50`)
      .then((res) => res.json())
      .then((data) => {
        setArtisteTracks(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchArtisteRelated = async () => {
    fetch(`https://api.deezer.com/artist/${id}/related`)
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
    console.log("did");
  }, [navigate]);

  return (
    <StyledArtiste>
      <Sidebar />
      <ArtisteInfo />
    </StyledArtiste>
  );
}

export default Artiste;
