import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <Seo title="Dead End" />
      <main className="error-page">
        <div className="error-container">
          <h1>oops it's a dead end</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
