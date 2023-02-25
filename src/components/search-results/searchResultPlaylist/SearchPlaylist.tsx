import React, { useContext, useEffect, useState } from "react";
import { TbPlaylist } from "react-icons/tb";
import { AppContext } from "../../../global/Context";
import PlaylistCard from "../../playlist-card/PlaylistCard";
import { StyledSearchPlaylist } from "./SearchPlaylist.styled";

function SearchPlaylist() {
  const { searchValue } = useContext(AppContext);
  const [playlistSearchData, setPlaylistSearchData] = useState<any>([]);

  const fetchPlaylistSearchData = async () => {
    fetch(
      // "https://n3rdy-cors-proxy.glitch.me/useproxy?link=" +
      //   encodeURIComponent(
      `https://api.deezer.com/search/playlist?q=${searchValue}}`
      // )
    )
      .then((res) => res.json())
      .then((data) => {
        setPlaylistSearchData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPlaylistSearchData();
  }, []);

  return (
    <StyledSearchPlaylist>
      <h2>Playlists</h2>
      <div className="search-playlist-container row gap-1">
        {playlistSearchData
          ?.slice(0, 18)
          .map((playlist: any, index: number) => {
            return <PlaylistCard key={index} playlist={playlist} />;
          })}
        {playlistSearchData.length === 0 && (
          <p style={{ marginTop: "1rem", color: "#1db954", fontWeight: "600" }}>
            Couldn't fetch playlists <TbPlaylist />
          </p>
        )}
      </div>
    </StyledSearchPlaylist>
  );
}

export default SearchPlaylist;
