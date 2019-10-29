import React from "react"
import tw from "tailwind.macro"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Heading = tw.h1`
`

export default () => (
  <Layout>
    <Heading>About Me</Heading>
    <p>This is my personal website</p>
    <Link to="/"> &larr; Back to Home</Link>
  </Layout>
)
