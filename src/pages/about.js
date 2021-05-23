import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Title from "../components/Title"

const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  const { title, info, image, stack } = nodes[0]
  const srcImage = getImage(image.localFile)

  return (
    <Layout>
      <Seo title="About" description="about lookq" />
      <section className="about-page">
        <div className="section-center about-center">
          <GatsbyImage image={srcImage} alt={title} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        info
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

export default About
