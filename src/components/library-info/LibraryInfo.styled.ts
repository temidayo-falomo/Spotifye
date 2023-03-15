import styled from "styled-components";

export const StyledLibraryInfo = styled.div`
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 150px;
  padding: 20px;
  position: relative;

  .max {
    width: max-content;
  }

  .nothing {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: 45%;
    text-align: center;
  }

  h2 {
    margin: 2rem 0;
    padding: 0 25px;
  }

  .playlist-info {
    padding: 0 25px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    /* justify-content: center; */
    gap: 2rem;
  }

  .rectangle {
    width: 500px;
    /* min-height: 200px; */
    background-color: #623ef0;
    border-radius: 5px;
    padding: 30px;
    font-weight: 500;
    cursor: pointer;

    .darkened {
      color: gainsboro;
    }

    h4 {
      font-size: 2rem;
    }
  }

  .playlist-card {
    min-width: 210px;
    /* min-height: 280px; */
    padding: 15px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #181818;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    cursor: pointer;
    transition: 0.5s ease;
    position: relative;

    :hover {
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(1.6px);
      -webkit-backdrop-filter: blur(1.6px);
      transition: 0.5s ease;

      .play-btn {
        opacity: 1;
        bottom: 90px;
      }

      .image {
        /* box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; */
      }
    }

    .image {
      height: 180px;
      border-radius: 5px;
      background-color: #000;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
      display: grid;
      place-content: center;
      font-size: 4rem;
    }

    span {
      color: #b3b3b3;
      font-size: 0.9rem;
      width: max-content;
    }

    .play-btn {
      position: absolute;
      bottom: 80px;
      right: 20px;
      background-color: #1db954;
      border-radius: 50%;
      padding: 0.5rem;
      cursor: pointer;
      transition: 0.5s ease;
      width: 50px;
      height: 50px;
      font-size: 1rem;
      display: grid;
      place-content: center;
      place-items: center;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
      opacity: 0;
    }
  }

  @media (max-width: 540px) {
    .playlist-card {
      margin: auto;
      align-self: center;
    }
  }
`;
