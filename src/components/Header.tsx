import { Box, Flex } from "@chakra-ui/react";


export function Header() {
    return (
        <Flex
            w="100%" h="6.25rem" align="center" justify="center"
            position='relative' bg="dark.body"
        >
            <Box
                w="2rem" height="2rem" position="absolute" left="0"
                bg="dark.text"
            />
            <Box w="11.5rem" height="2.8rem" bg="dark.info"> </Box>
        </Flex >
    )
}