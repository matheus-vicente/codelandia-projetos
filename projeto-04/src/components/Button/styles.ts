import styled, { css } from "styled-components";

type ContainerProps = {
  variant: "success" | "dark";
};

export const Container = styled.button<ContainerProps>`
  padding: 0.875rem;
  color: var(--white);
  ${(props) =>
    props.variant === "success"
      ? css`
          background-color: var(--green);
        `
      : css`
          background-color: var(--gray-800);
        `}
  border: none;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 0.5rem;
  }
`;
