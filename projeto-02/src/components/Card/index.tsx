import React from "react"

import { Container } from "./styles"

type CardProductProps = {
  image: {
    src: string
    alt: string
  }
}

export const Card: React.FC<CardProductProps> = ({ image }) => {
  return (
    <Container>
      <img src={image.src} alt={image.alt} />
    </Container>
  )
}
