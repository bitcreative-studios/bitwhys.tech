import { graphql, useStaticQuery } from "gatsby"

/**
 * Return the site title and description defined in gatsby-config
 *
 * @returns {Record<string, any> | module.exports.siteMetadata | {author, description, title}}
 */
const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return data.site.siteMetadata
}

export default useSiteMetadata
