import styled from "styled-components";

export const StyledSearchResults = styled.div`
  margin: 2rem 0;
  padding: 0 25px;
  padding-bottom: 150px;
  overflow-x: hidden;

  .top {
    button {
      padding: 10px 15px;
      border-radius: 20px;
      font-weight: 600;
      background-color: #282828;
      color: #fff;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }
  }

  .init-res {
    margin-top: 2rem;
    gap: 2rem;

    .top-res {
      gap: 1rem;

      .main-res-card {
        width: 450px;
        height: 280px;
        border-radius: 10px;
        background-color: #181818;
        padding: 20px;
        gap: 1rem;
        margin-top: 1rem;
        position: relative;

        :hover {
          background: rgba(255, 255, 255, 0.1);

          .play-btn {
            opacity: 1;
            bottom: 40px;
            width: 55px;
            height: 55px;
          }
        }

        .play-btn {
          position: absolute;
          bottom: 30px;
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
          /* box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px; */
          opacity: 0;
          color: #000;
        }

        .thumbnail {
          width: 120px;
          height: 120px;
          border-radius: 5px;
          background-color: #000;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }

        h3 {
          font-size: 2rem;
        }

        a {
          color: gainsboro;
        }

        button {
          padding: 10px 15px;
          border-radius: 20px;
          font-weight: 600;
          background-color: #000;
          color: #fff;
          border: none;
          cursor: pointer;
          text-transform: uppercase;
        }
      }
    }

    .songs-col {
      width: 100%;
      gap: 1rem;

      h2 {
        margin-bottom: 1rem;
      }

      .res-song {
        padding: 10px;
        width: 100%;
        border-radius: 5px;
        max-width: 700px;

        .play-btn-tiny {
          opacity: 0;
          transition: 0.3s ease;
        }

        :hover {
          .play-btn-tiny {
            opacity: 1;
            transition: 0.3s ease;
          }

          .thumbn {
            background: linear-gradient(
              90deg,
              rgba(1, 18, 1, 0.3828125) 95%,
              rgba(14, 64, 14, 0.5004595588235294) 100%
            ) !important;
          }
        }

        .thumbn {
          width: 50px;
          height: 50px;
          border-radius: 5px;
          background-color: #1cb854;
          display: grid;
          place-content: center;
        }
      }
    }
  }

  .albums-row {
    ::-webkit-scrollbar {
      width: 0em;
    }
  }
`;
