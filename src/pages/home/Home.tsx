import React, { useContext, useEffect, useState } from "react";
import Landing from "../../components/landing/Landing";
import SkeletonLoading from "../../components/skeleton-loading/SkeletonLoading";
import Sidebar from "../../components/sidebar/Sidebar";
import { AppContext } from "../../global/Context";
import { StyledHome } from "./Home.styled";

function Home() {
  const { setHomeData } = useContext(AppContext);

  const [loading, setLoading] = useState(true);

  const fetchCharts = async () => {
    fetch(
      `${process.env.REACT_APP_PROXY_URL}` +
        encodeURIComponent("https://api.deezer.com/chart")
    )
      .then((res) => res.json())
      .then((data) => {
        setHomeData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchPlaylists = async () => {
    fetch(
      `${process.env.REACT_APP_PROXY_URL}` +
        encodeURIComponent("https://api.deezer.com/search/playlist?q=deezer")
    )
      .then((res) => res.json())
      .then((data) => {
        setHomeData((prev: object) => {
          return { ...prev, playlists: data };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    new Promise((resolve, reject) => {
      resolve(fetchCharts());
    })
      .then(() => {
        fetchPlaylists();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <StyledHome>
      <Sidebar />
      {loading ? <SkeletonLoading /> : <Landing />}
    </StyledHome>
  );
}

export default Home;
