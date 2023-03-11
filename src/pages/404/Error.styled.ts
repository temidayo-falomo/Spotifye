import styled from "styled-components";

export const StyledError = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  overflow: hidden;

  .error-info {
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding-bottom: 150px;
    padding-top: 20px;
  }

  .main {
    height: 100%;
    display: grid;
    place-content: center;
  }

  .middle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
    margin: auto;
    text-align: center;
    font-size: 1.2rem;

    img {
      max-width: 350px;
      margin-bottom: -4rem;
    }

    a {
      text-decoration: underline;
      color: #1db954;
    }

    button {
      margin-top: 2rem;
      padding: 10px 20px;
      border-radius: 10px;
      background-color: transparent;
      border: 2px white solid;
      color: #fff;
      font-weight: 600;

      :hover {
        border: 2px royalblue solid;
        color: royalblue;
      }
    }
  }

  @media (max-width: 680px) {
    grid-template-columns: auto;
  }
`;
