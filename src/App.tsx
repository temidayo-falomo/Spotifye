import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AudioPlayer from "./components/audio-player/AudioPlayer";
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
import Collection from "./pages/collections/Collection";
import Error from "./pages/404/Error";
import SignUp from "./pages/sign-up/SignUp";

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  //* Cookies
  const [cookies, setCookie] = useCookies(["user"]);

  //* Audio States
  const audioElem = useRef<any>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Data States
  const [homeData, setHomeData] = useState({});
  const [artisteAlbums, setArtisteAlbums] = useState([]);
  const [artisteTracks, setArtisteTracks] = useState([]);
  const [searchData, setSearchData] = useState([]);

  //
  const [searchValue, setSearchValue] = useState<string>("");

  //AudioPlayer && Sidebar Display
  const [displayAudioPlayer, setDisplayAudioPlayer] = useState<boolean>(false);
  const [displayAudioPlayerMobile, setDisplayAudioPlayerMobile] =
    useState<boolean>(true);
  const [displaySidebar, setDisplaySidebar] = useState<boolean>(true);

  //to make sure songsList from localstorage is not undefined
  if (localStorage.getItem("songsList") === "undefined" || null) {
    localStorage.setItem("songsList", JSON.stringify([]));
    console.log("songsList is undefined");
  }

  //Songs List State
  const [songsList, setSongsList] = useState<any>(
    JSON.parse(localStorage.getItem("songsList") || "[]")
  );

  //*Current Song State
  const [currentSong, setCurrentSong] = useState<object>(
    songsList ? songsList[0] || {} : {}
  );

  //TODO: Unable to Play Error State
  const [unableToPlay, setUnableToPlay] = useState<boolean>(false);

  //Navbar Search State
  const [searchLoading, setSearchLoading] = useState<boolean>(false);

  //Playlist State
  const [playlistData, setPlaylistData] = useState([]);

  //Gradient State
  const [defaultGradientNum, setDefaultGradientNum] = useState<number>(0);

  //User Object
  const [user, setUser] = useState<any>(null);

  //User Playlists
  const [userPlaylists, setUserPlaylists] = useState<any>([]);

  //User Collection
  const [userCollection, setUserCollection] = useState({});

  //* Function to Play/Pause Audio
  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  //* Function to get Current User From Backend.
  const getCurrentUser = (id: string) => {
    fetch(`${apiUrl}/api/user/${id}`)
      .then((res) => res.json())
      .then((res) => {
        //set relevant states from api call
        setUser(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //* Function to get User Playlists From Backend.
  const getUserPlaylists = () => {
    fetch(`${apiUrl}/api/playlists/user-playlists/${cookies.user}`)
      .then((res) => res.json())
      .then((res) => {
        //set relevant states from api call
        setUserPlaylists(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //* Play/Pause Audio
  useEffect(() => {
    if (isPlaying) {
      audioElem?.current?.play();
    } else {
      audioElem?.current?.pause();
    }
  }, [isPlaying]);

  //* Invoke getCurrentUser() && getUserPlaylists() on page load
  useEffect(() => {
    getCurrentUser(cookies.user);
    getUserPlaylists();
  }, []);

  return (
    <AppContext.Provider
      value={{
        homeData,
        setHomeData,
        artisteAlbums,
        setArtisteAlbums,
        artisteTracks,
        setArtisteTracks,

        searchValue,
        setSearchValue,
        searchData,
        setSearchData,
        searchLoading,
        setSearchLoading,

        //Global States related to playing/displaying audio
        displayAudioPlayer,
        setDisplayAudioPlayer,
        displaySidebar,
        setDisplaySidebar,
        displayAudioPlayerMobile,
        setDisplayAudioPlayerMobile,
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

        //Playlist States
        playlistData,
        setPlaylistData,

        //Landing Page Gradient States
        defaultGradientNum,
        setDefaultGradientNum,

        //User Info States & Functions
        getCurrentUser,
        user,
        setUser,
        userPlaylists,
        setUserPlaylists,
        getUserPlaylists,
        userCollection,
        setUserCollection,
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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create-playlist" element={<CreatePlaylist />} />
          <Route path="/liked-songs" element={<LikedSongs />} />
          <Route
            path="/collection/playlist/:id/:name"
            element={<Collection />}
          />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {Object.keys(currentSong).length > 0 && <AudioPlayer />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
