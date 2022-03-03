// React / Next
import { useEffect, useState } from 'react';
import { GetStaticProps, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Image from 'next/image';

// Chakra
import { Box, Flex, Text, Heading, HStack, Divider } from '@chakra-ui/react';

// My Components
import { Header } from '../components/Header';
import { TrevelType } from '../components/Home/TravelType';
import { ContinentArea, Continent } from '../components/Home/ContinentArea';

// Images
import AirplaneImg from '../../public/Images/airplane.svg';
import CocktailImg from '../../public/images/cocktail.svg';
import SurfImg from '../../public/images/surf.svg';
import BuildingImg from '../../public/images/building.svg';
import MuseumImg from '../../public/images/museum.svg';
import EarthImg from '../../public/images/earth.svg';

type HomeProps = {
  continents: Continent[]
}

export default function Home({ continents }: HomeProps) {

  return (
    <Flex w="100%" flexDir="column">
      <Header />
      <Flex
        h="21rem" justify="center"
        bgImage={
          "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a" + 
          "?ixid=MnwzMDYxNDh8MHwxfHNlYXJjaHwxMnx8YWZyaWNhfGVufDB8MHx8fD" + 
          "E2NDYzMjc3Njg&ixlib=rb-1.2.1&w=1920"
        } 
        bgSize="cover"
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
            <Image src={AirplaneImg} alt="Avião" />
          </Box>
        </Flex>
      </Flex>
      <Flex w="100%" maxW={1280} m="0 auto" mt="7.5rem" justify="space-around">
        <TrevelType description='vida noturna' imageSrc={CocktailImg} />
        <TrevelType description='praia' imageSrc={SurfImg} />
        <TrevelType description='moderno' imageSrc={BuildingImg} />
        <TrevelType description='clássico' imageSrc={MuseumImg} />
        <TrevelType description='e mais...' imageSrc={EarthImg} />
      </Flex>
      <Divider w={120} h={1} alignSelf="center" mt="7.5rem" bg="dark.text" />
      <Heading
        mt="7.5rem" fontSize="36px" lineHeight="54px"
        fontWeight="500" textAlign="center"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
      <ContinentArea
        continents={continents}
        w="100%" h="28.125rem" maxW="1280px" my="3.25rem"
        alignSelf="center" bg="light.info"
      />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

  const continents: Continent[] = await fetch(
    "http://localhost:3333/continents"
  ).then(
    res => res.json()
  )

  return {
    props: {
      continents
    },
    revalidate: 60 * 60 * 24 // 24hrs
  }

}