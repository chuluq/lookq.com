import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Blog = ({ id, title, image, date, category, slug, description }) => {
  const srcImage = getImage(image.localFile)

  return (
    <Link to={`/blogs/${slug}`} key={id} className="blog">
      <article>
        <GatsbyImage image={srcImage} alt={title} className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {}

export default Blog
