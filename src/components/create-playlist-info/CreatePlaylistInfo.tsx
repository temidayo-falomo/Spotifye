import axios from "axios";
import React, { useContext, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { FiMusic } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { AppContext } from "../../global/Context";
import Navbar from "../navbar/Navbar";
import PlayTrackMid from "../play-track-mid/PlayTrackMid";
import { StyledCreatePlaylistInfo } from "./CreatePlaylistInfo.styled";
import { useCookies } from "react-cookie";

function CreatePlaylistIfo() {
  const { user, userPlaylists, setUserPlaylists } = useContext(AppContext);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [searchData, setSearchData] = React.useState<any>([]);
  const [searchLoading, setSearchLoading] = React.useState<boolean>(false);
  const [cookies, setCookie] = useCookies(["user"]);

  const fetchSearchResults = async () => {
    setSearchLoading(true);
    fetch(
      // "https://n3rdy-cors-proxy.glitch.me/useproxy?link=" +
      //   encodeURIComponent(
      `https://api.deezer.com/search?q=${searchValue}`
      // )
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchData(data.data);
        setSearchLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addSongToPlaylist = (song: object, playlistId: string) => {
    axios
      .put("http://localhost:8080/api/playlists/add-track", {
        song,
        playlistId,
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeSongFromPlaylist = (song: {
    id: React.SetStateAction<number>;
  }) => {
    axios
      .post("http://localhost:5000/api/v1/playlist/remove", {
        song,
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNewPlaylist = () => {
    let playlistObject = {
      picture_xl: `https://ik.imagekit.io
        /gdgtme/wp-content/uploads
        /2022/02/How-To-Create-A-Music-Playlist-For-Offline-Listening-In-2022.jpg`,
      title: `My Playlist #${userPlaylists.length + 1}`,
      user: {
        name: user?.fullName,
        avatar: user?.avatar,
        createdAt: new Date(),
      },
      tracklist: [],
      type: "playlist",
      creatorId: cookies.user,
      createdAt: new Date(),
    };

    axios
      .post("http://localhost:8080/api/playlists/add-playlist", playlistObject)
      .catch((err) => {
        console.log(err);
      });

    setUserPlaylists([...userPlaylists, playlistObject]);
  };

  useEffect(() => {
    // if (location.pathname.includes("/create-playlist")) {
    handleNewPlaylist();
    // }
  }, []);

  return (
    <StyledCreatePlaylistInfo>
      <div className="hero-bg img-def">
        <Navbar />
        <div className="row gap-1 top-holder">
          <div
            className="big-thumbnail"
            style={{
              backgroundColor: "#282828",
            }}
          >
            <FiMusic
              style={{
                fontSize: "5rem",
              }}
            />
          </div>
          <div className="info-txt col gap-1">
            <span className="row gap-5 center">PLAYLIST</span>
            <h1>{userPlaylists[userPlaylists.length - 1]?.title}</h1>
            <div className="row gap-5 center">
              <div
                className="avatar img-def"
                style={{
                  backgroundImage: `url(${user?.userAvatar})`,
                }}
              ></div>
              <Link to="/">Temidayo</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mid">
        <PlayTrackMid />
        {userPlaylists[0]?.songs?.length > 0 && (
          <div className="table row btw center">
            <div className="row gap-1 center">
              <span>#</span>
              <span>Title</span>
            </div>

            <span>Date Added</span>
            <span>Album</span>

            <span>Add/Remove</span>
          </div>
        )}

        <div
          className="col gap-1"
          style={{
            width: "95%",
            margin: "0 auto",
          }}
        >
          {userPlaylists[userPlaylists.length - 1]?.songs?.map(
            (song: any, index: number) => {
              return (
                <div className="row btw card-row" key={index}>
                  <div
                    className="init-row row gap-1"
                    style={{
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      textAlign: "left",
                    }}
                  >
                    <div
                      className="thumbnail img-def"
                      style={{
                        backgroundImage: `url(${song.album.cover_medium})`,
                      }}
                    ></div>
                    <div className="col gap-5">
                      <h4>{song.title}</h4>
                      <span
                        style={{
                          textAlign: "left",
                        }}
                      >
                        {song.artist.name}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="time">19 seconds ago</span>
                  </div>

                  <div
                    className="row center btw gap-1"
                    style={{
                      width: "50%",
                    }}
                  >
                    <Link to={`/album/${song.album.id}/${song.album.title}`}>
                      {song.album.title}
                    </Link>

                    <button
                      onClick={() => {
                        // handleRemoveFromPlaylist(song);
                        removeSongFromPlaylist(song);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>

      <div className="find col gap-1">
        <div className="row center btw">
          <h2>Let's find something for your playlist</h2>
          <MdClose
            style={{
              fontSize: "2rem",
            }}
          />
        </div>

        <div className="row">
          <form
            className="input-holder row"
            onSubmit={(e) => {
              e.preventDefault();
              fetchSearchResults();
            }}
          >
            <button>
              <BsSearch />
            </button>
            <input
              required
              type="search"
              placeholder="Search for songs, artists, or podcasts"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </form>
        </div>

        <div className="search-results col gap-1">
          {searchValue !== "" &&
            searchData?.map((song: any, index: number) => {
              return (
                <div className="row btw card-row" key={index}>
                  <div className="init-row row gap-1">
                    <div
                      className="thumbnail img-def"
                      style={{
                        backgroundImage: `url(${song.album.cover_medium})`,
                      }}
                    ></div>
                    <div
                      className="col gap-5"
                      style={{
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        textAlign: "left",
                      }}
                    >
                      <h4>{song.title}</h4>
                      <span
                        style={{
                          textAlign: "left",
                        }}
                      >
                        {song.artist.name}
                      </span>
                    </div>
                  </div>

                  <div
                    className="row center btw gap-5"
                    style={{
                      width: "50%",
                    }}
                  >
                    <Link to={`/album/${song.album.id}/${song.album.title}`}>
                      {song.album.title}
                    </Link>

                    {userPlaylists[userPlaylists.length - 1]?.songs?.some(
                      (e: any) => e.id === song.id
                    ) ? (
                      <button onClick={() => {}}>Added</button>
                    ) : (
                      <button
                        onClick={() => {
                          addSongToPlaylist(song, song._id);
                        }}
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          {searchLoading && <p>Loading...</p>}
          {searchData?.length === 0 && <p>No results found</p>}
        </div>
      </div>
    </StyledCreatePlaylistInfo>
  );
}

export default CreatePlaylistIfo;
