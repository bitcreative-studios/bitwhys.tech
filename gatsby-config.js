module.exports = {
  siteMetadata: {
    title: `The Tell-Us-Straighter`,
    description: `Color commentary, in black and white`,
    author: `@bitwhys`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tell-Us-Straighter`,
        short_name: `Tell-Us-Straighter`,
        start_url: `/`,
        background_color: `#ff0844`,
        theme_color: `#ff0844`,
        display: `standalone`,
        icon: `src/images/bitwhys-logo.svg`,
      },
    },
  ],
}
