import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";


export function Header() {
    
    const router = useRouter()
    const isHomePage = (router.asPath==='/')
    
    return (
        <Flex
            w="100%" h="6.25rem" align="center" justify="center"
            position='relative' bg="dark.body"
        >
            { !isHomePage && (
               <a href='/'>
                   <Box
                        w="2rem" height="2rem" position="absolute" left="0"
                        bg="dark.text"
                    />
               </a>
            ) }
            <Box w="11.5rem" height="2.8rem" bg="dark.info"> </Box>
        </Flex >
    )
}