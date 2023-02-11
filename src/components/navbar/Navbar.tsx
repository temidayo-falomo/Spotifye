import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../global/Context";
import { StyledNavbar } from "./Navbar.styled";
import { FcGoogle } from "react-icons/fc";

function Navbar() {
  let navigate = useNavigate();
  const location = useLocation();
  const { setSearchValue, searchValue, setSearchData } = useContext(AppContext);

  const fetchSearchResults = async (searchParam: string) => {
    fetch(
      "https://api.allorigins.win/raw?url=" +
        encodeURIComponent(`https://api.deezer.com/search?q=${searchParam}`)
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearchData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledNavbar>
      <div className="row center left-nav">
        <span className="icon" onClick={() => navigate(-1)}>
          <MdArrowBackIosNew />
        </span>

        <span className="icon" onClick={() => navigate(+1)}>
          <MdArrowForwardIos />
        </span>

        {location.pathname === "/search" && (
          <div className="input-holder row">
            <button>
              <BsSearch />
            </button>
            <input
              type="search"
              placeholder="What do you want to listen to?"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                fetchSearchResults(e.target.value);
              }}
            />
          </div>
        )}
      </div>

      <div className="row right-nav">
        <button>Premium</button>
        <div className="avatar">
          <FcGoogle />
        </div>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
