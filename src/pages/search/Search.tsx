import React, { useContext, useEffect } from "react";
import SearchInfo from "../../components/search-info/SearchInfo";
import Sidebar from "../../components/sidebar/Sidebar";
import { AppContext } from "../../global/Context";
import { StyledSearch } from "./Search.styled";

function Search() {
  const { setRadioCategories } = useContext(AppContext);

  const fetchRadioCategories = async () => {
    fetch(`https://api.deezer.com/radio`)
      .then((res) => res.json())
      .then((data) => {
        setRadioCategories(data.data);
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
      <SearchInfo />
    </StyledSearch>
  );
}

export default Search;
