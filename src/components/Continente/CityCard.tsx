import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";
import NextImage from "next/image";

export function CityCard() {
    return (
        <VStack
            w="256px" h="279px" spacing="12px" position="relative" bg="light.text" overflow="hidden"
            borderRadius="4px" border="1px" borderColor="base.highlight"
        >
            <Box w="256px" h="173px" position="relative">
                <NextImage
                    src="/images/europa02.png" alt="foto de uma paisagem na europa"
                    objectFit="cover" layout="fill"
                />
            </Box>
            <Heading
                pl="24px" pt="6px" alignSelf="flex-start"
                fontWeight="600" fontSize="20px" lineHeight="25px"
                fontFamily="Barlow"
            >
                Londres
            </Heading>
            <Text pl="24px" alignSelf="flex-start"
                fontWeight="500" fontSize="16px" lineHeight="26px"
                fontFamily="Barlow" color="dark.info"
            >
                Reino Unido
            </Text>
            <Box
                w="30px" h="30px" bg="red.500" borderRadius="15px"
                position="absolute" right="24px" bottom="38px"
            >
                {/* <Image src="https://flagcdn.com/br.svg" /> */}
            </Box>
        </VStack>
    )
}