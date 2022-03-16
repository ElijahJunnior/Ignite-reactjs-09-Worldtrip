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
            w="100%" maxW="1440px" minW="minWidth" h={["50px", "66px", "82px", "100px"]}
            marginX='auto' px={["16px", "44px", "72px", "100px"]}
            align="center" justify="center" position='relative'
        >
            {!isHomePage && (
                <Flex
                    w="32px" h="32px" align='center' justify='center' alignSelf='center'
                    position='absolute' left={["16px", "44px", "72px", "100px"]}
                >
                    <Link href='/' passHref>
                        <ChakraLink>
                            <Image src="/Images/previewPage.svg" alt="Voltar para a home page" />
                        </ChakraLink>
                    </Link>
                </Flex>
            )}
            <Box
                w={["81px", "115px", "149px", "184px"]}
                height={["20px", "28px", "36px", "44px"]}
            >
                <Image src="/Images/logo.svg" alt="Logo" />
            </Box>
        </Flex >
    )
}