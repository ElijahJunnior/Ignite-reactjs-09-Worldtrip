import { NextApiRequest, NextApiResponse } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface Iparams extends ParsedUrlQuery {
    query: string
}

type UnsplashImage = {
    id: string,
    url: string
}

export default async function SearchImages(req: NextApiRequest,  res: NextApiResponse) {

    try {
        
        if(req.method === "GET" ) {
            
            const { query } = req.query as Iparams;

            const data = await fetch(
                `https://api.unsplash.com/search/photos` +
                `?client_id=${process.env.UNSPLASH_CLIENT_ID}` +
                `&orientation=landscape&per_page=50` +
                `&query=${query}`, {
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