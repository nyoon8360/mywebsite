import styles from './mainHeader.module.css';
import HeaderTab from './headerTab';
import { useRouter } from 'next/router';

export default function MainHeader({ expandCircleFunction }) {
    const router = useRouter();
    let currentPath = router.asPath;

    return (
        <header id='headerContainer' className={styles.headerContainer}>
            <div id="containerTabs" className={styles.tabContainer}>
                <HeaderTab destinationPath='/' expandCircleFunction={expandCircleFunction} disabled={currentPath == '/' ? true : false}>Home</HeaderTab>
                <HeaderTab destinationPath='/projects' expandCircleFunction={expandCircleFunction} disabled={currentPath == '/projects' ? true : false}>Projects</HeaderTab>
                <HeaderTab destinationPath='/interests' expandCircleFunction={expandCircleFunction} disabled={currentPath == '/interests' ? true : false}>Interests</HeaderTab>
                <HeaderTab destinationPath='/music-likes' expandCircleFunction={expandCircleFunction} disabled={currentPath == '/music-likes' ? true : false}>Music Likes</HeaderTab>
                <HeaderTab destinationPath='/socials' expandCircleFunction={expandCircleFunction} disabled={currentPath == '/socials' ? true : false}>Socials</HeaderTab>
            </div>
        </header>
    );
}

