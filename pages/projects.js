import Layout from '../components/layout';
import Image from 'next/image';
import styles from '../styles/projects.module.css';
import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';

export default function Projects() {
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
            <Reveal keyframes={fadeUpAnimation} duration={2000} triggerOnce='true'>
            <h3 className={styles.projectTitle} style={{marginTop: '30px'}}>Personal Website</h3>
            <Image className={styles.projectThumbnail} src='/images/personal_website_thumbnail.png' alt='Personal Project Website' height={300} width={400}/>
            <p className={styles.bodyText}>
                <span className={styles.boldSpan}>Description</span><br/>
                Website to display my personal interests, projects, and music tastes.
            </p>
            <p className={styles.bodyText}>
                <span className={styles.boldSpan}>Technologies Used</span><br/>
                - HTML, CSS, JS <br/>
                - Next.JS framework <br/>
                - Vercel web hosting <br/>
                - CSS Modules
            </p>
            <p className={styles.bodyText}>
                <span className={styles.boldSpan}>Source Code</span><br/>
                <a id='githubSourceCodeLink' className={styles.githubLink} target='_blank' href='https://github.com/nyoon8360/mywebsite'>
                    <Image src='/images/github-mark.png' alt='github logo' width={30} height={30}/>
                    <Image className={styles.githubLogoP2} src='/images/github_logo.png' alt='github logo' width={90} height={30}/>
                </a>
            </p>
            </Reveal>

            <hr className={styles.divider}></hr>

            <Reveal keyframes={fadeUpAnimation} duration={2000} triggerOnce='true'>
            <h3 className={styles.projectTitle} style={{marginTop: '30px'}}>Bank of Edwin Discord Bot</h3>

            <Image className={styles.projectThumbnail} src='/images/bank_of_edwin_thumbnail.png' alt='Bank of Edwin Discord Bot' height={300} width={400}/>

            <p className={styles.bodyText}>
                <span className={styles.boldSpan}>Description</span><br/>
                A discord chat bot inspired by an inside joke that facilitates an economy revolving around fake currency. <br/>
                Currency can be used to purchase joke items to mess with users and invest in stocks using near realtime prices.
            </p>
            <p className={styles.bodyText}>
                <span className={styles.boldSpan}>Technologies Used</span><br/>
                - Node.JS <br/>
                - Discord.JS<br/>
                - Twelve Data API
            </p>
            <p className={styles.bodyText}>
                <span className={styles.boldSpan}>Source Code</span><br/>
                <a id='githubSourceCodeLink' className={styles.githubLink} target='_blank' href='https://github.com/nyoon8360/BoEBot'>
                    <Image src='/images/github-mark.png' alt='github logo' width={30} height={30}/>
                    <Image className={styles.githubLogoP2} src='/images/github_logo.png' alt='github logo' width={90} height={30}/>
                </a>
            </p>
            </Reveal>
        </Layout>
    )
}