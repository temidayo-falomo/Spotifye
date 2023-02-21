import styled from "styled-components";

export const StyledLanding = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  padding-bottom: 150px;
  transition: 0.5s ease;

  .extractor-holder {
    display: flex;
    gap: 2rem;
    display: none;
  }

  .abs {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 30%;
    transition: 1s ease;
    opacity: 0.2;
  }
`;
