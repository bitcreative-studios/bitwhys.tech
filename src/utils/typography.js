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
  "@media only screen and (max-width: 548px)": {
    html: {
      "font-size": "90%",
    },
  },
})

const typography = new Typography({
  googleFonts,
  baseFontSize: "17px",
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
