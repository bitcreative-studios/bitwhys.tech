import Typography from "typography"
import "./fonts.css"

const googleFonts = [
  {
    name: "Fira Sans",
    styles: ["700"],
  },
  {
    name: "Ek Mukta",
    styles: ["500", "700"],
  },
]

const overrideStyles = ({ rhythm }) => ({
  h1: {
    fontFamily: "Fira Sans",
  },
  "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code": {
    fontSize: "inherit",
  },
  h2: {},
  h3: {},
  "h1,h2,h3,h4": {
    lineHeight: 1.25,
    marginTop: rhythm(1),
    marginBottom: rhythm(1 / 2),
    // letterSpacing: "-0.04rem",
  },
  strong: {
    fontStyle: "bold",
  },
})

const typography = new Typography({
  googleFonts,
  baseFontSize: "19px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Ek Mukta", "Fira Sans", "Roboto Condensed", "sans-serif"],
  bodyFontFamily: ["alverata", "Georgia", "serif"],
  overrideStyles,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
