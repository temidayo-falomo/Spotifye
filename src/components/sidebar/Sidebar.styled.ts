import styled from "styled-components";

export const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #000;
  height: 100vh;
  width: 100%;
  padding: 30px;

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
      gap: 1rem;
      font-weight: 600;
    }
  }

  .active-link {
    color: #1db954;
    font-weight: 800;
  }

  @media (max-width: 680px) {
    /* color: ${(props: any) => (props.displaySidebar ? "#000" : "#fff")}; */
    position: absolute;
    z-index: 9999;
    width: ${(props: any) => (props.displaySidebar ? "0" : "50%")};
    min-width: ${(props: any) => (props.displaySidebar ? "0" : "250px")};
    overflow: hidden;
    padding: ${(props: any) => (props.displaySidebar ? "0" : "30px")};
    opacity: ${(props: any) => (props.displaySidebar ? "0" : "1")};
    color: ${(props: any) =>
      props.displaySidebar ? "transparent" : "inherit"};
    transition: 0.5s ease;

    .logo {
      visibility: hidden;
    }
  }
`;
