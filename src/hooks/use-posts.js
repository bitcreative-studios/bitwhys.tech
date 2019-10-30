import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const {
    allMdx: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          excerpt
          frontmatter {
            title
            slug
            author
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                  duotone: { shadow: "#663399", highlight: "#ddbbff" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return nodes.map(
    ({ excerpt, frontmatter: { title, slug, author, image } }) => ({
      excerpt,
      title,
      slug,
      author,
      image,
    })
  )
}

export default usePosts
