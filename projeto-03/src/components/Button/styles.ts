import styled from "styled-components";

export const Container = styled.button`
  padding: 0.875rem 3.125rem;
  border: none;
  border-radius: 5px;
  color: var(--white);
  background-color: var(--purple-800);
  transition: background-color 0.2s;

  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #a5a0ff;
  }
`;
