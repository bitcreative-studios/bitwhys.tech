import { graphql, useStaticQuery } from "gatsby"

const useInstagram = () => {
  const {
    allInstaNode: { nodes },
  } = useStaticQuery(graphql`
    query {
      allInstaNode {
        nodes {
          id
          caption
          username
          file: localFile {
            sharp: childImageSharp {
              fluid(maxWidth: 120, maxHeight: 120) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return nodes.map(({ id, caption, username, file }) => ({
    id,
    caption,
    username,
    image: file.sharp.fluid,
  }))
}

export default useInstagram
