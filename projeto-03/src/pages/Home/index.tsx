import React from "react";

import { Card } from "../../components/Card";

import { Container, Content } from "./styles";

const cards = [
  {
    title: "Titulo do card",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.",
  },
  {
    title: "Titulo do card",
    color: "#63ECFF",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.",
  },
  {
    title: "Titulo do card",
    color: "#F363FF",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.",
  },
  {
    title: "Titulo do card",
    color: "#63FF73",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.",
  },
  {
    title: "Titulo do card",
    color: "#FFDD63",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.",
  },
  {
    title: "Titulo do card",
    color: "#6663FF",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.",
  },
];

export const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        {cards.map(({ title, color, content }) => (
          <Card
            key={Math.random()}
            title={title}
            color={color}
            content={content}
          />
        ))}
      </Content>
    </Container>
  );
};
