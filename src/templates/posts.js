import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import tw from "tailwind.macro"
import Layout from "../components/layout"
import ReadLink from "../components/read-link"

const Title = tw.h1`
  text-3xl font-black
`
const Author = tw.p`
  text-sm mb-3
`
const Text = tw.p`
  text-red-800 mb-4
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <Title>{post.frontmatter.title}</Title>
    <Author>Posted by ({post.frontmatter.author})</Author>
    <Text>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Text>
    <ReadLink to="/"> &larr; back to all posts</ReadLink>
  </Layout>
)

export default PostTemplate

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`
