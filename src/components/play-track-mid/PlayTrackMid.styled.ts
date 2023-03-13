import styled from "styled-components";

export const StyledPlayTrackMid = styled.div`
  display: flex;
  padding: 0 20px;
  z-index: 999;
  position: relative;

  .mod {
    position: absolute;
    left: 11rem;
    top: 70%;
    width: 230px;
    background-color: #282828;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
    padding: 15px 5px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      background-color: transparent;
      padding: 10px 10px;
      color: #fff;
      font-weight: 600;
      cursor: pointer;
      border-radius: 2px;
      width: 100%;
      text-align: left;

      :hover {
        background-color: #3e3d3d;
      }
    }
  }

  .middle {
    gap: 2rem;
    margin: 1rem auto;
    width: 100%;
    display: flex;

    .play {
      padding: 20px;
      height: 65px;
      width: 65px;
      border-radius: 50%;
      display: grid;
      place-content: center;
      background-color: #1cdf63;
      color: #000;
      cursor: pointer;
      font-size: 1.2rem;
    }

    .pointer {
      font-size: 2rem;
    }
  }

  .follow-btn {
    padding: 7px 25px;
    border: 1px #b3b3b3 solid;
    color: gainsboro;
    border-radius: 5px;
    background-color: transparent;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }

  /* .pointer {
    display: ${(props: any) => (props.location.pathname ? "flex" : "none")};
  } */
`;
