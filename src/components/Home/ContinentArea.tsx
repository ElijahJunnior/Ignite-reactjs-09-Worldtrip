// Chakra
import { Flex, FlexProps } from '@chakra-ui/react';

// Swiper
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// MyComponents
import { ContinentItem } from './ContinentItem'

// types
export type Continent = {
    name: string,
    description: string,
    image: string
}

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
                        <SwiperSlide key={continent.name}>
                            {console.log(continent.name, continent.description, continent.image)}
                            <ContinentItem
                                name={continent.name}
                                description={continent.description}
                                imageSrc={continent.image}
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </Flex >
    )
}