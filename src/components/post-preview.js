import React from "react"
import tw from "tailwind.macro"
import { Link } from "gatsby"
import ReadLink from "./read-link"

const Article = tw.article`
  border-b border-gray-300 mt-3 pb-4
`

const Title = tw.h3`
  text-lg
`
const PostPreview = ({ post }) => (
  <Article>
    <Title>
      <Link to={post.slug}>{post.title}</Link>
    </Title>
    <p>{post.excerpt}</p>
    <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
  </Article>
)

export default PostPreview
