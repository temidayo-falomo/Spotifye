import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../global/Context";
import Navbar from "../navbar/Navbar";
import SearchResults from "../search-results/SearchResults";
import { StyledSearchInfo } from "./SearchInfo.styled";

function SearchInfo(props: any) {
  let navigate = useNavigate();
  const { searchValue } = useContext(AppContext);
  const { radioCategories } = props;

  return (
    <StyledSearchInfo>
      <Navbar />
      {/* <div className="recents">
        <h1>Recently searched titles show here</h1>
      </div> */}
      {searchValue === "" ? (
        <div className="browse-all">
          <h1>Browse all</h1>
          <div className="categories">
            {radioCategories?.map((category: any, index: number) => {
              return (
                <div
                  key={index}
                  className="category img-def"
                  style={{
                    backgroundImage: `url(${category.picture_medium})`,
                  }}
                  onClick={() => {
                    navigate(`/category/${category.id}/${category.title}`);
                    localStorage.setItem("category_image", category.picture_xl);
                  }}
                >
                  <h2>{category.title}</h2>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <SearchResults />
      )}
    </StyledSearchInfo>
  );
}

export default SearchInfo;
