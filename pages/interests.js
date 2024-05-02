import Layout from '../components/layout';
import styles from '../styles/interests.module.css';
import { Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

export default function Resume() {
    const fadeUpAnimation = keyframes`
        from {
            opacity: 0;
            transform: translateY(5px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    `;

    return (
        <Layout>
            <p className={styles.categoryTitle}>Books</p>
            <Reveal keyframes={fadeUpAnimation} duration={2000} triggerOnce='true'>
                
                <p className={styles.bodyText}>Lorem Ipsum</p>
                <p className={styles.bodyText}>interests page</p>
                
            </Reveal>
            <hr className={styles.divider}></hr>
            <p className={styles.categoryTitle}>Tattoos</p>
            <Reveal keyframes={fadeUpAnimation} duration={2000} triggerOnce='true'>

            </Reveal>
            <hr className={styles.divider}></hr>
            <p className={styles.categoryTitle}>Fencing</p>
            <Reveal keyframes={fadeUpAnimation} duration={2000} triggerOnce='true'>
                
            </Reveal>
            
        </Layout>
    )
}