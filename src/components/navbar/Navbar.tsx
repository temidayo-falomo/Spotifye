import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdOutlineClose,
} from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../global/Context";
import { StyledNavbar } from "./Navbar.styled";
import { FcGoogle } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiEyeOffLine } from "react-icons/ri";
import { useCookies } from "react-cookie";

function Navbar() {
  let navigate = useNavigate();
  const location = useLocation();
  const {
    setSearchValue,
    searchValue,
    setSearchData,
    setSearchLoading,
    user,
    setDisplaySidebar,
    displaySidebar,
  } = useContext(AppContext);

  const [cookies, setCookie] = useCookies(["user"]);

  const fetchSearchResults = async () => {
    setSearchLoading(true);
    fetch(
      "https://n3rdy-cors-proxy.glitch.me/useproxy?link=" +
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
        <span
          className="hamburger"
          onClick={() => {
            setDisplaySidebar(!displaySidebar);
          }}
        >
          {displaySidebar ? <GiHamburgerMenu /> : <MdOutlineClose />}
        </span>
        <span className="icon arrow" onClick={() => navigate(-1)}>
          <MdArrowBackIosNew />
        </span>

        <span className="icon arrow" onClick={() => navigate(+1)}>
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
        {!cookies.user ? (
          <button className="offline-btn row center gap-5">
            <RiEyeOffLine />
            Not Signed In
          </button>
        ) : (
          <button className="premium-btn">Premium</button>
        )}
        <div
          onClick={() => {
            if (user) {
              navigate("/");
            } else {
              navigate("/login");
            }
          }}
          className="avatar img-def"
          style={{
            backgroundImage: `url(${user?.userAvatar})`,
          }}
        >
          {!user?.userAvatar && <FcGoogle />}
        </div>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
