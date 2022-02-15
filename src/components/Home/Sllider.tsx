import { Box, Flex, FlexProps, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles


// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import EarthImg from '../../../public/Images/earth.svg'

export function Slider(props: FlexProps) {
    return (
        <Flex {...props}>
            <Swiper
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                navigation={true}
                pagination={{ clickable: true }}
                style={{ width: "100%" }}
            >
                <SwiperSlide>
                    <Flex 
                        h="100%" w="100%" flexDir="column" align="center" justify="center" 
                        bgImage="images/Europa01.png" bgSize="cover"
                    >
                        <Heading 
                            color="light.text" pb="1rem"
                            fontWeight="700" fontSize="48px" lineHeight="72px" 
                        >
                            Europa
                        </Heading>
                        <Text color="light.info" fontWeight="700" fontSize="24px" lineHeight="36px">
                            O continente mais antigo.
                        </Text>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Box h="100%" w="100%" bg="blue.500" >
                        <Image
                            src={EarthImg} alt="imagem da aoropa"
                            width="100%" height="100%" layout='responsive'
                        />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box h="100%" w="100%" bg="orange.500">
                        <Image
                            src={EarthImg} alt="imagem da aoropa"
                            width="100%" height="100%" layout='responsive'
                        />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box h="100%" w="100%" bg="red.500"  >
                        <Image
                            src={EarthImg} alt="imagem da aoropa"
                            width="100%" height="100%" layout='responsive'
                        />
                    </Box>
                </SwiperSlide>
            </Swiper>
        </Flex >
    )
}