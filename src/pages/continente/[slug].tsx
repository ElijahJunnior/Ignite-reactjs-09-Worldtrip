import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Header } from '../../components/Header'

interface Iparams extends ParsedUrlQuery {
    slug: string
}

export default function Continente(props) {
    return (
        <>
            <Header />
            <h1>Hello World</h1>
            <h2>{props.slug}</h2>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking"
    }
}


export const getStaticProps: GetStaticProps = async (ctx) => {

    const { slug } = ctx.params as Iparams

    return {
        props: {
            slug
        },
        revalidate: 60
    }
}