import styles from '../styles/web-design-is-my-passion.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function WebDesignIsMyPassion() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.tabsContainer}>
                <Link href='/' className={styles.tab}>Home</Link>
                <Link href='/projects' className={styles.tab}>Projects</Link>
                <Link href='/interests' className={styles.tab}>Interests</Link>
                <Link href='/music-likes' className={styles.tab}>Music Likes</Link>
                <Link href='/socials' className={styles.tab}>Socials</Link>
            </div>
            <div className={styles.passionContainer}>
                <p className={styles.myPassion}>WEB DESIGN IS MY PASSION</p>
            </div>
            <Image src='/images/invisKermit.png' className={styles.kermit1} alt='kermit' height={300} width={300}></Image>
            <Image src='/images/invisKermit.png' className={styles.kermit2} alt='kermit' height={300} width={300}></Image>
        </div>
    )
}