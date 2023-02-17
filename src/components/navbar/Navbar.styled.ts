import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  padding: 15px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 99999;
  background-color: ${(props: any) =>
    props.location?.pathname === "/search" ? "#000" : "transparent"};

  .left-nav {
    gap: 1rem;
    .input-holder {
      background-color: #fff;
      border-radius: 30px;
      min-width: 300px;
      height: 40px;
      overflow: hidden;

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
`;
