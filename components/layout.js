import MainHeader from '../components/mainHeader';
import styles from './layout.module.css';

export default function Layout({ children }) {

    return (
        <div className={styles.mainContainer}>
            <MainHeader className={styles.header}></MainHeader>
            <div className={styles.contentContainer}>
                {children}
            </div>
        </div>
    );
}