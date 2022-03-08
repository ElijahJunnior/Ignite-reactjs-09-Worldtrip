// Next / React
import { useRouter } from "next/router";
import Link from 'next/link';

// Chakra 
import { Box, Flex, Link as ChakraLink, Image } from "@chakra-ui/react";

export function Header() {

    const router = useRouter()
    const isHomePage = (router.asPath === '/')

    return (
        <Flex
            w="100%" h="100px" maxW='1240px' marginX='auto'
            align="center" justify="center" position='relative'
        >
            {!isHomePage && (
                <Flex
                    w="32px" h="32px" align='center' justify='center'
                    alignSelf='center' position='absolute' left='0'
                >
                    <Link href='/' passHref>
                        <ChakraLink>
                            <Image src="/Images/previewPage.svg" alt="Voltar para a home page" />
                        </ChakraLink>
                    </Link>
                </Flex>
            )}
            <Box w="184px" height="44px">
                <Image src="/Images/logo.svg" alt="Logo" />
            </Box>
        </Flex >
    )
}