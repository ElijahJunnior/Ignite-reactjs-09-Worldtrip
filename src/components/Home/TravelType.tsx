import { Flex, Text, Image, FlexProps, Show, Box, GridItem, ResponsiveValue } from "@chakra-ui/react";

interface ITrevelTypeProps {
    description: string,
    imageSrc: string,
    colSpan?: ResponsiveValue<number | null>
}

export function TrevelType({ description, imageSrc, colSpan = null }: ITrevelTypeProps) {
    return (
        <GridItem colSpan={colSpan}>
            <Flex
                flexDir={["row", "column"]}
                align="center" justify="center" mx="auto"
            >
                <Show above="sm">
                    <Image
                        pb={[null, "12px", "24px"]} src={imageSrc}
                        alt={`icone simbolizando a ${description}`}
                    />
                </Show>
                <Show below="sm">
                    <Box
                        w="8px" h="8px" mr="8px"
                        bgColor="base.highlight" borderRadius="full"
                    />
                </Show>
                <Text >{description}</Text>
            </Flex>
        </GridItem>
    )


}