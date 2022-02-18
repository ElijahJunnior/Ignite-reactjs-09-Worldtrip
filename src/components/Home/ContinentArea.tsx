// Chakra
import { Flex, FlexProps } from '@chakra-ui/react';

// Swiper
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// MyComponents
import { ContinentItem, Continent as ContinentItemProps } from './ContinentItem'

// Tipos usados na função
export type Continent = ContinentItemProps;

export type ContinentAreaProps = {
    continents: Continent[],
}

export function ContinentArea({ continents, ...rest }: ContinentAreaProps & FlexProps) {

    return (
        <Flex {...rest}>
            <Swiper
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                navigation={true}
                pagination={{ clickable: true }}
                style={{ width: "100%" }}
            >
                {
                    continents.map(continent =>
                        <SwiperSlide key={continent.id}>
                            <ContinentItem continent={continent}/>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </Flex >
    )
}