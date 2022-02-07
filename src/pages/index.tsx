import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import Image from 'next/image';

import { Header } from '../components/Header'
import BannerImg from '../../public/Images/homeBanner.png'

export default function Home() {
  return (
    <>
      <Header />
      <Flex position="relative">
        {/* <Box zIndex="1" bg='color'>
          <Heading>Elias 123</Heading>
          <Text>Elias 123</Text>
        </Box>
        <Box w="100vw" height="21rem" position="absolute" top="0" left="0" overflow="hidden" zIndex="1">
          <Image src={BannerImg} layout="responsive" alt="banner" />
        </Box> */}
      </Flex>
    </>
  )
}