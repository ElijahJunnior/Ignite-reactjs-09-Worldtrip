import { Flex, Heading, Text, HStack, VStack, Image, SimpleGrid } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { InfoCard } from '../../components/Continente/InfoCard';
import { CityCard } from '../../components/Continente/CityCard';
import { Header } from '../../components/Header';
import { Continent } from '../index';

interface Iparams extends ParsedUrlQuery {
    slug: string
}

export type City = {
    id: string, 
    rank: string, 
    city_name: string, 
    city_image: string, 
    continent: string, 
    country_name: string, 
    country_code: string, 
    country_flag_image: string, 
}

type ContinentProps = {
    continent: Continent,
    topCitys: City[]
}

export default function ContinentPage({ continent, topCitys }: ContinentProps) {
    return (
        <>
            <Header />
            <Flex 
                w="100%" h="500px" mb="80px"
                bg={`linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${continent.page_image})`} 
                bgPos="center" bgSize="cover" 
            >
                <Flex 
                    w="100%" h="100%" maxW="1280px" m="0 auto" flexDir="column-reverse"
                >
                    <Heading 
                        mb="3.625rem" color="light.text"
                        fontSize="48px" fontWeight="600" lineHeight="72px" 
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
                        <InfoCard counter={topCitys.length} description="cidades +100" infoText="teste" />
                    </HStack>
                </HStack>
                <Heading
                    mb="50px" fontWeight="500" fontSize="36px"
                    color="dark.text" lineHeight="54px"
                >
                    Cidades +100
                </Heading>
                <SimpleGrid mb="125px" minChildWidth="256px" spacing="85px">
                    {
                        topCitys.map((city) => (
                            <CityCard key={city.id} city={city} />
                        ))
                    }
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

    const continent = await fetch(`http://localhost:3333/continents/${slug}`).then((res: Response) => {
        return res.json();
    })

    const topCitys = await fetch(`http://localhost:3333/top_citys?continent=${slug}`).then((res: Response) => {
        return res.json();
    })

    return {
        props: {
            continent, 
            topCitys
        },
        revalidate: 60
    }
}