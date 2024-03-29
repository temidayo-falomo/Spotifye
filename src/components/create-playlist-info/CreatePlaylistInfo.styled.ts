import styled from "styled-components";

export const StyledCreatePlaylistInfo = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 150px;

  .hero-bg {
    background-color: #464646;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    min-height: 40vh;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    .big-thumbnail {
      min-width: 250px;
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
        font-size: clamp(3.2rem, 5vw, 5rem);
        font-weight: 800;
      }

      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }
  }

  .mid {
    margin: 0 auto;
    margin-bottom: 0;
    padding-bottom: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .table {
      width: 95%;
      font-size: 0.8rem;
      border-bottom: 1px #2b2b2b solid;
      padding: 0 20px;
      padding-bottom: 0.5rem;
      margin: 0 auto;
    }
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

  //general

  .card-row {
    padding: 5px;
    align-items: center;
    gap: 1rem;

    .play-btn-tiny {
      opacity: 0;
    }

    :hover {
      .play-btn-tiny {
        opacity: 1;
        transition: 0.3s ease;
      }

      .thumbnail {
        background: linear-gradient(
          90deg,
          rgba(1, 18, 1, 0.3828125) 95%,
          rgba(14, 64, 14, 0.5004595588235294) 100%
        ) !important;
      }
    }

    a {
      max-width: 150px;
      min-width: 80px;
      overflow: hidden;
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
      :hover {
        text-decoration: underline;
      }
    }

    .thumbnail {
      min-width: 50px;
      height: 50px;
      border-radius: 5px;
      background-color: #4d4d4d;
      display: grid;
      place-content: center;
    }

    button {
      padding: 5px 15px;
      border-radius: 20px;
      background-color: transparent;
      color: #fff;
      border: 2px #fff solid;
    }

    .time {
      max-width: 100px;
      min-width: 80px;
      overflow: hidden;
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  @media (max-width: 920px) {
    .top-holder {
      .type {
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
    }

    .time {
      display: none !important;
    }

    span,
    a {
      justify-content: center;
      text-align: center;
      align-items: center;
    }

    .creator-det {
      display: flex;
      margin: auto;

      a {
        display: block !important;
      }
    }

    .input-holder {
      min-width: 100% !important;
    }
  }

  @media (max-width: 550px) {
    .creator-det {
      display: flex;
      margin: auto;
    }

    h4 {
      max-width: 80px;
      overflow: hidden;
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    span {
      max-width: 80px;
      overflow: hidden;
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .info-txt {
      span {
        max-width: 100% !important;
      }
    }

    a {
      display: none !important;
    }

    .card-row {
      justify-content: space-between !important;
      padding: 0;

      .btw {
        justify-content: flex-end;
      }
    }
  }
`;
