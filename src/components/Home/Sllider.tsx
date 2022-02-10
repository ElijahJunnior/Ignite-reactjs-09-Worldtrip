import { Flex, FlexProps } from '@chakra-ui/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export function Slider(props: FlexProps) {
    return (
        <Flex {...props}>
            <Swiper
                // install Swiper modules
                // modules={[Navigation, Pagination, Scrollbar, A11y]}
                // spaceBetween={50}
                // slidesPerView={1}
                // navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                modules={[Navigation, Pagination]}
                navigation={true}
                pagination={{ clickable: true }}

            >
                <SwiperSlide>
                    <Image 
                        src="/images/homeBanner.png" alt="imagem da aoropa"
                        width="100%" height="100%" layout='responsive' quality={25}
                    /> 
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        src="/images/homeBanner.png" alt="imagem da aoropa"
                        width="100%" height="100%" layout='responsive' quality={25}
                    /> 
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        src="/images/homeBanner.png" alt="imagem da aoropa"
                        width="100%" height="100%" layout='responsive' quality={25}
                    /> 
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        src="/images/homeBanner.png" alt="imagem da aoropa"
                        width="100%" height="100%" layout='responsive' quality={25}
                    /> 
                </SwiperSlide> 
            </Swiper>
        </Flex>
    )
}