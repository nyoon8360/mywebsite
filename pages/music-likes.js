import Layout from '../components/layout';
import Collapsible from '../components/collapsible';
import SpotifyEmbed from '../components/spotifyEmbed';
import SoundcloudEmbed from '../components/soundcloudEmbed';

import Image from 'next/image';
import styles from '../styles/music-likes.module.css';
import { Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import Switch from 'react-switch';
import { useState, createContext, useContext } from "react";

export default function MusicLikes() {
    const [switchState, setSwitchState] = useState(true);
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
    const spotifyIcon = (
        <div className={styles.iconContainer}>
            <Image src='/images/spotify-logo.png' height={25} width={25} alt='spotify'/>
        </div>
    )

    const soundcloudIcon = (
        <div className={styles.iconContainer}>
            <Image src='/images/soundcloud-logo.png' style={{marginLeft: '3px'}} height={25} width={25} alt='spotify'/>
        </div>
    )

    function toggleSwitchChange() {
        setSwitchState(!switchState);
    }

    return (
        <Layout>
            <hr className={styles.divider}/>
            <h3 className={styles.category}>Top Favorite Artist</h3>
            <hr className={styles.divider}/>

            <Reveal keyframes={fadeUpAnimation} delay={200} triggerOnce='true'>
                <SpotifyEmbed src="https://open.spotify.com/embed/artist/3pc0bOVB5whxmD50W79wwO?utm_source=generator"></SpotifyEmbed>
            </Reveal>

            <hr className={styles.divider}/>
            <h3 className={styles.category}>Favorite Genres</h3>
            <hr className={styles.divider}/>

            <Switch className={styles.toggleSwitch} checkedIcon={spotifyIcon} uncheckedIcon={soundcloudIcon} onColor='#2ea616' offColor='#eb8705' onChange={toggleSwitchChange} checked={switchState}></Switch>
            
            <Reveal keyframes={fadeUpAnimation} delay={200} triggerOnce='true'>
                <Collapsible title='RnB (Rhythm and Blues)'>
                    <div className={styles.spotifySongEmbeds}>
                        <SpotifyEmbed width='98%' leftMargin='1%' src="https://open.spotify.com/embed/track/3iqlzKw1tLt6tXZyKWV0fZ?utm_source=generator"></SpotifyEmbed>
                        <SpotifyEmbed width='98%' leftMargin='1%' src="https://open.spotify.com/embed/track/60O330MwrWVWCp9fpxzulM?utm_source=generator"></SpotifyEmbed>
                    </div>

                    <div className={styles.soundcloudSongEmbeds}>
                        
                    </div>
                </Collapsible>
                <Collapsible title='KRnB (Korean Rhythm and Blues)'>
                    <p>hai there</p>
                </Collapsible>
                <Collapsible title='Alternative / Indie'>
                    <p>hai there</p>
                </Collapsible>
                <Collapsible title='Electronic'>
                    <p>hai there</p>
                </Collapsible>
                <Collapsible title='EDM (Electronic Dance Music)'>
                    <p>hai there</p>
                </Collapsible>

            </Reveal>

            <hr className={styles.divider}/>
            <h3 className={styles.category}>Other Favorite Artists</h3>
            <hr className={styles.divider}/>
            
            <Reveal keyframes={fadeUpAnimation} delay={200} triggerOnce='true'>
                <SpotifyEmbed src="https://open.spotify.com/embed/artist/3GFO1X5LAHduvR314sXnqI?utm_source=generator"></SpotifyEmbed>
                <SpotifyEmbed src="https://open.spotify.com/embed/artist/33crDRqANd3NQHJagZkQ7O?utm_source=generator"></SpotifyEmbed>
                <SpotifyEmbed src="https://open.spotify.com/embed/artist/2o8gT0fQmFxGNbowbdgeZe?utm_source=generator"></SpotifyEmbed>
                <SpotifyEmbed src="https://open.spotify.com/embed/artist/5JZ7CnR6gTvEMKX4g70Amv?utm_source=generator"></SpotifyEmbed>
                <SpotifyEmbed src="https://open.spotify.com/embed/artist/0aMrhUHnOzfiPcMc2PGiaT?utm_source=generator"></SpotifyEmbed>
                <SpotifyEmbed src="https://open.spotify.com/embed/artist/3g1lnUW8xnEPCO60kORskb?utm_source=generator"></SpotifyEmbed>
            </Reveal>

        </Layout>
    )
}