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
          }
        }
      }
    }
  `)

  return nodes.map(({ excerpt, frontmatter: { title, slug, author } }) => ({
    excerpt,
    title,
    slug,
    author,
  }))
}

export default usePosts
