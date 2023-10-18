import Layout from '../components/layout';
import styles from '../styles/socials.module.css';
import { InstagramEmbed } from 'react-social-media-embed';

export default function Socials() {
    

    return (
        <Layout>
            <p>Lorem Ipsum</p>
            <p>socials page</p>
            
            <InstagramEmbed url='https://www.instagram.com/p/CcdU1q0ugLN/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' width={328}></InstagramEmbed>
        
        </Layout>
    )
}