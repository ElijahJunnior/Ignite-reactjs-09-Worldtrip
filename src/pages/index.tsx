// React / Next
import { GetStaticProps } from 'next';

// Chakra
import { Box, Flex, Text, Heading, Image, Divider, Show, useBreakpointValue, SimpleGrid, GridItem } from '@chakra-ui/react';

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

  const bannerImg = "https://images.unsplash.com/photo-14953445178" +
    "68-8ebaf0a2044a?ixid=MnwzMDYxNDh8MHwxfHNlYXJjaHwxMnx8YWZyaWNh" +
    "fGVufDB8MHx8fDE2NDYzMjc3Njg&ixlib=rb-1.2.1&w=1920"

  return (
    <Flex w="100%" minW="minWidth" flexDir="column">
      <Header />
      <Flex
        h={["163px", "220px", "277px", "336px"]}
        bgImage={bannerImg} bgSize="cover" justify="center"
      >
        <Flex
          w="100%" maxW="maxWidth" position="relative"
          px={["16px", "44px", "72px", "100px"]}
          pt={["28px", "45px", "62px", "80px"]}
        >
          <Box maxW="512px" color="light.text">
            <Heading
              fontWeight="500"
              mb={["8px", "13px", "18px", "24px"]}
              fontSize={["20px", "24px", "28px", "36px"]}
              lineHeight={["30px", "38px", "46px", "54px"]}
            >
              5 Continentes,
              <br />
              infinitas possibilidades.
            </Heading>
            <Text
              fontWeight="400"
              fontSize={["14px", "16px", "18px", "20px"]}
              lineHeight={["21px", "24px", "27px", "30px"]}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          <Show above='lg'>
            <Box
              width={useBreakpointValue({ lg: "280px", xl: "416px" })}
              transform="rotate(3deg)"
              position="absolute" bottom="-40px"
              right={["16px", "44px", "72px", "100px"]}
            >
              <Image src="/images/airplane.svg" alt="Icone de avião" />
            </Box>
          </Show>
        </Flex>
      </Flex>
      <SimpleGrid
        w="100%" maxW="maxWidth" mx="auto" mt={["36px", "50px", "64px", "80px"]}
        px={["16px", "44px", "72px", "100px"]} spacingY="24px"
        columns={[2, 2, null]} minChildWidth={[null, null, "120px"]}
      >
        <TrevelType description='vida noturna' imageSrc="/images/cocktail.svg" />
        <TrevelType description='praia' imageSrc="/images/surf.svg" />
        <TrevelType description='moderno' imageSrc="/images/building.svg" />
        <TrevelType description='clássico' imageSrc="/images/museum.svg" />
        <TrevelType description='e mais...' imageSrc="/images/earth.svg" colSpan={[2, 2, 1]} />
      </SimpleGrid>
      <Divider
        w={["60px", "70px", "80px", "90px"]} h="2px"
        mt={["36px", "50px", "64px", "80px"]}
        alignSelf="center" bg="dark.text"
      />
      <Heading
        mt={["24px", "42px", "24px", "52px"]} fontWeight="500" textAlign="center"
        fontSize={["20px", "25px", "30px", "36px"]} lineHeight={["30px", "38px", "46px", "54px"]}

      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
      <ContinentArea
        continents={continents}
        w="100%" maxW="maxWidth"
        h={["250px", "316px", "382px", "450px"]}
        px={["0", null, "50px", "100px"]}
        my={["20px", "27px", "34px", "52px"]}
        alignSelf="center"
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