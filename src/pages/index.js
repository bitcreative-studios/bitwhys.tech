import React from "react"
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

const logos = [
  {
    name: "avatar",
    logo: require("../images/bitwhys-logo.svg"),
  },
]

export default () => (
  <Wrapper>
    <SEO title="Home" />
    <Main>
      <Logos>
        {logos &&
          logos.map(({ name, logo }, index) => (
            <Icon src={logo} alt={`${name} Logo`} key={index} />
          ))}
      </Logos>
      <Heading>Hello, world!</Heading>
      <Text>
        Welcome to The Tell-Us-Straighter:
        <br />
        Color Commentary in Black & White.
      </Text>
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
  </Wrapper>
)
