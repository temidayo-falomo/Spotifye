import styled from "styled-components";

export const StyledCard = styled.a`
  width: 210px;
  min-height: 280px;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #181818;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  cursor: pointer;
  transition: 0.5s ease;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1.6px);
    -webkit-backdrop-filter: blur(1.6px);
    transition: 0.5s ease;
  }

  .image {
    height: 180px;
    border-radius: 5px;
    background-color: #000;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  }

  .row.gap-5 {
    gap: 0.2rem;

    span {
      color: ghostwhite;
      font-size: 0.8rem;
      text-transform: capitalize;

      :hover {
        border-bottom: 1px solid gainsboro;
        color: gainsboro;
      }
    }
  }
`;
