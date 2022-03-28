import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--purple-100);
`;

export const Content = styled.div`
  padding: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  h1 {
    max-width: 20rem;
    font-weight: 400;
    color: var(--grey-600);
  }

  span {
    margin-top: 1rem;
    display: block;
    max-width: 22.5rem;
    color: var(--grey-100);
  }

  button {
    margin-top: 2.875rem;
  }
`;

export const ImageWrapper = styled.div``;
