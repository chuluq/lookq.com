import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline" />
            <h1>I'm Look</h1>
            <h4>Front End Developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <StaticImage
          src="../assets/hero-img.svg"
          width={1019.48}
          height={436.68}
          className="hero-img"
        />
      </div>
    </header>
  )
}

export default Hero
