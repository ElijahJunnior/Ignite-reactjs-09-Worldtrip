import { NextApiRequest, NextApiResponse } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface Iparams extends ParsedUrlQuery {
    query: string,
    page: string
}

type UnsplashImage = {
    id: string,
    url: string
}

export default async function SearchImages(req: NextApiRequest,  res: NextApiResponse) {

    try {
        
        if(req.method === "GET" ) {
            
            const { query, page } = req.query as Iparams;
            const pageIsValid = !!page && Number.isInteger(Number(page))
        
            console.log(page)

            const url = 
                `https://api.unsplash.com/search/photos` +
                `?client_id=${process.env.UNSPLASH_CLIENT_ID}` +
                `&query=${query}` + 
                `&order_by=relevant`+
                `&page=${!pageIsValid ? "1" : page }` + 
                `&per_page=20` +
                `&orientation=landscape` 

            console.log(url);

            const data = await fetch(
                url, {
                    method: "GET",
                    headers: {
                        "Accept-Version": "v1"
                }
            }
            ).then((res: Response) => {
                return res.json()
            }).then(data => data?.results || []);          

            const images: UnsplashImage[] = data.map(image => ({
                id: image.id, 
                url: image.urls.raw
            }));

            // console.log(images)

            res.status(200).json(images);

        } else {
            res.status(500).json({
                message: "invalid method!"
            })
        }

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }

}