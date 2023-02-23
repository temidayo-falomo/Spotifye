import React, { useContext, useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import SearchInfo from "../../components/search-info/SearchInfo";
import Sidebar from "../../components/sidebar/Sidebar";
import { AppContext } from "../../global/Context";
import { StyledSearch } from "./Search.styled";

function Search() {
  const { setRadioCategories } = useContext(AppContext);

  const [loading, setLoading] = useState(true);

  const fetchRadioCategories = async () => {
    fetch(`https://n3rdy-cors-proxy.glitch.me/useproxy?link=https://api.deezer.com/radio`)
      .then((res) => res.json())
      .then((data) => {
        setRadioCategories(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchRadioCategories();
  }, []);

  return (
    <StyledSearch>
      <Sidebar />
      {loading ? <Loading /> : <SearchInfo />}
    </StyledSearch>
  );
}

export default Search;
