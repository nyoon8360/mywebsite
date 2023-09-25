import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/index.module.css';
import {Reveal} from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

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
            <Image className={styles.profilePic} src='/images/profile_pic_rain_car.jpg' height={250} width={250} alt='My Pic'/>
            </div>
            <Reveal keyframes={fadeUpAnimation} delay={500}>
                <p>Hey I'm Nick, a {calc_age(new Date(1998, 7, 27))} years old software developer, tattoo enthusiast, and massive music fan!</p>

                <p>I made this website to house my interests, show off some of my personal projects I've enjoyed working 
                on, and to learn the Next.JS framework through hands-on experience.</p>

                <p></p>

                <p>Intro, Age, Bday, College, Degree, Interests</p>
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