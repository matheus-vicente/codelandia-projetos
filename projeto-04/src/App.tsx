import React from "react";

import { Home } from "./pages/Home";

import { GlobalStyle } from "./styles/global";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};
