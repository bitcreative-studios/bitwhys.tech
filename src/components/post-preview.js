import React from "react"
import Image from "gatsby-image"
import tw from "tailwind.macro"
import { Link } from "gatsby"
import ReadLink from "./read-link"
import { css } from "@emotion/core"

const Article = tw.article`
  flex items-center border-b border-gray-300 mt-3 pb-4 
`

const Title = tw.h3`
  text-lg
`
const PostPreview = ({ post }) => (
  <Article>
    <Link
      to={post.slug}
      css={css`
        margin: 1rem 1rem 0 0;
        width: 100px;
      `}
    >
      <Image
        fluid={post.image.sharp.fluid}
        css={css`
          * {
            margin-top: 0;
          }
        `}
        alt={post.title}
      />
    </Link>
    <div>
      <Title>
        <Link to={post.slug}>{post.title}</Link>
      </Title>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </div>
  </Article>
)

export default PostPreview
