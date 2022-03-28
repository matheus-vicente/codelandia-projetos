import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FormInput: React.FC<FormInputProps> = ({ label, ...props }) => {
  return (
    <Container>
      <span>{label}</span>
      <input {...props} />
    </Container>
  );
};
