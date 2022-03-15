import React from "react"

import { PostProvider } from "./hooks/posts"

import { Header } from "./components/Header"
import { Home } from "./pages/Home"

import "./styles/app.css"

export const App: React.FC = () => {

  return (
    <PostProvider>
      <>
        <Header />

        <Home />
      </>
    </PostProvider>
  )
}
