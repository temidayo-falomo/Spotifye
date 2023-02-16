import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../global/Context";
import { StyledSearchResults } from "./SearchResults.styled";
import AlbumCard from "../album-card/AlbumCard";
import Loading from "../loading/Loading";
import SearchPlaylist from "./searchResultPlaylist/SearchPlaylist";
import { FaPlay } from "react-icons/fa";

function SearchResults() {
  const [num, setNum] = React.useState(0);

  const {
    searchData,
    searchLoading,
    playPause,
    setCurrentSong,
    setSongsList,
    currentSong,
  } = useContext(AppContext);

  const handleAddSongsToLocalStorage = (currSong: object) => {
    localStorage.setItem("songsList", JSON.stringify(searchData?.slice(0, 18)));
    setSongsList(searchData.slice(0, 18));

    localStorage.setItem("currentSong", JSON.stringify(currSong));
    setCurrentSong(currSong);

    playPause();
  };

  return (
    <StyledSearchResults>
      {searchLoading ? (
        <Loading />
      ) : (
        <React.Fragment>
          {!searchData[0] ? (
            <h2>Press Enter to search</h2>
          ) : (
            <>
              <div className="top row gap-1">
                <button style={{ backgroundColor: "#fff", color: "#000" }}>
                  All
                </button>
                <button>Artists</button>
                <button>Albums</button>
                <button>Tracks</button>
                <button>Playlists</button>
              </div>

              <div className="row init-res">
                <div className="col top-res">
                  <h2>Top Result</h2>

                  <div className="main-res-card col">
                    <div
                      className="thumbnail img-def"
                      style={{
                        backgroundImage: `url(${searchData[0]?.album.cover_big})`,
                      }}
                    ></div>
                    <h3>{searchData[0]?.title}</h3>
                    <div className="row gap-1 center">
                      <Link
                        to={`/artiste/${searchData[0]?.artist.id}/${searchData[0]?.artist.name}`}
                      >
                        {searchData[0]?.artist.name}
                      </Link>
                      <button>{searchData[0]?.type}</button>
                    </div>

                    <button
                      className="play-btn"
                      onClick={() => {
                        handleAddSongsToLocalStorage(searchData[0]);
                      }}
                    >
                      <FaPlay />
                    </button>
                  </div>
                </div>

                <div className="col songs-col">
                  <h2>Songs</h2>

                  {searchData?.slice(0, 5)?.map((song: any, index: number) => {
                    return (
                      <div
                        className="res-song row btw center gap-1"
                        key={index}
                      >
                        <div className="init row gap-1 center">
                          <div
                            className="thumbn img-def"
                            style={{
                              backgroundImage: `url(${song.album.cover_medium})`,
                            }}
                          >
                            <FaPlay
                              className="play-btn-tiny pointer"
                              onClick={() => {
                                handleAddSongsToLocalStorage(song);
                              }}
                            />
                          </div>
                          <div className="col">
                            <h5
                              style={{
                                color:
                                  currentSong?.id === song.id
                                    ? "#1db954"
                                    : "inherit",
                              }}
                            >
                              {song.title}
                            </h5>
                            <Link
                              to={`/artiste/${song.artist.id}/${song.artist.name}`}
                            >
                              {song.artist.name}
                            </Link>
                          </div>
                        </div>
                        <span>2:36</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="col gap-1">
                <h2>Albums</h2>
                <div
                  className="albums-row row gap-1"
                  style={{
                    overflowX: "scroll",
                  }}
                >
                  {searchData
                    ?.filter((obj: any, index: any) => {
                      return (
                        index ===
                        searchData.findIndex(
                          (o: any) => obj.album?.title === o.album?.title
                        )
                      );
                    })
                    ?.slice(0, 15)
                    ?.map((album: any, index: number) => {
                      return <AlbumCard album={album.album} key={index} />;
                    })}
                </div>
              </div>

              <SearchPlaylist />
            </>
          )}
        </React.Fragment>
      )}
    </StyledSearchResults>
  );
}

export default SearchResults;
