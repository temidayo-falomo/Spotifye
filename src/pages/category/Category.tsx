import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryInfo from "../../components/category-info/CategoryInfo";
import Sidebar from "../../components/sidebar/Sidebar";
import { AppContext } from "../../global/Context";
import { StyledCategory } from "./Category.styled";

function Category() {
  const id = useParams().id;
  const { setCategoryData } = useContext(AppContext);

  const fetchCategory = async () => {
    setCategoryData(null);
    fetch(
      "https://api.allorigins.win/raw?url=" +
        encodeURIComponent(`https://api.deezer.com/radio/${id}/tracks`)
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategoryData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <StyledCategory>
      <Sidebar />
      <CategoryInfo />
    </StyledCategory>
  );
}

export default Category;
