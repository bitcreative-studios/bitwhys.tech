import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import useInstagram from "../hooks/use-instagram"

const Insta = () => {
  const instaPhotos = useInstagram()
  const { username } = instaPhotos[0]
  return (
    <>
      <h2>Instagram posts from @{username}</h2>
      <div
        css={css`
          display: flex;
        `}
      >
        {instaPhotos.map(photo => (
          <a
            key={photo.id}
            href={`https://instagram.com/p/${photo.id}`}
            css={css`
              display: block;
              box-shadow: none;
              margin: 0.5rem;
              max-width: calc(33% - 1rem);
              width: 120px;
              transition: 200ms box-shadow linear;

              :hover,
              :focus {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }
            `}
          >
            <Image
              fluid={photo.image}
              alt={photo.caption}
              css={css`
                width: 100%;
                * {
                  margin-top: 0;
                }
              `}
            />
          </a>
        ))}
      </div>
      <a href={`https://instagram.com/bitwhys`}>See more on Instagram &rarr;</a>
    </>
  )
}

export default Insta
