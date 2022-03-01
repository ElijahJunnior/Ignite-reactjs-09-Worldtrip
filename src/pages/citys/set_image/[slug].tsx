import { Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"
import { Header } from "../../../components/Header"

interface IParams extends ParsedUrlQuery {
    slug: string
}

type City = {
    id: string,
    rank: string,
    city_name: string,
    city_image: string,
    continent: string,
    country_name: string,
    country_code: string,
    country_flag_image: string
}

type UnsplashImage = {
    id: string,
    urls: {
        raw: string
    }
}

type PageProps = {
    city: City,
    images: UnsplashImage[]
}

export default function SetCityImage({ city, images }: PageProps) {

    const router = useRouter()

    async function handleSelectImage(img: UnsplashImage) {
        try {

            await fetch(
                `http://localhost:3333/top_citys/${city.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ...city,
                        city_image: img.urls.raw + "&w=720",
                    })
                }
            )

            return router.push("/citys")

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <Header />
            <Flex flex="1" maxWidth="1280px" flexDir="column" marginX="auto">
                <Heading mt="36px" mb="72px" fontSize="3xl">
                    Escolha a foto que será usada para a cidade:
                    <Text as="span" color="base.highlight" fontSize="4xl">
                        {" " + city.city_name}
                    </Text>
                </Heading>
                <SimpleGrid minChildWidth="600px" spacing="42px" mb="80px">
                    {images.map(img => (
                        <Flex
                            key={img.id}
                            w="600px" h="365px" p="20px" align="end" justify="end"
                            borderRadius="16px" bgImage={img.urls.raw + "&w=720"}
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

    const { slug } = ctx.query as IParams;

    try {

        const dataCitys: City = await fetch(
            `http://localhost:3333/top_citys/${slug}`
        ).then((res: Response) => {

            return res.json();
        });

        if (!dataCitys) {
            throw new Error("city not found");
        }

        const dataUnsplashImages: UnsplashImage[] = await fetch(
            `https://api.unsplash.com/search/photos` +
            `?client_id=${process.env.UNSPLASH_CLIENT_ID}` +
            `&orientation=landscape&per_page=50` +
            `&query=${dataCitys.city_name}`, {
            method: "GET",
            headers: {
                "Accept-Version": "v1"
            }
        }
        ).then((res: Response) => {
            return res.json()
        }).then(data => data?.results || [])

        return {
            props: {
                city: dataCitys,
                images: dataUnsplashImages
            }
        };

    } catch (err) {
        console.log("set_image_ssr_error::::", err)
        return {
            notFound: true
        };
    }

}