import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryInfo from "../../components/category-info/CategoryInfo";
import Loading from "../../components/loading/Loading";
import Sidebar from "../../components/sidebar/Sidebar";
import { AppContext } from "../../global/Context";
import { StyledCategory } from "./Category.styled";

function Category() {
  const id = useParams().id;
  const { setCategoryData } = useContext(AppContext);

  const [loading, setLoading] = useState(true);

  const fetchCategory = async () => {
    setCategoryData(null);
    fetch(
      "https://n3rdy-cors-proxy.glitch.me/useproxy?link=" +
        encodeURIComponent(
      `https://api.deezer.com/radio/${id}/tracks`
      )
    )
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data.data);
        setLoading(false);
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
      {loading ? <Loading /> : <CategoryInfo />}
    </StyledCategory>
  );
}

export default Category;
