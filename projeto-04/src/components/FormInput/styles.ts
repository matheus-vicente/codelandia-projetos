import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 1rem;
    margin-bottom: 0.625rem;
  }

  input {
    padding: 1rem 0 1rem 1rem;
    border: 1px solid var(--gray-50);
    border-radius: 5px;

    &::placeholder {
      font-size: 0.875rem;
    }
  }
`;
