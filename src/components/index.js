import tw from "tailwind.macro"

export const Wrapper = tw.div`
  flex items-center justify-center flex-col h-screen
`

export const Main = tw.div`
  p-6 mx-auto
`

export const Heading = tw.h1`
  text-2xl text-gray-500 uppercase
`

export const Text = tw.p`
  text-xl text-gray-700
`

export const Logos = tw.div`
  flex items-center justify-around mb-6 px-16
`

export const Icon = tw.img`
  h-10
`

export const Footer = tw.footer`
  mt-6 text-center
`

export const SmallIcon = tw.img`
  inline-block h-6
`
