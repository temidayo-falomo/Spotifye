import styled from "styled-components";

export const StyledRadio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 10px;
  margin-top: 3rem;

  h3 {
    font-size: 1.4rem;
  }

  .radios {
    display: grid !important;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
  }
`;
