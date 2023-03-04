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

function App() {
  
  //* Cookies
  const [cookies, setCookie] = useCookies(["user"]);

  //* Audio States
  const audioElem = useRef<any>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  //* Data States
  const [homeData, setHomeData] = useState({});
  const [artisteData, setArtisteData] = useState([]);
  const [artisteAlbums, setArtisteAlbums] = useState([]);
  const [artisteTracks, setArtisteTracks] = useState([]);
  const [artisteRelated, setArtisteRelated] = useState([]);
  const [radioCategories, setRadioCategories] = useState([]);
  const [albumData, setAlbumData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [categoryData, setCategoryData] = useState([]);

  //Display States
  const [displayAudioPlayer, setDisplayAudioPlayer] = useState<boolean>(false);
  const [displayAudioPlayerMobile, setDisplayAudioPlayerMobile] =
    useState<boolean>(true);
  const [displaySidebar, setDisplaySidebar] = useState<boolean>(true);

  //Songs List State
  const [songsList, setSongsList] = useState(
    JSON.parse(localStorage.getItem("songsList") || "[]")
  );

  //*Current Song State
  const [currentSong, setCurrentSong] = useState<object>(songsList[0]);

  //Unable to Play Error State
  const [unableToPlay, setUnableToPlay] = useState<boolean>(false);

  //Navbar Search State
  const [searchLoading, setSearchLoading] = useState<boolean>(false);

  //Playlist State
  const [playlistData, setPlaylistData] = useState([]);

  //Gradient State
  const [defaultGradientNum, setDefaultGradientNum] = useState<number>(0);

  const [user, setUser] = useState<any>(null); //User Object

  const [userPlaylists, setUserPlaylists] = useState<any>([]); //User Playlists

  const [userCollection, setUserCollection] = useState({}); //User Collection

  //* Function to Play/Pause Audio
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //* Function to get User Playlists From Backend.
  const getUserPlaylists = () => {
    fetch(`http://localhost:8080/api/playlists/user-playlists/${cookies.user}`)
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

        playlistData,
        setPlaylistData,

        defaultGradientNum,
        setDefaultGradientNum,

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
          <Route path="/create-playlist" element={<CreatePlaylist />} />
          <Route path="/liked-songs" element={<LikedSongs />} />
          <Route
            path="/collection/playlist/:id/:name"
            element={<Collection />}
          />
        </Routes>
        {currentSong && <AudioPlayer />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
