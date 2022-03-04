import { Flex, Link as ChakraLink, Heading, Text } from "@chakra-ui/react";
import Link from 'next/link';

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

type IContinentItemProps = {
    continent: Continent
}

export function ContinentItem({ continent }: IContinentItemProps) {

    return (
        <Link href={`/continent/${continent.id}`} passHref >
            <ChakraLink textDecor="none" _hover={{ textDecoration: "none" }}>
                <Flex
                    h="100%" w="100%" flexDir="column" align="center" justify="center"
                    bg={`linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${continent.cover_image})`}
                    bgSize="cover" bgPos="center"
                >
                    <Heading
                        color="light.text" pb="1rem"
                        fontWeight="700" fontSize="48px" lineHeight="72px"
                        textDecor="none"
                    >
                        {continent.name}
                    </Heading>
                    <Text color="light.info" fontWeight="700" fontSize="24px" lineHeight="36px" textDecor="none">
                        {continent.cover_description}
                    </Text>
                </Flex>
            </ChakraLink>
        </Link>
    )

}