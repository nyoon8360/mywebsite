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
                <Image 
                className={styles.projectThumbnail} 
                src='/images/website-thumbnail.png' 
                alt='Personal Project Website' 
                height={300} width={400}
                style={{backgroundColor: "#6E7590"}}
                />
                
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

            <h3 className={styles.projectTitle}>Pokemon Safari Browser Game</h3>
            <Reveal keyframes={fadeUpAnimation} duration={2000} triggerOnce='true'>

                <Image 
                className={styles.projectThumbnail} 
                src='/images/pokemon_safari_thumbnail.png' 
                alt='Pokemon Safari Browser Game' 
                height={300} width={400}
                style={{backgroundColor: "wheat"}}
                />

                <h4 className={styles.sectionText}>Description</h4>
                <p className={styles.bodyText}>
                    A browser pokemon game based on the pokemon safari zone minigame. <br/>
                    Built in 3 days in a group of 3 for practice and skill application purposes.
                </p>

                <h4 className={styles.sectionText}>User Features</h4>
                <ul className={styles.unorderedListText}>
                    <li>Registration and login functionality.</li>
                    <li>View all captured pokemon along with their stats in a custom UI.</li>
                    <li>Visit different areas that house specific pokemon.</li>
                    <li>Throw mud at pokemon to increase their catch rate but increase their flee rate.</li>
                    <li>Throw bait at pokemon to decrease their flee rate but decrease their catch rate.</li>
                    <li>Throw pokeballs to attempt to catch pokemon.</li>
                    <li>Change your own password.</li>
                </ul>

                <h4 className={styles.sectionText}>Admin Features</h4>
                <ul className={styles.unorderedListText}>
                    <li>Fully responsive administrator panel UI accessed by logging into an admin account.</li>
                    <li>Delete existing user accounts.</li>
                    <li>Create, view, edit, or delete pokemon that exist in different player's inventories.</li>
                    <li>Create, view, edit, or delete the different available areas for players to visit.</li>
                    <li>Create, view, edit, or delete the different pokemon you can encounter in areas along with the probability of encountering them.</li>
                    <li>All pokemon art assets and certain stats are pulled from PokeAPI.</li>
                </ul>

                <h4 className={styles.sectionText}>Technical Features</h4>
                <ul className={styles.unorderedListText}>
                    <li>Back-end server written in Java utilizing Spring Security for authentication.</li>
                    <li>Server generates JWT token on client login that client must provide on every request.</li>
                    <li>Server maintains a RESTful API with different endpoints protected based on account permissions.</li>
                    <li>All user passwords are hashed and stored in a MySQL database.</li>
                    <li>DDL file included to create database and populate with dummy data.</li>
                </ul>

                <h4 className={styles.sectionText}>Technologies Used</h4>
                <ul className={styles.unorderedListText}>
                    <li>Javascript, HTML, CSS</li>
                    <li>React.JS</li>
                    <li>Java</li>
                    <li>Spring Security</li>
                    <li>Spring JDBC Template</li>
                    <li>JWT Tokens</li>
                    <li>jUnit 5</li>
                    <li>MySQL</li>
                    <li>Docker</li>
                    <li>PokeAPI</li>
                </ul>

                <h4 className={styles.sectionText}>Source Code</h4>
                <p className={styles.bodyText}>
                    <a id='githubSourceCodeLink' className={styles.githubLink} target='_blank' href='https://github.com/nyoon8360/capstone-project'>
                        <Image className={styles.githubLogoP1} src='/images/github-mark.png' alt='github logo' width={30} height={30}/>
                        <Image className={styles.githubLogoP2} src='/images/github_logo.png' alt='github logo p2' width={90} height={30}/>
                    </a>
                </p>
            </Reveal>

            <hr className={styles.divider}></hr>

            <h3 className={styles.projectTitle}>Bank of Edwin Discord Bot</h3>
            <Reveal keyframes={fadeUpAnimation} duration={2000} triggerOnce='true'>

                <Image 
                className={styles.projectThumbnail} 
                src='/images/bank_of_edwin_thumbnail.png' 
                alt='Bank of Edwin Discord Bot' 
                height={300} width={400}
                style={{backgroundColor: "#2F3336"}}
                />

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