import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/index.module.css';
import {Reveal} from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import Link from 'next/link';

export default function HomePage() {

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
            <div className={styles.profilePicContainer}>
                <Image className={styles.profilePic} src='/images/profile_pic.jpg' height={250} width={250} alt='My Pic'/>
            </div>
            <hr className={styles.divider}/>
            <Reveal keyframes={fadeUpAnimation} duration={2000} triggerOnce='true'>
                <p className={styles.bodyText}>Hey I'm Nick, a {calc_age(new Date(1998, 7, 27))} years old software developer, tattoo enthusiast, and massive music fan!</p>

                <p className={styles.bodyText}>I made this website to house my interests, show off some of my personal projects I've enjoyed working 
                on, and to learn the Next.JS framework through hands-on experience.</p>

                <p className={styles.bodyText}>Feel free to explore around or check out the source code for the website here: 
                    <a id='githubSourceCodeLink' className={styles.githubLink} target='_blank' href='https://github.com/nyoon8360/mywebsite'>
                        <Image className={styles.githubLogo} src='/images/github-mark.png' alt='github logo' width={18} height={18}/>
                        <label htmlFor='githubSourceCodeLink' className={styles.githubLinkLabel}>Source Code</label>
                    </a>
                    
                </p>

                <p className={styles.bodyText}>My website is currently going through a redesign so there may be some missing features or elements!</p>

            </Reveal>
        </Layout>
        
    )
}

//calculate age from birthday
function calc_age(bday) {
    let curDate = new Date(Date.now());

    let age = (curDate.getFullYear() - bday.getFullYear());

    let monthDiff = curDate.getMonth() - bday.getMonth();

    if (monthDiff < 0 || (monthDiff == 0 && curDate.getDate() < bday.getDate())) {
        age--;
    }

    return age;
}