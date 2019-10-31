import { css } from "@emotion/core"

const BREAK_POINTS = [568, 768, 992, 1200]
export const mq = BREAK_POINTS.map(bp => `@media (min-width: ${bp}px)`)

// FIXME: this approach doesn't work with emotion
// export const above = ["md", "lg", "xl"].reduce((breakpoints, width) => {
//   breakpoints[width] = (...args) => `
//     @media screen and (min-width: ${BREAK_POINTS[width]}px) {
//       ${css(...args)}
//     }
//   `
//   return breakpoints
// }, {})

// FIXME: this approach doesn't work with emotion
// export const below = ["md", "lg", "xl"].reduce((breakpoints, width) => {
//   breakpoints[width] = (...args) => `
//     @media screen and (max-width: ${BREAK_POINTS[width]}px) {
//       ${css(...args)}
//     }
//   `
//   return breakpoints
// }, {})

export const namedTemplateColumns = mapping => {
  let result = ""
  for (const [k, v] of Object.entries(mapping)) {
    result += `${k === "empty" ? "." : k} `.repeat(v)
  }
  return result
}

// FIXME: need to use new mq helper
// export const gridTemplate = ({ withRow = false } = {}) => {
//   const rowGrid = withRow
//     ? css`
//         grid-row-gap: 15px;
//         grid-template-rows: repeat(12, 1fr);
//       `
//     : ""
//   return css`
//     display: grid;
//     grid-column-gap: 15px;
//     grid-template-columns: 15px repeat(12, 1fr) 15px;
//     ${above.lg(css`
//       grid-template-columns: auto repeat(12, minmax(0px, 80px)) auto;
//     `)};
//     ${above.xl(css`
//       grid-template-columns: auto repeat(12, minmax(0px, 100px)) auto;
//     `)};
//     ${rowGrid}
//   `
// }
