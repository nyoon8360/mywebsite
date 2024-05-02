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

            <h3 className={styles.projectTitle}>Personal Website</h3>
            <Reveal keyframes={fadeUpAnimation} duration={2000} triggerOnce='true'>
                <Image className={styles.projectThumbnail} src='/images/personal_website_thumbnail.png' alt='Personal Project Website' height={300} width={400}/>
                
                <h4 className={styles.sectionText}>Description</h4>
                <p className={styles.bodyText}>
                    Website to display my personal interests, projects, and music tastes.
                </p>

                <h4 className={styles.sectionText}>Technologies Used</h4>
                <ul className={styles.unorderedListText}>
                    <li>HTML, CSS, Javascript</li>
                    <li>Next.JS Framework</li>
                    <li>Vercel Web Hosting</li>
                    <li>CSS Modules</li>
                </ul>

                <h4 className={styles.sectionText}>Source Code</h4>
                <p className={styles.bodyText}>
                    <a id='githubSourceCodeLink' className={styles.githubLink} target='_blank' href='https://github.com/nyoon8360/mywebsite'>
                        <Image className={styles.githubLogoP1} src='/images/github-mark.png' alt='github logo' width={30} height={30}/>
                        <Image className={styles.githubLogoP2} src='/images/github_logo.png' alt='github logo' width={90} height={30}/>
                    </a>
                </p>
            </Reveal>

            <hr className={styles.divider}></hr>

            <h3 className={styles.projectTitle}>Bank of Edwin Discord Bot</h3>
            <Reveal keyframes={fadeUpAnimation} duration={2000} triggerOnce='true'>

                <Image className={styles.projectThumbnail} src='/images/bank_of_edwin_thumbnail.png' alt='Bank of Edwin Discord Bot' height={300} width={400}/>

                <h4 className={styles.sectionText}>Description</h4>
                <p className={styles.bodyText}>
                    A discord chat bot inspired by an inside joke that facilitates an economy revolving around fake currency. <br/>
                    Currency can be used to purchase joke items to mess with users and invest in stocks using near realtime prices.
                </p>

                <h4 className={styles.sectionText}>Features</h4>
                <ul className={styles.unorderedListText}>
                    <li>All interaction with bot is done through the main menu UI with buttons. No commands necessary.</li>
                    <li>Gain currency through active participation in voice chats or reactions to text messages.</li>
                    <li>Buy and use items with various effects like temporarily timing out users or temporarily lowering bitrate for voice channels.</li>
                    <li>Buy equipment to increase currency gain or augment item effects.</li>
                    <li>Invest in real world stocks using fake currency with near real time stock prices.</li>
                    <li>View list of messages with highest amount of reactions.</li>
                    <li>View leaderboard of users in respect to total value of currency and stock holdings.</li>
                </ul>

                <h4 className={styles.sectionText}>Technologies Used</h4>
                <ul className={styles.unorderedListText}>
                    <li>Javascript</li>
                    <li>Node.JS</li>
                    <li>Discord.JS</li>
                    <li>Twelve Data API</li>
                </ul>

                <h4 className={styles.sectionText}>Source Code</h4>
                <p className={styles.bodyText}>
                    <a id='githubSourceCodeLink' className={styles.githubLink} target='_blank' href='https://github.com/nyoon8360/BoEBot'>
                        <Image className={styles.githubLogoP1} src='/images/github-mark.png' alt='github logo' width={30} height={30}/>
                        <Image className={styles.githubLogoP2} src='/images/github_logo.png' alt='github logo p2' width={90} height={30}/>
                    </a>
                </p>
            </Reveal>
        </Layout>
    )
}