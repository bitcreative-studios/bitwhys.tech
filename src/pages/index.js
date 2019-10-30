import tw from "tailwind.macro"
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/post-preview"

const Heading = tw.h2`
  text-2xl font-bold my-3
`

export default () => {
  const posts = usePosts()
  return (
    <Layout>
      {" "}
      <h1>Home</h1>
      <p>Sup Roseville!</p>
      <Link to="/about"> Learn more about me &rarr;</Link>
      <Heading>Read my blog</Heading>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}
