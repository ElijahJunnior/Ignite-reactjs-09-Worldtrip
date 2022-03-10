import { Flex, Text, Image } from "@chakra-ui/react";

interface ITrevelTypeProps {
    description: string,
    imageSrc: string
}

export function TrevelType({ description, imageSrc }: ITrevelTypeProps) {
    return (
        <Flex flexDir="column" align="center" justify="center" mx="auto">
            <Image src={imageSrc} alt={`icone simbolizando a ${description}`} />
            <Text pt="24px">{description}</Text>
        </Flex>
    )
}