import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import PlayTrackMid from "../play-track-mid/PlayTrackMid";
import SongCardRow from "../song-card-row/SongCardRow";
import { StyledCategoryInfo } from "./CategoryInfo.styled";

function CategoryInfo(props: any) {
  const name = useParams().name;
  const { categoryData } = props;

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

      <PlayTrackMid allSongs={categoryData} />

      <div className="categories col gap-5">
        {categoryData?.map((song: any, index: number) => {
          return <SongCardRow key={song.id} song={song} index={index} />;
        })}
      </div>
    </StyledCategoryInfo>
  );
}

export default CategoryInfo;
