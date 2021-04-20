import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Title from "../components/Title"
import SEO from "../components/SEO"

const Home = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" description="homepage" />
      <Hero />
    </Layout>
  )
}

export default Home
