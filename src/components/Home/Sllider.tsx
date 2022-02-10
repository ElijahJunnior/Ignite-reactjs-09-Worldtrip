import { Flex } from '@chakra-ui/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Slider() {
    return (
        <Flex w="40rem" h="20rem" mt="3.25rem" alignSelf="center" bg="green.500">
            <Swiper
                // // // install Swiper modules
                // modules={[Navigation, Pagination, Scrollbar, A11y]}
                // // spaceBetween={50}
                // slidesPerView={1}
                // navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                modules={[Navigation]}
                navigation={true}

            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
        </Flex>
    )
}