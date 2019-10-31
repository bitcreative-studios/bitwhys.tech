import React from "react"
import styled from "@emotion/styled"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { mq } from "@utils"
import { css } from "@emotion/core"
import Container from "@components/elements/Container"

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  background-attachment: fixed;
  height: 400px;
  ${mq[1]} {
    height: 500px;
  }
`

const TextBox = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.35);
`

const Hero = () => {
  const {
    mdx: { frontmatter: image },
    site: { info: blog },
  } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { title: { eq: "hero-image" } }) {
        frontmatter {
          credit: bannerCredit
          banner {
            sharp: childImageSharp {
              fluid(quality: 80, maxWidth: 1920, grayscale: true) {
                src
              }
            }
          }
        }
      }
      site {
        info: siteMetadata {
          tagLine
          description
        }
      }
    }
  `)
  return (
    <ImageBackground Tag="section" fluid={image.banner.sharp.fluid}>
      <TextBox>
        <h1>
          Providing colored commentary, in{" "}
          <span
            css={css`
              color: #ff0844;
            `}
          >
            black & white.
          </span>
        </h1>
        <p
          css={css`
            max-width: 55%;
            text-align: center;
          `}
        >
          {blog.description}
        </p>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
