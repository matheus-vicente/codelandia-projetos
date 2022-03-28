import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};
