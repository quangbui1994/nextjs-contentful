import styles from './Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
    return (
        <div className={styles.Navbar}>
            <Link href="/">
                <a><h1>Juliette van Rhyn</h1></a>
            </Link>
            <ul>
                <li>
                    <Link href="/"><a className={router.pathname == "/" || router.pathname.includes('livingroom') ? styles.active : ""}>Living Room</a></Link>
                </li>
                <li>
                    <Link href="/bathroom"><a className={router.pathname.includes('bathroom') ? styles.active : ""}>Bath room</a></Link>
                </li>
                <li>
                    <Link href="/bedroom"><a className={router.pathname.includes('bedroom') ? styles.active : ""}>Bed room</a></Link>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;