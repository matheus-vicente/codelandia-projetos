import React, { BaseHTMLAttributes } from "react";

import { Container } from "./styles";

interface ButtonProps extends BaseHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  variant?: "success" | "dark";
}

export const Button: React.FC<ButtonProps> = ({
  icon,
  variant,
  children,
  ...props
}) => {
  return (
    <Container variant={variant || "success"} {...props}>
      {icon && <img src={icon} alt="Icon" />}
      {children}
    </Container>
  );
};
