import React from "react"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  ${tw`text-gray-800 mr-2  p-1 no-underline`};

  font-weight: ${p => p.fontWeight || "normal"};
  &.current-page {
    border-bottom: 2px solid #222;
  }
  &:last-of-type {
    margin-right: 0;
  }
`

const StyledHeader = styled.header`
  ${tw`flex justify-between items-center bg-gray-100 border-b border-gray-400 `};
  padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
`
const Header = () => (
  <StyledHeader>
    <NavLink to="/" fontWeight="bold">
      The Tell&nbsp;Us&nbsp;Straighter
    </NavLink>
    <nav>
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="current-page">
        About
      </NavLink>
    </nav>
  </StyledHeader>
)

export default Header
