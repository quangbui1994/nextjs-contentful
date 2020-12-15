import Layout from "../components/Layout/Layout";
import MainSection from "../components/MainSection/MainSection";
import { IBedRoomItem } from '../src/schema/generated/contentful';

let client = require('contentful').createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticProps() {
    let data = await client.getEntries({
        content_type: 'bedRoomItem' 
    });

    return {
        props: {
            items: data.items,
        }
    }
}

interface PropsPage {
    items: IBedRoomItem[]
}

const BathRoom = ({ items } : PropsPage) => {
    return (
        <Layout>
            <MainSection items={items}/>
        </Layout>
    )
};

export default BathRoom;