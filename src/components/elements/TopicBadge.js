import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Link } from "gatsby"

/**
 *  TODO: TopicBadge
 *    - decide on variant pattern (prop, use s-s)
 *    - how to trigger hover state when part of gallery component
 *    - link to associated Dribble Bucket || Topic page
 *
 */
const Base = styled(Link)`
  ${tw`
    text-xs capitalize px-2 py-1 no-underline
  `};
  display: inline-block;
  font-family: "Ek Mukta", sans-serif;
  user-select: none;
  box-shadow: 0 0 0 1px rgb(237, 242, 247);
  border-radius: 3px;
  color: #bbbbbb;
  background-color: transparent;
  transition: all 300ms linear;
  :hover {
    background-color: #ff0844;
    box-shadow: 0 4px 8px rgb(0, 0, 0, 0.25);
    color: #fff;
  }
`
const TopicBadge = ({ topic, className }) => (
  <Base className={className}>{topic}</Base>
)

export default TopicBadge
