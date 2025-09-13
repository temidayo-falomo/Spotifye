import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999999998;
  cursor: pointer;

  @media (min-width: 681px) {
    display: none;
  }
`;

export const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #000;
  height: 100vh;
  width: 100%;
  padding: 30px;
  overflow-y: scroll !important;

  ::-webkit-scrollbar {
    width: 0;
  }

  .icon {
    font-size: 2rem;
  }

  .routes {
    gap: 1.5rem;
    margin-top: 3rem;

    a {
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      font-weight: 600;
    }
  }

  .feats {
    margin-top: 3rem;
    gap: 1.5rem;

    a {
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      font-weight: 600;
    }
  }

  .active-link {
    color: #1db954;
    font-weight: 800;
  }

  @media (max-width: 680px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999999;
    width: 280px;
    min-width: 280px;
    transform: ${(props: any) => 
      props.displaySidebar ? "translateX(-100%)" : "translateX(0)"};
    transition: transform 0.3s ease-in-out;
    padding: 30px;
    overflow-y: auto;

    .logo {
      visibility: visible;
    }
  }
`;
