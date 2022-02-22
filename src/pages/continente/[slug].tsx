import { Flex, Heading, Text, HStack, VStack, Box, Icon } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Header } from '../../components/Header'

// import InfoImg from '../../../public/Images/info.svg'

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
                <HStack spacing="70px">
                    <Text fontWeight="400" fontSize="24px" lineHeight="36px" textAlign="justify">
                        A Europa é, por convenção, um dos seis continentes 
                        do mundo. Compreendendo a península ocidental da 
                        Eurásia, a Europa geralmente divide-se da Ásia a 
                        leste pela divisória de águas dos montes Urais, o 
                        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                    </Text>
                <HStack spacing="42px">
                    <VStack>
                        <Text>50</Text>
                        <Text>países</Text>
                    </VStack>
                    <VStack>
                        <Text>60</Text>
                        <Text>linguas</Text>
                    </VStack>
                    <VStack >
                        <Text>27</Text>             
                        <Text whiteSpace="nowrap">cidades +100 </Text>
                        {/* <Icon as={InfoImg} /> */}
                    </VStack>
                </HStack>
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