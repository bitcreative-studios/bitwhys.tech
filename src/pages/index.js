import tw from "tailwind.macro"
import React from "react"
import Layout from "../components/layout"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/post-preview"
import Hero from "../components/hero"
import Insta from "../components/insta"

const Heading = tw.h2`
  text-2xl font-bold my-3
`

export default () => {
  const posts = usePosts()
  return (
    <>
      <Hero />
      <Layout>
        <Heading>Read my blog</Heading>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  )
}
