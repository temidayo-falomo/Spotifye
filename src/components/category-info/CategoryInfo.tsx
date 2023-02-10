import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../global/Context";
import Navbar from "../navbar/Navbar";
import SongCardRow from "../song-card-row/SongCardRow";
import { StyledCategoryInfo } from "./CategoryInfo.styled";

function CategoryInfo() {
  const name = useParams().name;
  const { categoryData } = useContext(AppContext);

  return (
    <StyledCategoryInfo>
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${localStorage.getItem("category_image")})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div></div>
        <h1>{name}</h1>
      </div>

      <div className="categories col gap-5">
        {categoryData?.map((song: any, index: number) => {
          return <SongCardRow key={song.id} song={song} index={index} />;
        })}
      </div>
    </StyledCategoryInfo>
  );
}

export default CategoryInfo;
