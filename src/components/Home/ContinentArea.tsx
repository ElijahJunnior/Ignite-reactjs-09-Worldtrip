// Chakra
import { Box, Flex, FlexProps, Heading, Text } from '@chakra-ui/react';

// Swiper
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// MyComponents
import { ContinentItem } from './ContinentItem'

// Images
import { useEffect, useState } from 'react';

interface IContinent {
    name: string,
    description: string, 
    image: string
}

export function ContinentArea(props: FlexProps) {

    const [continents, setContinents] = useState<IContinent[]>([])

    useEffect(() => {

        async function loadContinents() {
            
            const data = await fetch("http://localhost:3333/continents").then(res => res.json())

            setContinents(data)

        }

        loadContinents()

    }, [])

    return (
        <Flex {...props}>
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