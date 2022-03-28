import React from "react";

import BannerImg from "../../assets/Banner.png";

import { Button } from "../Button";

import { Container, Content, ImageWrapper, TitleWrapper } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <TitleWrapper>
          <h1>Lorem ipsum dolor sit amet</h1>

          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
            massa sit amet augue consectetur ullamcorper non ac massa.
          </span>

          <Button type="button">Botão</Button>
        </TitleWrapper>

        <ImageWrapper>
          <img src={BannerImg} alt="Banner" />
        </ImageWrapper>
      </Content>
    </Container>
  );
};
