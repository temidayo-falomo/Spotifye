import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../global/Context";
import { StyledNavbar } from "./Navbar.styled";
import { FcGoogle } from "react-icons/fc";
import { RiEyeOffLine } from "react-icons/ri";

function Navbar() {
  let navigate = useNavigate();
  const location = useLocation();
  const { setSearchValue, searchValue, setSearchData, setSearchLoading } =
    useContext(AppContext);

  const fetchSearchResults = async () => {
    setSearchLoading(true);
    fetch(
      "https://api.allorigins.win/raw?url=" +
        encodeURIComponent(`https://api.deezer.com/search?q=${searchValue}`)
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchData(data.data);
        setSearchLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledNavbar location={location}>
      <div className="row center left-nav">
        <span className="icon" onClick={() => navigate(-1)}>
          <MdArrowBackIosNew />
        </span>

        <span className="icon" onClick={() => navigate(+1)}>
          <MdArrowForwardIos />
        </span>

        {location.pathname === "/search" && (
          <form
            className="input-holder row"
            onSubmit={(e) => {
              e.preventDefault();
              fetchSearchResults();
            }}
          >
            <button>
              <BsSearch />
            </button>
            <input
              required
              type="search"
              placeholder="What do you want to listen to?"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </form>
        )}
      </div>

      <div className="row right-nav">
        <button className="offline-btn row center gap-5">
          <RiEyeOffLine />
          You're offline
        </button>
        <button className="premium-btn">Premium</button>
        <div className="avatar">
          <FcGoogle />
        </div>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
