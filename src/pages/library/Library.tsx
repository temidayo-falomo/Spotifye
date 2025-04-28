import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import LibraryInfo from "../../components/library-info/LibraryInfo";
import Sidebar from "../../components/sidebar/Sidebar";
import { StyledLibrary } from "./Library.styled";

function Library() {
  const [cookies, setCookie] = useCookies(["user"]);
  let navigate = useNavigate();

  // useEffect(() => {
  //   if (!cookies.user) {
  //     navigate("/404");
  //   }
  // }, []);

  return (
    <StyledLibrary>
      <Sidebar />
      <LibraryInfo />
    </StyledLibrary>
  );
}

export default Library;
