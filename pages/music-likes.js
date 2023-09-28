import Layout from '../components/layout';
import styles from '../styles/music-likes.module.css';
import Image from 'next/image';
import {Reveal} from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

export default function MusicLikes() {

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
            <h3 className={styles.category}>Favorite Artist</h3>

            <Reveal keyframes={fadeUpAnimation} delay={500}>
                <iframe style={{borderRadius: '12px'}} 
                src="https://open.spotify.com/embed/artist/3pc0bOVB5whxmD50W79wwO?utm_source=generator" 
                width="100%" height="152" frameBorder="0" allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"></iframe>
            </Reveal>

            <hr className={styles.divider}/>

            <h3 className={styles.category}>Favorite Genres</h3>

            <Reveal keyframes={fadeUpAnimation} delay={500}>
                <button className={styles.collapsible} onClick={toggleCollapsible}>
                    <Image className={styles.collapsibleSvg} src='/svgs/down-arrow.svg' height={50} width={50} alt='arrow'/>
                </button>
            </Reveal>

            <hr className={styles.divider}/>
            
        </Layout>
    )
}

function toggleCollapsible(event) {
    let collapsibleElement = event.target;
    
    collapsibleElement.classList.toggle('.activeCollapsible');

    collapsibleElement.children[0].src = collapsibleElement.children[0].getAttribute('src') == '/svgs/down-arrow.svg' ? '/svgs/up-arrow.svg' : '/svgs/down-arrow.svg';
}