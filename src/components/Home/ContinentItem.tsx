import { Flex, Link as ChakraLink, Heading, Text } from "@chakra-ui/react";
import Link from 'next/link';

// types
export type Continent = {
    id: string,
    name: string,
    description: string,
    image: string
}

type IContinentItemProps = {
    continent: Continent
}

export function ContinentItem({ continent }: IContinentItemProps) {

    return (
        <Flex
            h="100%" w="100%" flexDir="column" align="center" justify="center"
            bgImage={continent.image} bgSize="cover" bgPosition="center"
        >
            <Link href={`/continente/${continent.id}`} passHref>
                <ChakraLink>   
                    <Heading
                        color="light.text" pb="1rem"
                        fontWeight="700" fontSize="48px" lineHeight="72px"
                        >
                        {continent.name}
                    </Heading>
                    <Text color="light.info" fontWeight="700" fontSize="24px" lineHeight="36px" >
                        {continent.description}
                    </Text>
                </ChakraLink>
            </Link>
        </Flex>
    )

}