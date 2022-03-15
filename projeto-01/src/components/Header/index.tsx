import React from "react"

import { Input } from "../Input"

import SearchIcon from "../../assets/search-icon.png"

import "./styles.css"

export const Header: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-content">
          <h1>Codelândia</h1>

          <span>blog</span>
        </div>

        <Input
          className="header-search-input"
          placeholder="Perquisar no blog"
          icon={{ src: SearchIcon, alt: "Ícone de busca" }}
        />
      </div>
    </header>
  )
}
