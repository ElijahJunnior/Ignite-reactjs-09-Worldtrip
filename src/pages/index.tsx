import { Box, Flex } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <Flex w='100vw' h='100vh' bg='green.400'>
      <Box width="50" height='50' bg='dark.text'> </Box>
      <Box width="50" height='50' bg='dark.info'> </Box>
      <Box width="50" height='50' bg='light.text'> </Box>
      <Box width="50" height='50' bg='light.info'> </Box>
    </Flex>
  )
}
