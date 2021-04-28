import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import Navigation from "./navigation"
import HeaderLogo from "./logos/headerLogo"

import "../scss/header.scss"

const Header = ({ 
  heroImage, heroImageCaption, heroTitle, heroCaption 
}) => (
  <>
    <header>
      <div className="hero">
        <GatsbyImage 
          image={heroImage}
          alt="an image"
          className="heroImage"
        />
        <div className="menuOverlay">
          <Navigation />
        </div>
      </div>
    </header>
    <div className="heroCaption">{heroImageCaption}</div>
  </>
)

export default Header
