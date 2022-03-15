// Next / React
import Link from 'next/link';

// Chakra 
import { Flex, Link as ChakraLink, Heading, Text } from "@chakra-ui/react";

// types
import { Continent } from '../../pages/index';

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
                        color="light.text" pb="1rem" textDecor="none" fontWeight="700"
                        fontSize={["24px", "32px", "40px", "48px"]}
                        lineHeight={["36px", "48px", "60px", "72px"]}
                    >
                        {continent.name}
                    </Heading>
                    <Text
                        color="light.info" textDecor="none" fontWeight="700"
                        fontSize={["14px", "17px", "20px", "24px"]}
                        lineHeight={["21px", "26px", "31px", "36px"]}
                    >
                        {continent.cover_description}
                    </Text>
                </Flex>
            </ChakraLink>
        </Link>
    )

}