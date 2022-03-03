import { Box, Button, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Header } from "../../components/Header";

export type Continent = {
    id: string,
    name: string,
    cover_description: string,
    cover_image: string,
    page_description: string,
    page_image: string,
}

type PageProps = {
    continents: Continent[]
}

export default function Continent({ continents }: PageProps) {

    return (
        <>
            <Header />
            <Flex flex="1" maxWidth="1280px" flexDir="column" marginX="auto">

                <Heading mt="36px" mb="72px" fontSize="4xl">
                    Continentes
                </Heading>
                <SimpleGrid
                    mb="80px" minChildWidth="1280px" spacingX="16px" spacingY="24px"
                >
                    {continents.map(continente => (
                        <Flex
                            key={continente.id} w="1280px" pb="48px" flexDirection="column"
                        >
                            <Heading pb="32px" fontSize="3xl">
                                {continente.name}
                            </Heading>
                            <Flex gap="60px" >
                                <Box
                                    w="610px" h="305px" position="relative" borderRadius="16px" shadow="dark-lg" 
                                    bg={`linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${continente.cover_image + "&w=720"})`}
                                    bgSize="cover" bgPos="center" 
                                >
                                    <Button
                                        as="a" href={`/continente/set_image/${continente.id}?i=cover`}
                                        position="absolute" bottom="16px" right="16px"
                                        bg="light.text" color="dark.text"
                                    >
                                        Escolher imagem
                                    </Button>
                                </Box>
                                <Box
                                    w="610px" h="305px" position="relative" borderRadius="16px" shadow="dark-lg" 
                                    bg={`linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${continente.page_image + "&w=720"})`}
                                    bgSize="cover" bgPos="center" 
                                >
                                    <Button
                                        as="a" href={`/continente/set_image/${continente.id}?i=page`}
                                        position="absolute" bottom="16px" right="16px"
                                        bg="light.text" color="dark.text"
                                    >
                                        Escolher imagem
                                    </Button>
                                </Box>
                            </Flex>
                        </Flex>
                    ))}
                </SimpleGrid>
            </Flex >
        </>
    )
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {

    try {

        const data = await fetch("http://localhost:3333/continents").then((res: Response) => {
            return res.json();
        });

        return {
            props: {
                continents: data,
            }
        };

    } catch (err) {
        console.log("citys_ssr_error::::", err)
        return {
            notFound: true
        };
    }

}