import styled from "styled-components";

export const StyledGreeting = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 1rem;

  h2 {
    font-size: 1.8rem;
  }

  .strips {
    width: 100%;
    margin: auto;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    margin-top: 1.5rem;

    .strip {
      height: 80px;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 5px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(2.7px);
      -webkit-backdrop-filter: blur(2.7px);
      overflow: hidden;
      cursor: pointer;

      .box {
        width: 80px;
        height: 100%;
        background-color: #000;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      }
    }
  }

  @media (max-width: 420px) {
    .strips {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
`;
