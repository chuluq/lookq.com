import React from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"

import logo from "../assets/underline.svg"
import PageLinks from "../constants/links"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links" />
      </div>
    </nav>
  )
}

export default Navbar
