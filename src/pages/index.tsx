import { Box, Flex, Text, Heading, HStack } from '@chakra-ui/react';
import Image from 'next/image';

import { Header } from '../components/Header';
import AirplaneImg from '../../public/Images/airplane.svg';
import CocktailImg from '../../public/images/cocktail.svg';
import SurfImg from '../../public/images/surf.svg';
import BuildingImg from '../../public/images/building.svg';
import MuseumImg from '../../public/images/museum.svg';
import EarthImg from '../../public/images/earth.svg';

export default function Home() {
  return (
    <>
      <Header />
      <Flex
        w="100vw" h="21rem" justify="center"
        bgImage="images/homeBanner.png" bgSize="cover" 
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
            <Image src={AirplaneImg} alt="Avião"/>
          </Box>
        </Flex>
      </Flex>
      <Flex maxW={1280} justify="center">
        <HStack w="100%" pt="7.5rem" justify="space-around">
          <Box textAlign="center">
            <Image src={CocktailImg} alt="Coquetel"/>
            <Text pt="1.5rem">vida noturna</Text>
          </Box>
          <Box>
            <Image src={SurfImg} alt="Prancha de Surf"/>
            <Text pt="1.5rem">praia</Text>
          </Box>
          <Box>
            <Image src={BuildingImg} alt="Prédio"/>
            <Text pt="1.5rem">moderno</Text>
          </Box>          
          <Box>
            <Image src={MuseumImg} alt="Museu"/>
            <Text pt="1.5rem">clássico</Text>
          </Box>
          <Box>
            <Image src={EarthImg} alt="Planeta Terra"/>
            <Text pt="1.5rem">e mais...</Text>
          </Box>
        </HStack>
      </Flex>
    </>
  )
}