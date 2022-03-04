import { Flex, Heading, Text, HStack, VStack, Image, SimpleGrid } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { InfoCard } from '../../components/Continente/InfoCard';
import { CityCard } from '../../components/Continente/CityCard';
import { Header } from '../../components/Header';
import { Continent } from '../../components/Home/ContinentItem';

interface Iparams extends ParsedUrlQuery {
    slug: string
}

type ContinentProps = {
    continent: Continent
}

export default function ContinentPage({ continent }: ContinentProps) {
    return (
        <>
            <Header />
            <Flex w="100%" h="500px" bg="dark.text" mb="80px">
                <Flex 
                    w="100%" h="100%" maxW="1280px" m="0 auto" flexDir="column-reverse"
                    bgPos="center" bgSize="cover" bgImage={continent.page_image}
                >
                    <Heading 
                        fontSize="48px" fontWeight="600" 
                        lineHeight="72px" mb="3.625rem" color="light.text"
                    >
                        {continent.name}
                    </Heading>
                </Flex>
            </Flex>
            <Flex w="100%" maxW="1280px" m="0 auto" flexDir="column">
                <HStack spacing="70px" mb="80px">
                    <Text
                        color="dark.text" fontWeight="400" fontSize="24px"
                        lineHeight="36px" textAlign="justify"
                    >
                        {continent.page_description}
                    </Text>
                    <HStack spacing="42px">
                        <InfoCard counter={Number(continent.countries_number)} description="países" />
                        <InfoCard counter={Number(continent.languages_number)} description="linguas" />
                        <InfoCard counter={27} description="cidades +100" infoText="teste" />
                    </HStack>
                </HStack>
                <Heading
                    mb="50px" fontWeight="500" fontSize="36px"
                    color="dark.text" lineHeight="54px"
                >
                    Cidades +100
                </Heading>
                <SimpleGrid mb="125px" minChildWidth="256px" spacing="85px">
                    <CityCard />
                    <CityCard />
                    <CityCard />
                    <CityCard />
                    <CityCard />
                    <CityCard />
                </SimpleGrid>
            </Flex>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps<ContinentProps> = async (ctx) => {

    const { slug } = ctx.params as Iparams

    const data = await fetch(`http://localhost:3333/continents/${slug}`).then((res: Response) => {
        return res.json();
    })

    return {
        props: {
            continent: data
        },
        revalidate: 60
    }
}