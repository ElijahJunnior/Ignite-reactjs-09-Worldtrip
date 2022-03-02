import { Button, Flex, Heading, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { Header } from "../../../components/Header";
import { Continent } from '../index';

import { FaSearch } from 'react-icons/fa'
import { useState } from "react";

interface IParams extends ParsedUrlQuery {
    slug: string, 
    i: string | null
}

type UnsplashImage = {
    id: string,
    url: string
}

type PageProps = {
    continent: Continent,
    images: UnsplashImage[],
    campo_update: string
}

export default function SetCityImage(props: PageProps) {

    const router = useRouter()

    const [images, setImages ] = useState<UnsplashImage[]>(props.images);
    const [inputVal, setinputVal ] = useState("");

    async function handleSeachImages(query: string) {
        
        const dataImages: UnsplashImage[] = await fetch(
            `http://localhost:3000/api/search_images?query=${query}`
        ).then((res: Response) => {
            return res.json()
        });

        setImages(dataImages);

    }

    async function handleSelectImage(img: UnsplashImage) {
        try {

            const data = props.campo_update === "cover"?  {
                ...props.continent,
                cover_image: img.url + "&w=720",
            } : {
                ...props.continent,
                page_image: img.url + "&w=720",
            }

            await fetch(
                `http://localhost:3333/continents/${props.continent.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            )

            return router.push("/continente")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Header />
            <Flex flex="1" maxWidth="1280px" flexDir="column" marginX="auto">
                <Heading mt="36px" mb="72px" fontSize="3xl">
                    Escolha a foto que será usada para o continente:
                    <Text as="span" color="base.highlight" fontSize="4xl">
                        {" " + props.continent.name}
                    </Text>
                </Heading>
                <Flex mb="80px">
                    <Input 
                        placeholder="pesquisar imagens" size="lg" type="search" mr="8px" 
                        value={inputVal} onChange={(event) => {setinputVal(event.target.value) }}
                    />
                    <Button 
                        size="lg" variant="solid" bg="light.info" 
                        fontSize="24px" color="dark.info" 
                    >
                        <FaSearch />
                    </Button>
                </Flex>
                <SimpleGrid minChildWidth="600px" spacing="42px" mb="80px" justifyItems="center" >
                    {images.map(img => (
                        <Flex
                            key={img.id}
                            w="600px" h="365px" p="20px" align="end" justify="end"
                            borderRadius="16px" bgImage={img.url + "&w=720"}
                            bgSize="cover" bgPos="center" boxShadow={"dark-lg"}
                        >
                            <Button
                                bg="light.text" color="dark.text"
                                onClick={() => { handleSelectImage(img) }}
                            >
                                Selecionar
                            </Button>
                        </Flex>
                    ))}
                </SimpleGrid>
            </Flex>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (ctx) => {

    const { slug, i } = ctx.query as IParams;

    try {

        const dataContinent: Continent = await fetch(
            `http://localhost:3333/continents/${slug}`
        ).then((res: Response) => {

            return res.json();
        });

        if (!dataContinent) {
            throw new Error("continent not found");
        }

        const dataImages: UnsplashImage[] = await fetch(
            `http://localhost:3000/api/search_images?query=${dataContinent.name}`
        ).then((res: Response) => {
            return res.json()
        })
        
        // .then(data => data?.results || [])

        return {
            props: {
                continent: dataContinent,
                images: dataImages,
                campo_update: i || ""
            }
        };

    } catch (err) {
        console.log("set_image_ssr_error::::", err)
        return {
            notFound: true
        };
    }

}