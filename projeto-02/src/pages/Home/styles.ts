import styled from "styled-components"

export const Container = styled.main``

export const Content = styled.section`
padding: 2.5rem 6rem;
`

export const HomeTitle = styled.div`
  text-align: center;

  h4 {
    font-size: 1.875rem;
  }

  span {
    display: block;
    margin-top: 1rem;
  }
`

export const ProductsContainer = styled.div`
margin-top: 2.5rem;
  display: grid;
  grid-gap: 2rem;
  justify-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export const Footer = styled.div`
  background-color: var(--black);
  color: var(--white);
  text-align: center;
  padding: 1rem 0;
`
