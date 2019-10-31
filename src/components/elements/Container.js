import React from "react"
import styled from "@emotion/styled"
import { mq } from "@utils"
import { css } from "@emotion/core"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 460px;
  background-color: #e0e0e0;
  ${mq[1]} {
    max-width: 720px;
  }
  ${mq[2]} {
    max-width: 960px;
  }
  ${mq[3]} {
    max-width: 1170px;
  }
`
const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Container
