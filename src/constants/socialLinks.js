import React from "react"
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/ilookq",
  },
  {
    id: 2,
    icon: <FaTwitter />,
    url: "https://twitter.com/choirulchuluq",
  },
  {
    id: 3,
    icon: <FaGithub />,
    url: "https://github.com/chuluq",
  },
]

const links = data.map(link => (
  <li key={link.id}>
    <a href={link.url} className="social-link">
      {link.icon}
    </a>
  </li>
))

const SocialLinks = ({ styleClass }) => (
  <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
)

export default SocialLinks
