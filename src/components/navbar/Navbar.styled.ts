import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 99999999;
  background-color: ${(props: any) =>
    props.location?.pathname === "/search" ? "transparent" : "transparent"};

  .left-nav {
    gap: 1rem;
    .input-holder {
      background-color: #fff;
      border-radius: 30px;
      min-width: 100px;
      max-width: 300px;
      height: 40px;
      overflow: hidden;
      margin-right: 0.5rem;

      input {
        width: 100%;
        height: 100%;
        border: none;
      }

      button {
        padding: 10px;
        display: grid;
        place-content: center;
        background-color: transparent;
        font-weight: 800;
        font-size: 1.2rem;
      }
    }
  }

  .icon {
    display: grid;
    place-content: center;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: #000;
    cursor: pointer;
  }

  .right-nav {
    gap: 1rem;
    justify-content: space-between;

    .offline-btn {
      padding: 0 20px;
      background-color: #4177ca;
      border-radius: 20px;
      color: #fff;
      cursor: default;
      font-weight: 600;
    }

    .premium-btn {
      padding: 0 20px;
      border: 1px #fff solid;
      background-color: transparent;
      border-radius: 20px;
      color: #fff;
      cursor: default;
      font-weight: 600;
    }
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px gainsboro solid;
      display: grid;
      place-content: center;
      cursor: pointer;
    }
  }

  .hamburger {
    display: none;
    font-size: 1.5rem;
  }

  @media (max-width: 680px) {
    .arrow {
      display: none;
    }
    .hamburger {
      display: block !important;
    }

    .premium-btn {
      display: none;
    }
  }
`;
