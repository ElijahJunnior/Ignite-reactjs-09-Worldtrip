// React / Next
import { GetStaticProps } from 'next';

// Chakra
import { Box, Flex, Text, Heading, Image, Divider } from '@chakra-ui/react';

// My Components
import { Header } from '../components/Header';
import { TrevelType } from '../components/Home/TravelType';
import { ContinentArea } from '../components/Home/ContinentArea';
import { api } from '../service/api';

// types
export type Continent = {
  id: string,
  name: string,
  cover_description: string,
  cover_image: string,
  page_description: string,
  page_image: string,
  countries_number: string,
  languages_number: string,
}

type HomeProps = {
  continents: Continent[]
}

export default function Home({ continents }: HomeProps) {

  return (
    <Flex w="100%" flexDir="column">
      <Header />
      <Flex
        h="336px" justify="center"
        bgImage={
          "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a" +
          "?ixid=MnwzMDYxNDh8MHwxfHNlYXJjaHwxMnx8YWZyaWNhfGVufDB8MHx8fD" +
          "E2NDYzMjc3Njg&ixlib=rb-1.2.1&w=1920"
        }
        bgSize="cover"
      >
        <Flex w="100%" maxW={1440} px={["0", "32px", "100px"]} position="relative">
          <Box maxW="512px" pt="80px" color="light.text">
            <Heading mb="24px" fontWeight="500" fontSize="36px" lineHeight="54px">
              5 Continentes,<br />
              infinitas possibilidades.
            </Heading>
            <Text fontWeight="400" fontSize="20px" lineHeight="30px">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          <Box
            width="416px" transform="rotate(3deg)"
            position="absolute" right="100px" bottom="-40px"
          >
            <Image src="/images/airplane.svg" alt="Icone de avião" />
          </Box>
        </Flex>
      </Flex>
      <Flex
        w="100%" maxW={1440} px={["0", "32px", "100px"]}
        mt="120px" mx="auto" justify="space-between"
      >
        <TrevelType description='vida noturna' imageSrc="/images/cocktail.svg" />
        <TrevelType description='praia' imageSrc="/images/surf.svg" />
        <TrevelType description='moderno' imageSrc="/images/building.svg" />
        <TrevelType description='clássico' imageSrc="/images/museum.svg" />
        <TrevelType description='e mais...' imageSrc="/images/earth.svg" />
      </Flex>
      <Divider w={120} h={1} alignSelf="center" mt="120px" bg="dark.text" />
      <Heading
        mt="120px" fontSize="36px" lineHeight="54px"
        fontWeight="500" textAlign="center"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
      <ContinentArea
        continents={continents}
        w="100%" h="450px" maxW="1440px"
        px={["0", "0", "100px"]} my="52px" alignSelf="center"
      />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

  try {

    const continents = await api.get("continents").then(res => res.data)

    return {
      props: {
        continents
      },
      revalidate: 60 * 60 * 24 // 24hrs
    }

  } catch (error) {
    return {
      notFound: true
    }
  }
}