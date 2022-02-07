import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';

import { Header } from '../components/Header'
import BannerImg from '../../public/Images/homeBanner.png'

export default function Home() {
  return (
    <>
      <Header />

      <Flex position="relative" >
        <Box w="100vw" h="21rem" position="absolute" top="0" left="0">
          <Image src={BannerImg} layout="fill" />
        </Box>
      </Flex>
    </>
  )
}