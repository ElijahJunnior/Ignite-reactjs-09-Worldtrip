import { Flex, Heading, Text, HStack, VStack, Image } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { InfoCard } from '../../components/Continente/InfoCard';
import { CityCard } from '../../components/Continente/CityCard';
import { Header } from '../../components/Header';

interface Iparams extends ParsedUrlQuery {
    slug: string
}

export default function Continente(props) {
    return (
        <>
            <Header />
            <Flex w="100%" h="500px" bg="dark.text" mb="80px">
                <Flex w="100%" h="100%" maxW="1280px" m="0 auto" flexDir="column-reverse">
                    <Heading fontSize="48px" fontWeight="600" lineHeight="72px" mb="3.625rem">
                        {props.slug}
                    </Heading>
                </Flex>
            </Flex>
            <Flex w="100%" maxW="1280px" m="0 auto" flexDir="column">
                <HStack spacing="70px" mb="80px">
                    <Text
                        color="dark.text" fontWeight="400" fontSize="24px"
                        lineHeight="36px" textAlign="justify"
                    >
                        A Europa é, por convenção, um dos seis continentes
                        do mundo. Compreendendo a península ocidental da
                        Eurásia, a Europa geralmente divide-se da Ásia a
                        leste pela divisória de águas dos montes Urais, o
                        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                    </Text>
                    <HStack spacing="42px">
                        <InfoCard counter={50} description="países" />
                        <InfoCard counter={60} description="linguas" />
                        <InfoCard counter={27} description="cidades +100" infoText="teste" />
                    </HStack>
                </HStack>
                <Heading
                    mb="50px" fontWeight="500" fontSize="36px"
                    color="dark.text" lineHeight="54px"
                >
                    Cidades +100
                </Heading>
                <HStack mb="125px" justify="space-between">
                    <CityCard />
                    <CityCard />
                    <CityCard />
                    <CityCard />
                </HStack>
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


export const getStaticProps: GetStaticProps = async (ctx) => {

    const { slug } = ctx.params as Iparams

    return {
        props: {
            slug
        },
        revalidate: 60
    }
}