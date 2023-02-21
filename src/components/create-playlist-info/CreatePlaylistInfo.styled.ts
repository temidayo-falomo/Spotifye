import styled from "styled-components";

export const StyledCreatePlaylistInfo = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 150px;

  .hero-bg {
    height: 40vh;
    background-color: #464646;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    .big-thumbnail {
      width: 250px;
      height: 250px;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
      display: grid;
      place-content: center;
    }

    .info-txt {
      position: relative;
      z-index: 111;
      text-transform: capitalize;
      margin-bottom: 4rem;
      margin-left: 1rem;

      h1 {
        font-size: 6rem;
        margin-left: -0.5rem;
      }
    }
  }

  .mid {
    height: 100px;
    margin: 2rem 25px;
    padding: 0 25px;
    align-items: center;
    border-bottom: 1px #2b2b2b solid;
    font-size: 3rem;
  }

  .find {
    padding: 0 25px;
    gap: 1.5rem;

    .input-holder {
      background-color: #4d4d4d;
      border-radius: 5px;
      min-width: 450px;
      height: 40px;
      overflow: hidden;

      input {
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        color: #fff;
      }

      button {
        padding: 10px;
        display: grid;
        place-content: center;
        background-color: transparent;
        font-weight: 800;
        font-size: 1.2rem;
        color: #fff;
      }
    }
  }
`;
