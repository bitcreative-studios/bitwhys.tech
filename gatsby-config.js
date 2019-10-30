require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `The Tell Us Straighter`,
    description: `Providing color commentary about technical topics, in black and white.`,
    author: `@bitwhys`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
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
