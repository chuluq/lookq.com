import React from "react"
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebook className="" />,
    url: "https://facebook.com",
  },
  {
    id: 2,
    icon: <FaTwitter className="" />,
    url: "https://twitter.com",
  },
  {
    id: 3,
    icon: <FaGithub className="" />,
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

export default ({ styleClass }) => (
  <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
)
