// Next / React
import { GetStaticPaths, GetStaticProps } from 'next';

// Chakra 
import { Flex, Heading, Text, HStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

// Outros 
import { ParsedUrlQuery } from 'querystring';

// Components
import { InfoCard } from '../../components/Continente/InfoCard';
import { CityCard } from '../../components/Continente/CityCard';
import { Header } from '../../components/Header';

// types
import { Continent } from '../index';
import { api } from '../../service/api';

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
        <Flex w="100%" minW="370px" flexDir="column">
            <Header />
            <Flex
                w="100%" minW="370px" mb="80px"
                h={["150px", "266px", "382px", "500px"]} 
                bg={`linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${continent.page_image})`}
                bgPos="center" bgSize="cover"
            >
                <Flex
                    w="100%" h="100%" maxW="1440px" m="0 auto" 
                    px={["16px", "44px", "72px", "100px"]}   
                    align={["center", null, "flex-end"]} 
                    justify={["center", null, "flex-start"]}
                >
                    <Heading
                        color="light.text" fontWeight="600"
                        mb={["0", null, "29px", "58px"]} 
                        fontSize={["28px", "34px", "40px", "48px" ]}
                        lineHeight={["42px", "52px", "62px", "72px"]}
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
                        <InfoCard
                            counter={topCitys.length} description="cidades +100"
                            infoText={
                                "Número de cidades que estão nesse continente " +
                                "e fazem parte da lista das 100 melhores cidades do mundo"
                            }
                        />
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
        </Flex>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    
    try {
        
        const continents: Continent[] = await api.get("continents").then(
            res => res.data
        )

        const paths = continents.reduce((acc, cur: Continent) => {      
            return [...acc, 
                {
                    params: {
                        slug: cur.id
                    }
                }
            ]
        }, [])

        return {
            paths,
            fallback: "blocking",
        }

    } catch (error) {
        
        return {
            paths: [],
            fallback: "blocking",
        }  

    }

}

export const getStaticProps: GetStaticProps<ContinentProps> = async (ctx) => {

    const { slug } = ctx.params as Iparams

    try {

        const continent: Continent = await api.get(`continents/${slug}`).then(
            res => res.data
        )

        const topCitys = await api.get(`top_citys?continent=${slug}`).then(
            res => res.data
        )

        return {
            props: {
                continent,
                topCitys
            },
            revalidate: 60
        }
        
    } catch (error) {
       
        return { 
            notFound: true
        }

    }
    
}