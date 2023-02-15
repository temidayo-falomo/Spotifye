import styled from "styled-components";

export const StyledSearchResults = styled.div`
  margin: 2rem 0;
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
        width: 500px;
        height: 300px;
        border-radius: 10px;
        background-color: #282828;
        padding: 20px;
        gap: 1rem;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
          rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        margin-top: 1rem;

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
        max-width: 600px;

        .thumbn {
          width: 50px;
          height: 50px;
          border-radius: 5px;
          background-color: #1cb854;
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
