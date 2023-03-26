import { ChakraProvider } from "@chakra-ui/react"

function Tiles({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default Tiles
