import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AudioPlayer from "./components/audio-player/AudioPlayer";
import { auth } from "./firebase/firebase-config";
import { AppContext } from "./global/Context";
import GlobalStyle from "./Globalstyles";
import Album from "./pages/album/Album";
import Artiste from "./pages/artiste/Artiste";
import Category from "./pages/category/Category";
import Home from "./pages/home/Home";
import Library from "./pages/library/Library";
import Login from "./pages/login/Login";
import Playlist from "./pages/playlist/Playlist";
import Search from "./pages/search/Search";

import { useCookies } from "react-cookie";
import CreatePlaylist from "./pages/create-playlist/CreatePlaylist";
import LikedSongs from "./pages/liked-songs/LikedSongs";

function App() {
  const [token, setToken] = React.useState<string | null>(null);
  const [cookies, setCookie] = useCookies(["user"]);

  //

  const audioElem = useRef<any>();
  const [isPlaying, setIsPlaying] = useState(false);

  //

  const [homeData, setHomeData] = React.useState([]);
  const [artisteData, setArtisteData] = React.useState([]);
  const [artisteAlbums, setArtisteAlbums] = useState([]);
  const [artisteTracks, setArtisteTracks] = useState([]);
  const [artisteRelated, setArtisteRelated] = useState([]);
  const [radioCategories, setRadioCategories] = useState([]);
  const [albumData, setAlbumData] = useState([]);

  const [searchData, setSearchData] = useState([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const [categoryData, setCategoryData] = useState([]);

  const [displayAudioPlayer, setDisplayAudioPlayer] = useState(false);
  const [displayAudioPlayerMobile, setDisplayAudioPlayerMobile] =
    useState(false);
  const [displaySidebar, setDisplaySidebar] = useState(true);

  const [songsList, setSongsList] = useState(
    JSON.parse(localStorage.getItem("songsList") || "[]")
  );

  const [currentSong, setCurrentSong] = useState(songsList[0]);

  const [unableToPlay, setUnableToPlay] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  const [playlistData, setPlaylistData] = useState([]);

  const [defaultGradientNum, setDefaultGradientNum] = useState(0);

  const [user, setUser] = useState<any>(null); //User Object

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  //* Function to get Current User From Backend.
  const getCurrentUser = (id: string) => {
    fetch(`http://localhost:8080/api/user/${id}`)
      .then((res) => res.json())
      .then((res) => {
        //set relevant states from api call
        setUser(res.user);
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isPlaying) {
      audioElem?.current?.play();
    } else {
      audioElem?.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    getCurrentUser(cookies.user);
  }, []);

  return (
    <AppContext.Provider
      value={{
        homeData,
        setHomeData,
        artisteData,
        setArtisteData,
        artisteAlbums,
        setArtisteAlbums,
        artisteTracks,
        setArtisteTracks,
        artisteRelated,
        setArtisteRelated,
        radioCategories,
        setRadioCategories,
        albumData,
        setAlbumData,

        searchValue,
        setSearchValue,
        searchData,
        setSearchData,
        searchLoading,
        setSearchLoading,

        categoryData,
        setCategoryData,

        displayAudioPlayer,
        setDisplayAudioPlayer,
        displaySidebar,
        setDisplaySidebar,

        songsList,
        setSongsList,

        currentSong,
        setCurrentSong,

        playPause,
        audioElem,
        isPlaying,
        setIsPlaying,

        unableToPlay,
        setUnableToPlay,

        playlistData,
        setPlaylistData,

        defaultGradientNum,
        setDefaultGradientNum,

        getCurrentUser,
        user,
        setUser,
      }}
    >
      <div className="App">
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artiste/:id/:name" element={<Artiste />} />
          <Route path="/search" element={<Search />} />
          <Route path="/album/:id/:name" element={<Album />} />
          <Route path="/category/:id/:name" element={<Category />} />
          <Route path="/playlist/:id/:name" element={<Playlist />} />
          <Route path="/library" element={<Library />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-playlist" element={<CreatePlaylist />} />
          <Route path="/liked-songs" element={<LikedSongs />} />
        </Routes>
        {currentSong && <AudioPlayer />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
