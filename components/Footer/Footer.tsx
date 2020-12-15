import styles from './Footer.module.scss';

const Footer = () => (
    <div className={styles.Footer}>
        <p>Copyright <span className={styles.copyright}>&#169;</span> 2020 by Quang Bui.</p>
    </div>
);

export default Footer;