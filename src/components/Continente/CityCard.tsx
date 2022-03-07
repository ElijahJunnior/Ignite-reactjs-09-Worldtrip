import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";
import NextImage from "next/image";
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
            <Image
                w="256px" h="173px"
                src={city.city_image} objectFit="cover"                 
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
            <Image 
                src={city.country_flag_image}
                position="absolute" right="24px" bottom="38px"
                boxSize="30px" objectFit="cover"borderRadius="full"                    
            />
        </VStack>
    )
}