import React from "react";

import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";

import BannerImg from "../../assets/images/banner.png";
import GoogleIcon from "../../assets/images/google-icon.png";

import { Container, SectionFormContainer, SectionFormContent } from "./styles";

export const Home: React.FC = () => {
  return (
    <Container>
      <section className="section-banner">
        <img src={BannerImg} alt="Banner" />
      </section>

      <SectionFormContainer>
        <SectionFormContent>
          <div className="section-head">
            <span>Bem vindo de volta</span>
            <h2>Faça login na sua conta</h2>
          </div>

          <form>
            <div>
              <FormInput className="form-inputs" label="E-mail" />
              <FormInput
                label="Senha"
                type="password"
                className="form-inputs"
              />
            </div>

            <div className="form-remember">
              <div className="remember-wrapper">
                <input type="checkbox" />
                <span>Lembre de mim</span>
              </div>
              <a href="#">Esqueceu sua senha?</a>
            </div>

            <div className="form-buttons">
              <Button>Entrar</Button>
              <Button variant="dark" icon={GoogleIcon}>
                Ou faça login com o Google
              </Button>
            </div>
          </form>

          <div className="section-bottom">
            Não tem uma conta?
            <a href="#">Cadastre-se</a>
          </div>
        </SectionFormContent>
      </SectionFormContainer>
    </Container>
  );
};
