import styles from './ItemHolder.module.scss';
import Image from 'next/image';
import { IItem } from '../../src/schema/generated/contentful';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface PropsPage {
    item: IItem
}

const ItemHolder = ({ item }: PropsPage) => {
    const { productName, productImage } = item.fields;
    const router = useRouter();
    return (
        <Link href={router.pathname === '/' ? router.pathname + 'livingroom' + '/' + item.fields.slug : router.pathname + '/' + item.fields.slug}>
            <a className={styles.ItemHolder}>
                <Image 
                    src={'https:' + productImage?.fields.file.url} 
                    width={productImage?.fields.file.details.image?.width}
                    height={productImage?.fields.file.details.image?.height}/>
                <p>{productName}</p>
            </a>
        </Link>
    )
};

export default ItemHolder;