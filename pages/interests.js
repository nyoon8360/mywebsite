import Layout from '../components/layout';
import styles from '../styles/interests.module.css';
import Image from 'next/image';
import { Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import InstagramEmbed from '../components/instagramEmbed';

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
                <Image className={styles.interestThumbnail} src='/images/scythe-trilogy.png' alt='scythe trilogy' height={300} width={400}/>
                <h4 className={styles.sectionText}>Scythe by Neal Shusterman</h4>
                <p className={styles.bodyText}>Lorem Ipsum</p>
                <p className={styles.bodyText}>interests page</p>
            </Reveal>

            <hr className={styles.divider}></hr>
            <p className={styles.categoryTitle}>Tattoos</p>
            <Reveal keyframes={fadeUpAnimation} duration={2000} triggerOnce='true'>
                <h4 className={styles.sectionText}>Stylistic Influences</h4>
                <p className={styles.bodyText}>
                    I've always been fascinated by the creative world of tattooing and the way different
                    countries and cultures evolve their own styles due to societal or even legal factors.
                    In particular, artists that practice their craft in South Korea have had their style
                    influenced heavily by the effective illegality of the profession in the country. The
                    increased competition due to absence of regulations, the lack of legal protections,
                    and the inability to openly advertise has forced artists to evolve rapidly in order to
                    make a living in the profession they love.
                </p>
                <p className={styles.bodyText}>
                    Some of my favorite styles I have seen include the floral-themed fine line tattooing
                    that artist Zihwa employs, the oriental brush painting styled blossom tattoos that
                    artist Seolhee produces, and the more rugged sketchbook-esque pieces created
                    by artist BK. These styles also come in stark contrast to the more stereotypically
                    American style tattoos that value bold lines and more definitively contrasting color
                    schemes.
                </p>
                <p className={styles.bodyText}>
                    Styles are not static, however, and as culture, perception, and technology change
                    throughout newer generations, tattooing art styles will likewise continue to evolve
                    and adapt. And while I will always hold a special place in my heart for the styles
                    that initially captured my passion for this artistic medium, I look forward to seeing
                    the many new styles that have yet to come.
                </p>

                <h4 className={styles.sectionText}>Favorite Artists</h4>
                
                <div className={styles.instagramEmbedLayout}>
                    <div className={styles.instagramEmbedContainer}>
                        <InstagramEmbed displayName='Zihwa' username='zihwa_tattooer'/>  
                    </div>
                    <div className={styles.instagramEmbedContainer}>
                        <InstagramEmbed displayName='설희 Seolhee' username='seolheetattoo'/>
                    </div>
                    <div className={styles.instagramEmbedContainer}>
                        <InstagramEmbed displayName='BK' username='bk_tattooer'/>
                    </div>
                    <div className={styles.instagramEmbedContainer}>
                        <InstagramEmbed displayName='BANUL / Yugyeong Ham' username='tattooist_banul'/>
                    </div>
                    <div className={styles.instagramEmbedContainer}>
                        <InstagramEmbed displayName='NADA tattoo' username='nada_tattoo'/>
                    </div>
                    <div className={styles.instagramEmbedContainer}>
                        <InstagramEmbed displayName='Mooho' username='mooho.oriental'/>
                    </div>
                </div>
                
            </Reveal>

            <hr className={styles.divider}></hr>
            <p className={styles.categoryTitle}>Fencing</p>
            <Reveal keyframes={fadeUpAnimation} duration={2000} triggerOnce='true'>
                <p className={styles.bodyText}>Lorem Ipsum</p>
                <p className={styles.bodyText}>interests page</p>
            </Reveal>
            
        </Layout>
    )
}