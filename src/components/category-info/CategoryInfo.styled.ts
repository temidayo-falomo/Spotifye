import styled from "styled-components";

export const StyledCategoryInfo = styled.div`
  height: 100vh;
  overflow-y: auto;
  z-index: 99999;

  .hero-bg {
    min-height: 40vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 999;
    text-transform: capitalize;
    background-color: #161616;
    padding-bottom: 4rem;
    margin-bottom: 1rem;

    h1 {
      font-size: 4rem;
    }
  }
`;
