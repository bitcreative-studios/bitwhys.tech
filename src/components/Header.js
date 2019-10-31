import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Container from "@components/elements/Container"

const menu = ["Topics", "Videos", "About"]
const Brand = styled(Link)`
  ${tw` no-underline font-bold text-xl`};
  color: #ff0844;
`
const MenuItem = styled(Link)`
  ${tw`px-3 no-underline font-semibold text-md`};
  text-transform: capitalize;
  color: #1e1a1d;
  :last-of-type {
    padding-right: 0;
  }
`

const Header = ({ homePage }) => {
  const {
    site: {
      siteMetadata: { shortName: title },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          shortName
        }
      }
    }
  `)
  return (
    <header>
      <Container
        css={css`
          ${tw`flex justify-between py-4`};
          border-bottom: ${!homePage && `1px solid #e6e6e6`};
          font-family: "Ex Mukta", sans-serif;
        `}
      >
        <Brand to="/">{title}</Brand>
        <nav>
          {menu.map(link => (
            <MenuItem to={`/${link.toLowerCase()}`}>{link}</MenuItem>
          ))}
        </nav>
      </Container>
    </header>
  )
}

export default Header
