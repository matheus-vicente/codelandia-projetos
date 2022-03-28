import React from "react";

import { Container, ContentBody, ContentHeader } from "./styles";

export type CardProps = {
  title: string;
  content: string;
  color: string | undefined;
};

export const Card: React.FC<CardProps> = ({ title, color, content }) => {
  return (
    <Container>
      <ContentHeader color={color || "#FF6363"} />
      <ContentBody>
        <h4>{title}</h4>
        <span>{content}</span>
      </ContentBody>
    </Container>
  );
};
