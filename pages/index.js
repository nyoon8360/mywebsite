import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/index.module.css';

export default function HomePage() {

    return (
        <Layout>
            <div className={styles.profilePicContainer}>
            <Image className={styles.profilePic} src='/images/profile_pic_rain_car.jpg' height={250} width={250} alt='My Pic'/>
            </div>
            <p>Hey I'm Nick, a {calc_age(new Date(1998, 7, 27))} years old software developer, tattoo enthusiast, and massive music fan!</p>
            <p>I made this website to house my interests, show off some of my personal projects I've enjoyed working 
                on, and to learn the Next.JS framework through hands-on experience.</p>

            <p>Intro, Age, Bday, College, Degree, Interests</p>
            <p>I am {calc_age(new Date(1998, 7, 27))} years old.</p>
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