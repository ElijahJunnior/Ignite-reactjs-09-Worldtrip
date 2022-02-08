import { Box, Flex, Text, Heading, LightMode, HStack } from '@chakra-ui/react';
import Image from 'next/image';

import { Header } from '../components/Header'
import AirplaneImg from '../../public/Images/airplane.svg'

export default function Home() {
  return (
    <>
      <Header />
      <Flex
        w="100vw" h="21rem" justify="center"
        backgroundImage="images/homeBanner.png"
      >
        <Flex w="100%" maxW={1280} position="relative">
          <Box maxW="32rem" pt="5rem" px="1.5rem" color="light.text">
            <Heading mb="1.25rem" fontWeight="500" fontSize="36px" lineHeight="54px">
              5 Continentes,<br />
              infinitas possibilidades.
            </Heading>
            <Text fontWeight="400" fontSize="20px" fontHeight="30px">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          <Box
            width="26.rem" transform="rotate(3deg)"
            position="absolute" right="1.5rem" bottom="-2.5rem"
          >
            <Image src={AirplaneImg} />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}