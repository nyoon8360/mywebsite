import Layout from '../components/layout';
import styles from '../styles/interests.module.css';

export default function Resume() {

    return (
        <Layout>
            <p className={styles.categoryTitle}>Books</p>
            <p className={styles.bodyText}>Lorem Ipsum</p>
            <p className={styles.bodyText}>interests page</p>
            <hr className={styles.divider}></hr>
            <p className={styles.categoryTitle}>Tattoos</p>
            <hr className={styles.divider}></hr>
            <p className={styles.categoryTitle}>Fencing</p>
            
        </Layout>
    )
}