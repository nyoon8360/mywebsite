import Link from 'next/link';
import styles from './mainHeader.module.css';
import HeaderTab from './headerTab';
import { useRouter } from 'next/router';
import { useTransitionContext } from '../context/transition';
import { useEffect, useState } from 'react';

var transitionFunction;
let blockTabClickEvent = false;

export default function MainHeader(props) {
    const router = useRouter();
    const [tColor, setTColor] = useTransitionContext();

    let currentPath = router.pathname;

    transitionFunction = props.transitionFunction;
    blockTabClickEvent = false;

    //expand header positioner's height to match the total height of it's contained content
    useEffect(() => {
        let headerPositionerElement = document.getElementById('headerPositioner');

        let headerContainerElement = document.getElementById('headerContainer');
        headerContainerElement.style.height = getComputedStyle(headerPositionerElement).height;
    });

    return (
        <header id='headerContainer'>
            <div className={styles.headerContainer} id='headerPositioner'>
                <h1 className={styles.title}>
                    <Link className={styles.titleText} href='/' onClick={() => {setTColor('#ECEE81')}}>Nicholas Yoon</Link>
                </h1>
                <h2 className={styles.subtitleText}>Software Developer</h2>
                <div id="containerTabs" className={styles.tabContainer}>
                    <HeaderTab tabId='tabHome' underlineColor='#ECEE81' destinationPath='/' currentPath={currentPath} waveSvgColor={'ECEE81'} onClickEvent={handleTabClick}>Home</HeaderTab>
                    <HeaderTab tabId='tabProjects' underlineColor='#56fcc2' destinationPath='/projects' currentPath={currentPath} waveSvgColor={'56fcc2'} onClickEvent={handleTabClick}>Projects</HeaderTab>
                    <HeaderTab tabId='tabInterests' underlineColor='#82A0D8' destinationPath='/interests' currentPath={currentPath} waveSvgColor={'82A0D8'} onClickEvent={handleTabClick}>Interests</HeaderTab>
                    <HeaderTab tabId='tabMusic' underlineColor='#EDB7ED' destinationPath='/music-likes' currentPath={currentPath} waveSvgColor={'EDB7ED'} onClickEvent={handleTabClick}>Music Likes</HeaderTab>
                    <HeaderTab tabId='tabSocials' underlineColor='#AF62E3' destinationPath='/socials' currentPath={currentPath} waveSvgColor={'AF62E3'} onClickEvent={handleTabClick}>Socials</HeaderTab>
                    <div id='fallingTab' className={styles.fallingTab}></div>
                </div>
                <hr className={styles.headerUnderline}></hr>
            </div>
        </header>
    );
}

//function that plays animation of a falling tab when tab is clicked
function handleTabClick(event) {
    if (!blockTabClickEvent) {
        blockTabClickEvent = true;

        let tabElement = event.target;

        //get tabElement's size and position
        let tabComputedStyle = getComputedStyle(tabElement);
        let tabXcoord = tabElement.getBoundingClientRect().left;

        //create falling tab element that matches the visual of the clicked tab
        let fallingTabElement = document.getElementById('fallingTab');
        fallingTabElement.style.width = tabComputedStyle.width;

        fallingTabElement.textContent = tabElement.textContent;

        fallingTabElement.style.textDecoration = tabComputedStyle.textDecoration;
        fallingTabElement.style.textDecorationColor = tabComputedStyle.textDecorationColor;

        fallingTabElement.style.left = Math.max(0, tabXcoord) + 'px';

        //hide clicked tab
        tabElement.style.visibility = 'hidden';
        tabElement.previousSibling.style.visibility = 'hidden';

        //when the animation of the falling tab ends, invoke the expanding circle transition function
        fallingTabElement.addEventListener('animationend', () => {
            transitionFunction(tabElement, fallingTab.style.textDecorationColor);
        });

        //show falling tab element and start falling animation
        fallingTabElement.style.animationPlayState = 'running';
        fallingTabElement.style.visibility = 'visible';
    }
}