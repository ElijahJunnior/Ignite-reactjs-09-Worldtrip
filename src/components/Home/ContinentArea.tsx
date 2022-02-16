// React / Next
import Image from 'next/image';

// Chakra
import { Box, Flex, FlexProps, Heading, Text } from '@chakra-ui/react';

// Swiper
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// MyComponents
import { ContinentItem } from './ContinentItem'

// Images
import EarthImg from '../../../public/Images/earth.svg'
import { useEffect } from 'react';

export function ContinentArea(props: FlexProps) {

    // useEffect(() => {

    //     async function loadContinents() {
    //         const a = await fetch("http://localhost:3333/continents").then(res => JSON.stringify(res.data))
    //         console.log("data::::", a)
    //     }

    //     loadContinents()

    // }, [])

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
                    <ContinentItem
                        name="Europa" description="O continente mais antigo."
                        imageSrc="images/europa01.png"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ContinentItem
                        name="Europa" description="O continente mais antigo."
                        imageSrc="images/earth.svg"
                    />
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