import { Flex, Text, Image } from "@chakra-ui/react";

interface ITrevelTypeProps {
    description: string,
    imageSrc: string
}

export function TrevelType({ description, imageSrc }: ITrevelTypeProps) {
    return (
        <Flex w="125px" flexDir="column" align="center" justify="center">
            <Image src={imageSrc} alt={`icone simbolizando a ${description}`} />
            <Text pt="24px">{description}</Text>
        </Flex>
    )
}