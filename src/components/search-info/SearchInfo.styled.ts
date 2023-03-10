import styled from "styled-components";

export const StyledSearchInfo = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-y: auto;
  padding: 25px 0;
  padding-bottom: 150px;

  .browse-all {
    margin: 2rem 0;
    padding: 0 25px;

    h1 {
      font-size: 1.5rem;
      margin: 2rem 0;
    }
  }

  .categories {
    margin-top: 1rem;
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

    .category {
      height: 200px;
      background-color: #000;
      border-radius: 10px;
      padding: 16px;
      text-transform: capitalize;
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }
  }

  @media (max-width: 400px) {
    .categories {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

      .category {
        display: grid;
        place-content: center;
        text-align: center;
      }
    }
  }
`;
