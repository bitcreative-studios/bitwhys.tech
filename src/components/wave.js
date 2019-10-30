import React, { useState } from "react"
import { css } from "@emotion/core"

const Wave = () => {
  const [waves, setWaves] = useState(0)
  const label = `👋${waves} ${waves === 1 ? "wave" : "waves"}`
  return (
    <button
      css={css`
        background: #ff0844;
        border: none;
        font-size: 1.25rem;
        border-radius: 3px;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  )
}

export default Wave
