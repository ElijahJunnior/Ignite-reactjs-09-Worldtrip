import { Box, Flex, Heading, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Header } from "../../components/Header";

export type TopCity = {
    id: string,
    city_name: string,
    city_image: string,
    continent: string,
    country_code: string,
    country_flag_image: string,
    country_name: string,
    rank: string,
}

export type PageProps = {
    citys: TopCity[]
}

export default function Citys({ citys }: PageProps) {

    return (
        <>
            <Header />
            <Flex flex="1" maxWidth="1280px" flexDir="column" marginX="auto">

                <Heading mt="36px" mb="72px" fontSize="3xl">
                    Top 100 cidades do mundo
                </Heading>
                <SimpleGrid
                    mb="80px" minChildWidth="400px" spacingX="16px" spacingY="24px"
                >
                    {citys.map(city => (
                        <Flex
                            key={city.id}
                            w="400px" h="200px" p="20px" align="flex-start" position="relative"
                            borderRadius="16px" bg="gray.400" bgImage={city.city_image}
                            bgSize="cover" bgPos="center" bgBlendMode="darken"
                            shadow="dark-lg"
                        >
                            <Flex flex="1" flexDir="column" >
                                <Heading
                                    mb="8px"
                                    fontWeight="700" fontSize="28px" color="light.body"
                                >
                                    {city.city_name}
                                </Heading>
                                <Text color="light.body">{city.country_name}</Text>
                            </Flex>
                            <Box>
                                <Heading color="light.body">
                                    {Number(city.rank)}º
                                </Heading>
                            </Box>
                            <Image
                                src={city.country_flag_image}
                                boxSize="50px" ml="10px"
                                borderRadius="full"
                                objectFit="cover"
                                position="absolute"
                                bottom="16px" right="16px"
                            />
                            {
                                !city.city_image && (
                                    <Link
                                        href={`/citys/set_image/${city.id}`}
                                        py="8px" px="24px" position="absolute" bottom="16px" left="16px"
                                        bg="light.text" color="dark.text" borderRadius="12px"
                                        filter="auto" transitionProperty="brightness 0.5s" transitionDuration="0.5s"
                                        _hover={{ textDecor: "none", brightness: "0.9" }}
                                    >
                                        Escolher imagem
                                    </Link>
                                )
                            }
                        </Flex>
                    ))}
                </SimpleGrid>
            </Flex>
        </>
    )

}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {

    try {

        const data = await fetch("http://localhost:3333/top_citys").then((res: Response) => {
            return res.json();
        });

        return {
            props: {
                citys: data,
            }
        };

    } catch (err) {
        console.log("citys_ssr_error::::", err)
        return {
            notFound: true
        };
    }

}