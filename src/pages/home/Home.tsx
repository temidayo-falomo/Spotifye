import React, { useContext, useEffect } from "react";
import Landing from "../../components/landing/Landing";
import Sidebar from "../../components/sidebar/Sidebar";
import { AppContext } from "../../global/Context";
import { StyledHome } from "./Home.styled";

// "https://api.allorigins.win/raw?url=" +
// encodeURIComponent(``)

function Home() {
  const { setChartsData } = useContext(AppContext);

  const fetchCharts = async () => {
    fetch(
      "https://api.allorigins.win/raw?url=" +
        encodeURIComponent("https://api.deezer.com/chart")
    )
      .then((res) => res.json())
      .then((data) => {
        setChartsData(data);
        console.log(data);
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
      <Landing />
    </StyledHome>
  );
}

export default Home;
