import styled from "styled-components";

export const StyledSearchInfo = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  position: relative;
  overflow-y: auto;

  .browse-all {
    margin: 3rem 0;

    h1 {
      font-size: 1.5rem;
      margin: 2rem 0;
    }
  }

  .categories {
    margin-top: 1rem;
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    .category {
      height: 250px;
      background-color: #000;
      border-radius: 10px;
      padding: 16px;
      text-transform: capitalize;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      
    }
  }
`;
