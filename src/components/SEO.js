import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const { author, siteDesc, siteTitle, twitterUsername } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="author" content={author} />
      <meta name="description" content={description || siteDesc} />
      <meta name="twitter:creator" content={twitterUsername} />
    </Helmet>
  )
}

export default SEO
