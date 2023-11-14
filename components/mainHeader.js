import Link from 'next/link';
import styles from './mainHeader.module.css';
import HeaderTab from './headerTab';
import { useRouter } from 'next/router';
import { useTransitionContext } from '../context/transition';
import { useEffect, useState } from 'react';

var transitionFunction;

export default function MainHeader(props) {
    const router = useRouter();
    const [tColor, setTColor] = useTransitionContext();
    const [transitionPlaying, setTransitionPlaying] = useState(false);

    let currentPath = router.pathname;

    transitionFunction = props.transitionFunction;

    //expand header positioner's height to match the total height of it's contained content
    useEffect(() => {
        let headerPositionerElement = document.getElementById('headerPositioner');

        let headerContainerElement = document.getElementById('headerContainer');
        headerContainerElement.style.height = getComputedStyle(headerPositionerElement).height;
    });

    //function that plays animation of a falling tab when tab is clicked
    function handleTabClick(event) {
        //set state of transitionPlaying to true to disable all tab buttons
        setTransitionPlaying(true);

        let tabElement = event.target;

        //get tabElement's size and position
        let tabComputedStyle = getComputedStyle(tabElement);
        let tabComputedWidth = tabComputedStyle.width;
        let tabXcoord = tabElement.getBoundingClientRect().left;

        //set falling tab's wave element to the color of the clicked tab's text decoration then start playing wave animation
        let backgroundSvgUri = `url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 585'%3E%3Cpath fill='${tabComputedStyle.textDecorationColor}' fill-opacity='1' d='M 0 32 L 24 48 C 48 64 96 96 144 138.7 C 192 181 240 235 288 229.3 C 336 224 384 160 432 160 C 480 160 528 224 576 218.7 C 624 213 672 139 720 90.7 C 768 43 816 21 864 42.7 C 912 64 960 128 1008 165.3 C 1056 203 1104 213 1152 192 C 1200 171 1248 117 1296 85.3 C 1344 53 1392 43 1416 37.3 L 1440 32 L 1440 585 L 1416 585 C 1392 585 1344 585 1296 585 C 1248 585 1200 585 1152 585 C 1104 585 1056 585 1008 585 C 960 585 912 585 864 585 C 816 585 768 585 720 585 C 672 585 624 585 576 585 C 528 585 480 585 432 585 C 384 585 336 585 288 585 C 240 585 192 585 144 585 C 48.9 585 158.9 585 24 585 L 0 585 L 0 32 Z'%3E%3C/path%3E%3C/svg%3E")`;
        let fallingTabWaveElement = document.getElementById('fallingTabWave');
        fallingTabWaveElement.style.backgroundImage = backgroundSvgUri;
        fallingTabWaveElement.style.animationPlayState = 'running';

        //select and update falling tab element's style to that of selected tab
        let fallingTabElement = document.getElementById('fallingTab');
        let fallingTabContainerElement = document.getElementById('fallingTabContainer');
        fallingTabContainerElement.style.width = tabComputedWidth;

        fallingTabElement.textContent = tabElement.textContent;

        fallingTabElement.style.textDecoration = tabComputedStyle.textDecoration;
        fallingTabElement.style.textDecorationColor = tabComputedStyle.textDecorationColor;

        fallingTabContainerElement.style.left = Math.max(0, tabXcoord) + 'px';

        //hide clicked tab and clicked tab's wave image
        tabElement.style.visibility = 'hidden';
        tabElement.previousSibling.style.visibility = 'hidden';

        //when the animation of the falling tab ends, invoke the expanding circle transition function
        fallingTabContainerElement.addEventListener('animationend', () => {
            transitionFunction(tabElement, tabXcoord, tabComputedWidth, fallingTabElement.style.textDecorationColor);
        });

        //show falling tab element and start falling animation
        fallingTabContainerElement.style.animationPlayState = 'running';
        fallingTabContainerElement.style.visibility = 'visible';
    }

    return (
        <header id='headerContainer'>
            <div className={styles.headerContainer} id='headerPositioner'>
                <h1 className={styles.title}>
                    <Link className={styles.titleText} href='/' onClick={() => {setTColor('#ECEE81')}}>Nicholas Yoon</Link>
                </h1>
                <h2 className={styles.subtitleText}>Software Developer</h2>
                <div id="containerTabs" className={styles.tabContainer}>
                    <HeaderTab tabState={currentPath == '/' ? 'selected' : transitionPlaying ? 'disabled' : 'normal'} underlineColor='#ECEE81' destinationPath='/' onClickEvent={handleTabClick}>Home</HeaderTab>
                    <HeaderTab tabState={currentPath == '/projects' ? 'selected' : transitionPlaying ? 'disabled' : 'normal'} underlineColor='#56FCC2' destinationPath='/projects' onClickEvent={handleTabClick}>Projects</HeaderTab>
                    <HeaderTab tabState={currentPath == '/interests' ? 'selected' : transitionPlaying ? 'disabled' : 'normal'} underlineColor='#82A0D8' destinationPath='/interests' onClickEvent={handleTabClick}>Interests</HeaderTab>
                    <HeaderTab tabState={currentPath == '/music-likes' ? 'selected' : transitionPlaying ? 'disabled' : 'normal'} underlineColor='#EDB7ED' destinationPath='/music-likes' onClickEvent={handleTabClick}>Music Likes</HeaderTab>
                    <HeaderTab tabState={currentPath == '/socials' ? 'selected' : transitionPlaying ? 'disabled' : 'normal'} underlineColor='#AF62E3' destinationPath='/socials' onClickEvent={handleTabClick}>Socials</HeaderTab>
                    <HeaderTab tabState='falling' underlineColor='#ECEE81'>Home</HeaderTab>
                    <div id='fallingTabContainer' className={styles.fallingTabContainer}>
                        <div id='fallingTabWave' className={styles.fallingTabWave}></div>
                        <div id='fallingTab' className={styles.fallingTab}></div>
                    </div>
                </div>
                <hr className={styles.headerUnderline}></hr>
            </div>
        </header>
    );
}

