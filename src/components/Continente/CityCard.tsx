// Next
import NextImage from "next/image";

// Chakra
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

// types
import { City } from '../../pages/continent/[slug]';

type ComponentProps = {
    city: City
}

export function CityCard({ city }: ComponentProps) {
    return (
        <VStack
            w="256px" h="279px" spacing="12px" position="relative" bg="light.text" overflow="hidden"
            borderRadius="4px" border="1px" borderColor="base.highlight"

        >
            <NextImage
                src={city.city_image}
                alt={`imagem de um ponto turístico da cidade ${city.city_name}`}
                width="256px" height="173px"
                objectFit="cover" objectPosition="center"
            />
            <Heading
                pl="24px" pt="6px" alignSelf="flex-start"
                fontWeight="600" fontSize="20px" lineHeight="25px"
                fontFamily="Barlow"
            >
                {city.city_name}
            </Heading>
            <Text pl="24px" alignSelf="flex-start"
                fontWeight="500" fontSize="16px" lineHeight="26px"
                fontFamily="Barlow" color="dark.info"
            >
                {city.country_name}
            </Text>
            <Box
                w="30px" h="30px" borderRadius="16px" overflow="hidden"
                position="absolute" right="24px" bottom="38px"
            >
                <NextImage
                    src={city.country_flag_image}
                    alt={`logo com a bandeira do pais ${city.country_name}`}
                    layout="fill" objectFit="cover" objectPosition="center"
                />
            </Box>
        </VStack >
    )
}