import Gallery from '../../components/Gallery/Gallery';
import Layout from '../../components/Layout/Layout';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import { IBedRoomItem } from '../../src/schema/generated/contentful';
import { paramStaticProps } from '../../src/schema/generated/contentful';

let client = require('contentful').createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN
});

interface IGetStaticProps {
    params: paramStaticProps
}

interface PropsPage {
    item: IBedRoomItem
}


export async function getStaticPaths() {
    let data = await client.getEntries({
        content_type: 'bedRoomItem'
    });

    return {
        paths: data.items.map((item: IBedRoomItem) => ({
            params: { slug: item.fields.slug }
        })),
        fallback: false
    };
};


export async function getStaticProps({ params }: IGetStaticProps) {
    let data = await client.getEntries({
        content_type: 'bedRoomItem',
        'fields.slug': params.slug
    });

    return {
        props: {
            item: data.items[0]
        }
    }
}

const Product = ({ item }: PropsPage) => {
    console.log(item);

    return (
        <Layout>
            <ProductInfo item={item}/>
            <Gallery />
        </Layout>
    )
}

export default Product;
