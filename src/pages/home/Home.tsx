import React, { useContext, useEffect, useState } from "react";
import Landing from "../../components/landing/Landing";
import Loading from "../../components/loading/Loading";
import Sidebar from "../../components/sidebar/Sidebar";
import { AppContext } from "../../global/Context";
import { StyledHome } from "./Home.styled";


function Home() {
  const { setHomeData } = useContext(AppContext);

  const [loading, setLoading] = useState(true);

  const fetchCharts = async () => {
    fetch(
      "https://api.allorigins.win/raw?url=" +
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

  useEffect(() => {
    fetchCharts();
  }, []);

  return (
    <StyledHome>
      <Sidebar />
      {loading ? <Loading /> : <Landing />}
    </StyledHome>
  );
}

export default Home;
