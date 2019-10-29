import React from "react"
import { Global, css } from "@emotion/core"
import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        html,
        body {
          color: #555;
          font-size: 18px;

          /* remove margin the main div that Gatsby mounts into */
          > div {
            margin-top: 0;
          }
          h1 {
            font-size: 2em;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;
            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }
        }
      `}
    />
    <Header />
    <main
      css={css`
        margin: 2rem auto 4rem;
        max-width: 90vw;
        width: 550px;
      `}
    >
      {children}
    </main>
  </>
)

export default Layout
