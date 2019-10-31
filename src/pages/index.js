import React from "react"
import { css } from "@emotion/core"
import SEO from "@components/seo"

import github from "../images/github.svg"
import {
  Footer,
  Heading,
  Icon,
  Logos,
  Main,
  SmallIcon,
  Text,
  Wrapper,
} from "@components/index"
import Lorem from "@components/Lorem"

const logos = [
  {
    name: "avatar",
    logo: require("../images/bitwhys-logo.svg"),
  },
]

export default () => (
  <div>
    <SEO title="Home" />
    <Main
      css={css`
        max-width: 750px;
      `}
    >
      <Logos>
        {logos &&
          logos.map(({ name, logo }, index) => (
            <Icon src={logo} alt={`${name} Logo`} key={index} />
          ))}
      </Logos>
      <Lorem />
      <Footer>
        <a
          href="https://github.com/bitwhys/bitwhys.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SmallIcon src={github} alt="Githib Icon" />
        </a>
      </Footer>
    </Main>
  </div>
)
