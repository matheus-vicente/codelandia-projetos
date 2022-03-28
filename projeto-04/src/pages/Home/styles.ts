import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .section-banner {
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: var(--white-200);
  }
`;

export const SectionFormContainer = styled.div``;

export const SectionFormContent = styled.div`
  max-width: 348px;
  margin: 0 auto;

  .section-head {
    margin-top: 12rem;
    padding: 0 auto;

    h2 {
      font-size: 1.625rem;
      margin-top: 0.5rem;
    }
  }

  form {
    font-size: 0.875rem;
    margin-top: 2.5rem;

    .form-inputs {
      margin-bottom: 0.625rem;
    }

    .form-remember {
      margin-top: 1.125rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .remember-wrapper {
        display: flex;
        align-items: center;

        span {
          margin-left: 0.5rem;
        }
      }
    }

    .form-buttons {
      margin-top: 1.75rem;

      button {
        width: 100%;
      }

      button + button {
        margin-top: 1rem;
      }
    }
  }

  .section-bottom {
    margin-top: 10rem;
    text-align: center;

    a {
      margin-left: 0.5rem;
    }
  }
`;
