import React from "react"
import { css } from "@emotion/core"
import SEO from "@components/seo"

import { Footer, Icon, Logos, Main, SmallIcon } from "@components/index"
import Lorem from "@components/Lorem"
import Container from "@components/elements/Container"
import Header from "@components/Header"

import avatar from "@images/avatar.svg"
import github from "@images/github.svg"
import Hero from "@components/Hero"

const logos = [
  {
    name: "avatar",
    logo: avatar,
  },
]

export default () => (
  <>
    <Header />
    <Hero />
    <Container>
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
    </Container>
  </>
)
