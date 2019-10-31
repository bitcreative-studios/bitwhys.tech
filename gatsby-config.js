require("dotenv").config({
  path: `.env.${process.env}`
})

module.exports = {
  siteMetadata: {
    title: `The Tell Us Straighter`,
    description: `Providing colored commentary. Musings, explanations and 
    general explorations regarding everything related to creating modern software`,
    author: `@bitwhys`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatFile: true,
        analyzerMode: 'static'
      },
    },
  ],
}
