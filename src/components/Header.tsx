import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from 'next/image';
import Link from 'next/link';
import PreviewPageIcon from '../../public/Images/previewPage.svg';
import Logo from '../../public/Images/logo.svg'

export function Header() {

    const router = useRouter()
    const isHomePage = (router.asPath === '/')

    const tempIsCityPage = (router.asPath.includes("citys/set_image"))

    return (
        <Flex
            w="100%" h="6.25rem" maxW='1240px' margin='0 auto'
            align="center" justify="center" position='relative'
        >
            {!isHomePage && (
                <Flex
                    w="2rem" h="2rem" align='center' justify='center'
                    alignSelf='center' position='absolute' left='0'
                >
                    <Link href={!tempIsCityPage ? '/' : '/citys'} passHref>
                        <ChakraLink>
                            <Image src={PreviewPageIcon} alt="Voltar para a home page" />
                        </ChakraLink>
                    </Link>
                </Flex>
            )}
            <Box w="11.5rem" height="2.8rem">
                <Image src={Logo} alt="Logo" />
            </Box>
        </Flex>
    )
}