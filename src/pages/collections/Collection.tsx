import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { StyledCollection } from "./Collection.styled";
import PlayTrackMid from "../../components/play-track-mid/PlayTrackMid";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../global/Context";
import { StyledCreatePlaylistInfo } from "../../components/create-playlist-info/CreatePlaylistInfo.styled";
import { FiMusic } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { useCookies } from "react-cookie";
import { GiPadlock } from "react-icons/gi";

function Collection() {
  const id = useParams().id;

  const { userCollection, setUserCollection, user } = useContext(AppContext);

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

  const getPlaylist = () => {
    axios
      .get(`http://localhost:8080/api/playlists/playlist/${id}`)
      .then((res) => {
        setUserCollection(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addSongToPlaylist = (song: object) => {
    axios
      .put("http://localhost:8080/api/playlists/add-track", {
        song,
        playlistId: id,
      })
      .catch((err) => {
        console.log(err);
      });

    setUserCollection({
      ...userCollection,
      tracklist: [...userCollection?.tracklist, song],
    });
  };

  const removeSongFromPlaylist = (song: {
    id: React.SetStateAction<number>;
  }) => {
    axios
      .put("http://localhost:8080/api/playlists/remove-track", {
        song,
        playlistId: id,
      })
      .catch((err) => {
        console.log(err);
      });   

    setUserCollection({
      ...userCollection,
      tracklist: userCollection?.tracklist.filter(
        (track: { id: React.SetStateAction<number> }) => track.id !== song.id
      ),
    });
  };

  useEffect(() => {
    getPlaylist();
  }, []);

  return (
    <StyledCollection>
      <Sidebar />
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
              <h1>{userCollection?.title}</h1>
              <div className="row gap-5 center">
                <div
                  className="avatar img-def"
                  style={{
                    backgroundImage: `url(${userCollection?.user?.avatar})`,
                  }}
                ></div>
                <Link to="/">Temidayo</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mid">
          <PlayTrackMid allSongs={userCollection?.tracklist} />
          {userCollection?.tracklist?.length > 0 && (
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
            {userCollection?.tracklist?.map((song: any, index: number) => {
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
                    {userCollection?.user?.name === user?.fullName ? (
                      <button
                        onClick={() => {
                          // handleRemoveFromPlaylist(song);
                          removeSongFromPlaylist(song);
                        }}
                      >
                        Remove
                      </button>
                    ) : (
                      <button>
                        <GiPadlock />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {userCollection?.user?.name === user?.fullName && (
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
                        <Link
                          to={`/album/${song.album.id}/${song.album.title}`}
                        >
                          {song.album.title}
                        </Link>

                        <>
                          {userCollection.tracklist?.some(
                            (e: any) => e.id === song.id
                          ) ? (
                            <button onClick={() => {}}>Added</button>
                          ) : (
                            <button
                              onClick={() => {
                                addSongToPlaylist(song);
                              }}
                            >
                              Add
                            </button>
                          )}
                        </>
                      </div>
                    </div>
                  );
                })}
              {searchLoading && <p>Loading...</p>}
              {searchData?.length === 0 && <p>No results found</p>}
            </div>
          </div>
        )}
      </StyledCreatePlaylistInfo>
    </StyledCollection>
  );
}

export default Collection;
