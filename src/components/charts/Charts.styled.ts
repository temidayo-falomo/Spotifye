import styled from "styled-components";

export const StyledCharts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 10px;
  margin-top: 3rem;

  h3 {
    font-size: 1.4rem;
  }

  .charts {
    display: grid !important;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
  }

  @media (max-width: 480px) {
    h3 {
      text-align: center;
    }

    .charts {
      display: flex !important;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }
`;
