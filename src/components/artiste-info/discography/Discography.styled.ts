import styled from "styled-components";

export const StyledDiscography = styled.div`
  padding: 0 20px;
  margin-top: 2rem;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .icons {
    font-size: 2rem;
    gap: 1rem;
  }

  .discography-row {
    gap: 1rem;
    width: 100%;
    overflow-x: auto;
    transition: 0.5s ease;
    position: relative;
    overflow-x: hidden;
    justify-content: space-between;
  }
  
`;
