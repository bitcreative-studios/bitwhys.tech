import React from "react"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import Container from "@components/elements/Container"

const SectionBase = styled.section`
  ${tw`mt-16`}
`
const SectionHeading = styled.h2`
  border-bottom: 1px solid;
  ${tw`py-4 text-xl capitalize border-gray-200`};
`

const Section = ({ heading, children }) => {
  return (
    <SectionBase>
      <Container>
        <SectionHeading>{heading}</SectionHeading>
        {children}
      </Container>
    </SectionBase>
  )
}

export default Section
