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
    //state of toggle switch
    const [switchState, setSwitchState] = useState(true);

    //animation key frames for fading up animation on elements entering view port
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

    //logo elements for spotify and soundcloud
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

    //event handler when embed switch is toggled
    function toggleSwitchChange() {
        setSwitchState(!switchState);

        //toggle between showing spotify and soundcloud embeds in collapsibles
        let spotifyEmbeds = document.getElementsByClassName(styles.spotifySongEmbeds);
        let soundcloudEmbeds = document.getElementsByClassName(styles.soundcloudSongEmbeds);

        for (let i = 0; i < spotifyEmbeds.length; i++) {
            spotifyEmbeds[i].classList.toggle(styles.displayNone);
        }

        for (let i = 0; i < soundcloudEmbeds.length; i++) {
            soundcloudEmbeds[i].classList.toggle(styles.displayNone);
        }
        
    }

    return (
        <Layout>
            <h3 className={styles.category} style={{marginTop: '30px'}}>Favorite Artist</h3>
            <hr className={styles.divider}/>

            <Reveal keyframes={fadeUpAnimation} duration={2000} triggerOnce='true'>
                <SpotifyEmbed src="https://open.spotify.com/embed/artist/3pc0bOVB5whxmD50W79wwO?utm_source=generator"></SpotifyEmbed>
            </Reveal>


            <h3 className={styles.category}>Favorite Genres</h3>
            <hr className={styles.divider}/>

            <div className={styles.toggleSwitchContainer}>
                <Switch id='embedToggleSwitch' className={styles.toggleSwitch} checkedIcon={spotifyIcon} uncheckedIcon={soundcloudIcon} onColor='#2ea616' offColor='#eb8705' onChange={toggleSwitchChange} checked={switchState}></Switch>
                <label htmlFor='embedToggleSwitch' className={styles.toggleSwitchLabel}>Embed Mode</label>
            </div>

            <Reveal keyframes={fadeUpAnimation} duration={2000} triggerOnce='true'>
                <Collapsible title='RnB (Rhythm and Blues)'>
                    <div className={styles.spotifySongEmbeds}>
                        <SpotifyEmbed width='98%' marginLeft='1%' src="https://open.spotify.com/embed/track/3iqlzKw1tLt6tXZyKWV0fZ?utm_source=generator"></SpotifyEmbed>
                        <SpotifyEmbed width='98%' marginLeft='1%' src="https://open.spotify.com/embed/track/68OnIh4v10tWxZYJTsHJWX?utm_source=generator"></SpotifyEmbed>
                        <SpotifyEmbed width='98%' marginLeft='1%' src="https://open.spotify.com/embed/track/30nzm88lmvORdgiw7Wm9rV?utm_source=generator"></SpotifyEmbed>
                    </div>

                    <div className={`${styles.soundcloudSongEmbeds} ${styles.displayNone}`}>
                        <SoundcloudEmbed width='98%' marginLeftRight='1%' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1142067895&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></SoundcloudEmbed>
                        <SoundcloudEmbed width='98%' marginLeftRight='1%' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/794754367&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></SoundcloudEmbed>
                        <SoundcloudEmbed width='98%' marginLeftRight='1%' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/266251146&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></SoundcloudEmbed>
                    </div>
                </Collapsible>
                <Collapsible title='KRnB (Korean Rhythm and Blues)'>
                    <div className={styles.spotifySongEmbeds}>
                        <SpotifyEmbed width='98%' marginLeft='1%' src="https://open.spotify.com/embed/track/7GLn0324YKGYxbYN7GH8Ip?utm_source=generator"></SpotifyEmbed>
                        <SpotifyEmbed width='98%' marginLeft='1%' src="https://open.spotify.com/embed/track/6UBURyvj5cLC4UjhOQWzHa?utm_source=generator"></SpotifyEmbed>
                        <SpotifyEmbed width='98%' marginLeft='1%' src="https://open.spotify.com/embed/track/7KwxU8kseYKf5pLbuI25g0?utm_source=generator"></SpotifyEmbed>
                    </div>
                    <div className={`${styles.soundcloudSongEmbeds} ${styles.displayNone}`}>
                        <SoundcloudEmbed width='98%' marginLeftRight='1%' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1065734599&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></SoundcloudEmbed>
                        <SoundcloudEmbed width='98%' marginLeftRight='1%' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1384775962&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></SoundcloudEmbed>
                        <SoundcloudEmbed width='98%' marginLeftRight='1%' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/842688754&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></SoundcloudEmbed>
                    </div>
                </Collapsible>
                <Collapsible title='Alternative / Indie'>
                    <div className={styles.spotifySongEmbeds}>
                        <SpotifyEmbed width='98%' marginLeft='1%' src="https://open.spotify.com/embed/track/1mCjixRL3A4CDqUROKyMhT?utm_source=generator"></SpotifyEmbed>
                        <SpotifyEmbed width='98%' marginLeft='1%' src="https://open.spotify.com/embed/track/6In2HGCX8tzP92olTjHZ4G?utm_source=generator"></SpotifyEmbed>
                        <SpotifyEmbed width='98%' marginLeft='1%' src="https://open.spotify.com/embed/track/2a38MhulymV4WVJZacu4xn?utm_source=generator"></SpotifyEmbed>
                    </div>
                    <div className={`${styles.soundcloudSongEmbeds} ${styles.displayNone}`}>
                        <SoundcloudEmbed width='98%' marginLeftRight='1%' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1257704701&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></SoundcloudEmbed>
                        <SoundcloudEmbed width='98%' marginLeftRight='1%' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1552340389&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></SoundcloudEmbed>
                        <SoundcloudEmbed width='98%' marginLeftRight='1%' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1075462483&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></SoundcloudEmbed>
                    </div>
                </Collapsible>
                <Collapsible title='Electronic'>
                    <div className={styles.spotifySongEmbeds}>
                        <SpotifyEmbed width='98%' marginLeft='1%' src="https://open.spotify.com/embed/track/7AgOohNNfMXaTzYEy3keaZ?utm_source=generator"></SpotifyEmbed>
                        <SpotifyEmbed width='98%' marginLeft='1%' src="https://open.spotify.com/embed/track/1E6gKZoptibxhKZmOMCyUm?utm_source=generator"></SpotifyEmbed>
                        <SpotifyEmbed width='98%' marginLeft='1%' src="https://open.spotify.com/embed/track/7n1p8RF9MWqCOgQwNjT9EX?utm_source=generator"></SpotifyEmbed>
                    </div>
                    <div className={`${styles.soundcloudSongEmbeds} ${styles.displayNone}`}>
                        
                        <SoundcloudEmbed width='98%' marginLeftRight='1%' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/272163959&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></SoundcloudEmbed>
                        <SoundcloudEmbed width='98%' marginLeftRight='1%' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/330573581&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></SoundcloudEmbed>
                        <SoundcloudEmbed width='98%' marginLeftRight='1%' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/273840636&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></SoundcloudEmbed>
                        
                    </div>
                </Collapsible>
                <Collapsible title='EDM (Electronic Dance Music)'>
                    <div className={styles.spotifySongEmbeds}>
                        <SpotifyEmbed width='98%' marginLeft='1%' src="https://open.spotify.com/embed/track/0LcGOUrihGMa7yCq6jjd8a?utm_source=generator"></SpotifyEmbed>
                        <SpotifyEmbed width='98%' marginLeft='1%' src="https://open.spotify.com/embed/track/0eWOYqgysbSfsiCKl02xVN?utm_source=generator"></SpotifyEmbed>
                        <SpotifyEmbed width='98%' marginLeft='1%' src="https://open.spotify.com/embed/track/2P8MOT07PrPiTjqNPKWVsp?utm_source=generator"></SpotifyEmbed>
                    </div>
                    <div className={`${styles.soundcloudSongEmbeds} ${styles.displayNone}`}>
                        <SoundcloudEmbed width='98%' marginLeftRight='1%' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340410641&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></SoundcloudEmbed>
                        <SoundcloudEmbed width='98%' marginLeftRight='1%' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/785135950&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></SoundcloudEmbed>
                        <SoundcloudEmbed width='98%' marginLeftRight='1%' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/511320672&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></SoundcloudEmbed>
                    </div>
                </Collapsible>

            </Reveal>


            <h3 className={styles.category}>Other Artists I Like</h3>
            <hr className={styles.divider}/>
            
            <Reveal keyframes={fadeUpAnimation} duration={2000} triggerOnce='true'>
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