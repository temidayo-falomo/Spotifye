import styled from "styled-components";

export const StyledTopArtisteCard = styled.div`
  /* width: 300px; */
  min-height: 320px;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #181818;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  cursor: pointer;
  transition: 0.5s ease;
  text-transform: capitalize;
  overflow: hidden;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1.6px);
    -webkit-backdrop-filter: blur(1.6px);
    transition: 0.5s ease;
  }

  h4 {
    font-size: 1.2rem;
  }

  .image {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    margin: 0 auto;
  }
`;
