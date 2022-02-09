import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

interface ITrevelTypeProps {
    description: string,
    imageSrc: string
}

export function TrevelType({ description, imageSrc }: ITrevelTypeProps) {
    return (
        <Flex w="125px" flexDir="column" align="center" justify="center">
            <Image src={imageSrc} alt={`icone simbolizando a ${description}`} />
            <Text pt="1.5rem">{description}</Text>
        </Flex>
    )
}