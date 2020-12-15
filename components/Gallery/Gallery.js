import styles from './Gallery.module.scss';
import Image from 'next/image';
import BackArrow from '../../public/assets/img/back-arrow.svg';
import ForwardArrow from '../../public/assets/img/forward-arrow.svg';
import cx from 'classnames';
import { useState } from 'react';
import Image1 from '../../public/assets/img/img-01.jpg';
import Image2 from '../../public/assets/img/img-02.jpg';
import Image3 from '../../public/assets/img/img-03.jpg';
import Image4 from '../../public/assets/img/img-04.jpg';
import Room5 from '../../public/assets/img/room-05.jpg';
import Room6 from '../../public/assets/img/room-06.jpg';
import Room7 from '../../public/assets/img/room-07.jpg';
import Room8 from '../../public/assets/img/room-08.jpg';
import Room9 from '../../public/assets/img/room-09.jpg';
import Room10 from '../../public/assets/img/room-10.jpg';

const Gallery = () => {
    const [x, setX] = useState(0);
    const [indicatorState, setIndicatorState] = useState([false, true]);

    /**
     * Use to run the slide
     * @param {Number} num The number indicates user pressing backward or forward button
     */
    const activeIndicate = num => {
        const newIndicatorState = indicatorState.map((el, i) => {
            if (i !== num) return false;
            return true;
        });
        setIndicatorState(newIndicatorState);
        // Set x, distance to translate the slide
        if (num == 1 && x < 0) {
            setX(x + 345);
        } else if (num == 0 && x > -345 * 7) {
            setX(x - 345);
        }
    };

    return (
        <div className={cx(styles.room)}>
            <h2>Build professional valuable room for you</h2>
            <div className={cx(styles.navigator, styles.galleryNavigator)}>
                <div className={cx(styles.indicator, indicatorState[0] ? styles.activeIndicator : '')} onClick={() => activeIndicate(0)}>
                    <Image src={BackArrow} width={20} height={20} className={styles.arrow}/>
                </div>
                <div className={cx(styles.indicator, indicatorState[1] ? styles.activeIndicator : '')} onClick={() => activeIndicate(1)}>
                    <Image src={ForwardArrow} width={20} height={20} className={styles.arrow}/>
                </div>
            </div>
            <div className={styles.galleryWrapper}>
                <div style={{transform: `translate3d(${x}px, 0, 0)`}} className={styles.gallery}>
                    <img src={Image1} alt="img-01"/>
                    <img src={Image2} alt="img-02"/>
                    <img src={Image3} alt="img-03"/>
                    <img src={Image4} alt="img-04"/>
                    <img src={Room5} alt="room-04"/>
                    <img src={Room6} alt="room-06"/>
                    <img src={Room7} alt="room-07"/>
                    <img src={Room8} alt="room-08"/>
                    <img src={Room9} alt="room-09"/>
                    <img src={Room10} alt="room-10"/>
                </div>
            </div>
        </div>
    )
}

export default Gallery;