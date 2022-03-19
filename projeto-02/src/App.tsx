import React from 'react'

import { Header } from './components/Header'
import { Home } from './pages/Home'

import { GlobalStyle } from './styles/global'

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  )
}
