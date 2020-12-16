import styles from './ItemHolder.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ItemHolder = ({ item }) => {
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