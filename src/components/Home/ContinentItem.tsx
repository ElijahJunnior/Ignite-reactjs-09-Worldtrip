import { Flex, Heading, Text } from "@chakra-ui/react";
import { deserialize } from "v8";

interface IContinentItemProps {
    name: string,
    description: string,
    imageSrc: string
}

export function ContinentItem(props: IContinentItemProps) {

    return (
        <Flex
            h="100%" w="100%" flexDir="column" align="center" justify="center"
            bgImage={props.imageSrc} bgSize="cover" bgPosition="center"
        >
            <Heading
                color="light.text" pb="1rem" 
                fontWeight="700" fontSize="48px" lineHeight="72px"
            >
                {props.name}
            </Heading>
            <Text color="light.info" fontWeight="700" fontSize="24px" lineHeight="36px" >
                {props.description}
            </Text>
        </Flex>
    )

}