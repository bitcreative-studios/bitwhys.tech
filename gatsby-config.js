require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const sourceOptions = require("./config/gatbsy-source-options")
module.exports = {
  siteMetadata: {
    title: `The Tell Us Straighter`,
    shortName: "Tell Us Straighter",
    tagLine: "Providing colored commentary, in black & white.",
    description: `Musings, explanations and 
    general explorations regarding everything related to the creating of modern software`,
    author: `@bitwhys`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    ...sourceOptions,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
        extensions: [".mdx", ".md", ".markdown"],
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
        icon: `images/avatar.svg`,
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
