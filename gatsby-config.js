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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `bitwhys`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: `${__dirname}/src/components/layout.js`,
        },
        gatsbyRemarkPlugins: [{ resolve: `gatsby-remark-images` }],
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
        icon: `${__dirname}/src/images/bitwhys-logo.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatFile: true,
        analyzerMode: "static",
      },
    },
  ],
}
