import React, { useContext } from "react";
import { AppContext } from "../../global/Context";
import Navbar from "../navbar/Navbar";
import { StyledArtisteInfo } from "./ArtisteInfo.styled";
import { GoVerified } from "react-icons/go";
import Popular from "./popular/Popular";
import Discography from "./discography/Discography";
import Related from "./fans-also-like/Related";
import PlayTrackMid from "../play-track-mid/PlayTrackMid";
import axios from "axios";
import { useCookies } from "react-cookie";

function ArtisteInfo() {
  const { artisteData, user, setUser, artisteTracks } = useContext(AppContext);
  const [cookies, setCookie] = useCookies(["user"]);

  const handleFollowArtist = () => {
    axios
      .put("https://spotifye-backend.vercel.app/api/follow-artist", {
        artist: {
          artistId: artisteData.id,
          artistName: artisteData.name,
          artistPicture: artisteData.picture_xl,
        },
        userId: cookies.user,
      })
      .catch((err) => console.log(err));
    setUser({
      ...user,
      followedArtists: [
        ...user?.followedArtists,
        {
          artistId: artisteData.id,
          artistName: artisteData.name,
          artistPicture: artisteData.picture_xl,
        },
      ],
    });
  };

  const handleUnfollowArtist = () => {
    axios
      .put("https://spotifye-backend.vercel.app/api/unfollow-artist", {
        artist: {
          artistId: artisteData.id,
          artistName: artisteData.name,
          artistPicture: artisteData.picture_xl,
        },
        userId: cookies.user,
      })
      .catch((err) => console.log(err));
    setUser({
      ...user,
      followedArtists: user?.followedArtists?.filter(
        (artist: { artistId: string }) => artist.artistId !== artisteData.id
      ),
    });
  };

  return (
    <StyledArtisteInfo id="scroller">
      <div
        className="hero-bg img-def"
        style={{
          backgroundImage: `url(${artisteData?.picture_xl})`,
        }}
      >
        <Navbar />
        <div className="info-txt">
          <span className="row gap-5 center">
            {artisteData?.type}
            <GoVerified />
          </span>
          <h1>{artisteData?.name}</h1>
          <p>{artisteData?.nb_fan?.toLocaleString()} fans</p>
        </div>
      </div>

      <div className="dark-bg">
        <PlayTrackMid
          handleFollowArtist={handleFollowArtist}
          handleUnfollowArtist={handleUnfollowArtist}
          artistId={artisteData?.id}

          allSongs={artisteTracks.slice(0, 10)}
        />
        <Popular />
        <Discography />
        <Related />
      </div>
    </StyledArtisteInfo>
  );
}

export default ArtisteInfo;
