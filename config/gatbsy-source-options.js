const path = require("path")
const PROJECT_ROOT = path.resolve(__dirname, "..")

module.exports = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog`,
      path: path.resolve(PROJECT_ROOT, "content/blog"),
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.resolve(PROJECT_ROOT, "images"),
    },
  },
]
