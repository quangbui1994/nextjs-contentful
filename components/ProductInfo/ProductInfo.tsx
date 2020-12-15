import styles from './ProductInfo.module.scss';
import Image from 'next/image';
import { IItem } from '../../src/schema/generated/contentful';

interface PropsPage {
    item: IItem
}

const ProductInfo = ({ item }: PropsPage) => {
    const { coverImage, title, description } = item.fields;

    return (
        <div className={styles.ProductInfo}>
            <Image 
                src={'https:' + coverImage?.fields.file.url} 
                width={700}
                height={800}
                className={styles.image}/>
            <div className={styles.productInfo}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
};

export default ProductInfo;