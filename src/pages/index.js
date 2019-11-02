import React from "react"
import { css } from "@emotion/core"

import avatar from "@images/avatar.svg"
import github from "@images/github.svg"
import Header from "@components/Header"
import Hero from "@components/Hero"
import Lorem from "@components/Lorem"
import Section from "@components/elements/Section"
import SEO from "@components/seo"
import { Footer, Icon, Logos, SmallIcon } from "@components/index"
import Gallery from "@components/Gallery"

const logos = [
  {
    name: "avatar",
    logo: avatar,
  },
]

export default () => (
  <>
    <SEO title="Home" />
    <Header />
    <Hero />
    <Section heading="pretty things">
      <Gallery />
    </Section>
    <Section heading="My Changelog">
      <article
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
      </article>
    </Section>
  </>
)
