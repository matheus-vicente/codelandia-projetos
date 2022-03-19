import React from "react"

import { Container, Line, Banner, BannerContainer } from "./styles"

export const Header: React.FC = () => {
  return (
    <Container>
      <Line>
        <span>Ganhe R$ 10,00 de desconto no frete</span>
      </Line>

      <Line isTitle>
        <h1>JordanShoes</h1>
      </Line>

      <Banner>
        <BannerContainer>
          <div className="banner-content">
            <h3>A melhor loja de Jordan</h3>

            <span>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</span>
          </div>
        </BannerContainer>
      </Banner>
    </Container>
  )
}
