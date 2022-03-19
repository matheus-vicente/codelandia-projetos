import { HtmlHTMLAttributes } from "react"
import styled, { css } from "styled-components"

export const Container = styled.header``

interface LineProps extends HtmlHTMLAttributes<HTMLDivElement> {
  isTitle?: boolean
}

export const Line = styled.div<LineProps>`
  padding: 1rem 0;
  text-align: center;
  color: var(--white);
  ${({ isTitle }) => isTitle
    ? css`background-color: var(--white);`
    : css`background-color: var(--black);`
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--black);
  }
`

export const Banner = styled.div`
  height: 378px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/assets/Air-Jordan-1-Retro-High-OG-Wmns-TWIST-Feminino 1.png');

  display: flex;
`

export const BannerContainer = styled.div`
  flex: 1;
  padding: 6rem;
  color: var(--white);
  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  align-items: center;

  .banner-content {
    span {
      margin-top: 1rem;
      display: block;
      max-width: 25rem;
    }
  }
`
