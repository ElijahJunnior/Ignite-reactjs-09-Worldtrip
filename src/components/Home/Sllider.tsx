import { Box, Flex, FlexProps } from '@chakra-ui/react';
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
                // install Swiper modules
                // modules={[Navigation, Pagination, Scrollbar, A11y]}
                // spaceBetween={50}
                slidesPerView={1}
                // navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                // navigation={{
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // }}
                modules={[Navigation, Pagination]}
                navigation={true}
                pagination={{ clickable: true }}
                style={{ width: "100%" }}
            >
                {/* <Box className="swiper-button-next"></Box>
                <Box className="swiper-button-prev"></Box> */}
                <SwiperSlide>
                    <Box h="100%" w="100%" bg="green.500">
                        <Image
                            src={EarthImg} alt="imagem da aoropa"
                            width="100%" height="100%" layout='responsive'
                        />
                    </Box>
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