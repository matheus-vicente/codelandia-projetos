import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem;
`;

export const Content = styled.div`
  display: grid;
  row-gap: 2rem;
  column-gap: 6.5rem;
  justify-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(222px, 1fr));
`;
