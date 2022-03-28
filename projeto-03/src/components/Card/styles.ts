import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 340px;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

type ContentHeaderProps = { color: string };

export const ContentHeader = styled.div<ContentHeaderProps>`
  height: 222px;
  ${({ color }) =>
    css`
      background-color: ${color};
    `}
`;

export const ContentBody = styled.div`
  padding: 1.5rem 1.875rem;

  span {
    display: block;
    margin-top: 1.625rem;
  }
`;
