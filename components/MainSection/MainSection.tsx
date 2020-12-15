import ItemHolder from '../ItemHolder/ItemHolder';
import styles from './MainSection.module.scss';
import { IItem } from '../../src/schema/generated/contentful';

interface PropsPage {
    items: IItem[]
}

const MainSection = ({ items }: PropsPage) => {
    return (
        <div className={styles.MainSection}>
            {items.map(item => <ItemHolder key={item.sys.id} item={item}/>)}
        </div>
    )
};

export default MainSection;