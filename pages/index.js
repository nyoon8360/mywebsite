import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/index.module.css';

export default function HomePage() {
    return (
        <Layout>
            <Image class={styles.profilePic} src='/images/profile_pic_rain_car.jpg' height={200} width={200} alt='My Pic'/>
            <p>Lorem Ipsum</p>
            <p>Home Page</p>
            <p>hai</p>
        </Layout>
    )
}