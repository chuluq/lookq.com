module.exports = {
  siteMetadata: {
    title: "LookQ Portfolio",
    description: "This is LookQ Portfolio Site",
    author: "Chuluq",
    twitterUsername: "@choirulchuluq",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`jobs`, `projects`, `blogs`],
      },
    },
  ],
}
