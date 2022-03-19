import React from "react"
import { Card } from "../../components/Card"

import Produto1 from "../../assets/air-jordan-1.png"
import Produto2 from "../../assets/air-jordan-2.png"
import Produto3 from "../../assets/air-jordan-3.png"
import Produto4 from "../../assets/air-jordan-4.png"
import Produto5 from "../../assets/air-jordan-5.png"
import Produto6 from "../../assets/air-jordan-6.png"
import Produto7 from "../../assets/air-jordan-7.png"
import Produto8 from "../../assets/air-jordan-8.png"

import { Container, Content, HomeTitle, ProductsContainer, Footer } from "./styles"

const products = [
  {
    src: Produto1,
    alt: "Air Jordan 01"
  },
  {
    src: Produto2,
    alt: "Air Jordan 02"
  },
  {
    src: Produto3,
    alt: "Air Jordan 03"
  },
  {
    src: Produto4,
    alt: "Air Jordan 04"
  },
  {
    src: Produto5,
    alt: "Air Jordan 05"
  },
  {
    src: Produto6,
    alt: "Air Jordan 06"
  },
  {
    src: Produto7,
    alt: "Air Jordan 07"
  },
  {
    src: Produto8,
    alt: "Air Jordan 08"
  },
]

export const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <HomeTitle>
          <h4>Destaques</h4>
          <span>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</span>
        </HomeTitle>

        <ProductsContainer>
          {
            products.map((product) => (
              <div className="product-content">
                <Card key={product.src} image={product} />
              </div>
            ))
          }
        </ProductsContainer>
      </Content>

      <Footer>
        <span>Todos os direitos reservados.</span>
      </Footer>
    </Container>
  )
}
