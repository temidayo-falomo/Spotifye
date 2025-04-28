import React, { useEffect, useState } from "react";
import SearchInfo from "../../components/search-info/SearchInfo";
import Sidebar from "../../components/sidebar/Sidebar";
import { StyledSearch } from "./Search.styled";

function Search() {
  const [radioCategories, setRadioCategories] = useState<any>([]);

  const [loading, setLoading] = useState(true);

  const fetchRadioCategories = async () => {
    fetch(
      `${process.env.REACT_APP_PROXY_URL}` +
        encodeURIComponent(`https://api.deezer.com/radio`)
    )
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
      {<SearchInfo loading={loading} radioCategories={radioCategories} />}
    </StyledSearch>
  );
}

export default Search;
