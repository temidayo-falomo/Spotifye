import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryInfo from "../../components/category-info/CategoryInfo";
import Loading from "../../components/loading/Loading";
import Sidebar from "../../components/sidebar/Sidebar";
import { StyledCategory } from "./Category.styled";

function Category() {
  const id = useParams().id;
  const [categoryData, setCategoryData] = useState<any>([]);

  const [loading, setLoading] = useState(true);

  const fetchCategory = async () => {
    setCategoryData(null);
    fetch(
      `${process.env.REACT_APP_PROXY_URL}` +
        encodeURIComponent(`https://api.deezer.com/radio/${id}/tracks`)
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
      {loading ? <Loading /> : <CategoryInfo
        categoryData={categoryData}
       />}
    </StyledCategory>
  );
}

export default Category;
