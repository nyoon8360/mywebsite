import Link from 'next/link';
import styles from './mainHeader.module.css';
import HeaderTab from './headerTab';
import { useRouter } from 'next/router';
import { useTransitionContext } from '../context/transition';
import { useEffect } from 'react';

var transitionFunction;
let blockTabClickEvent = false;

export default function MainHeader(props) {
    const router = useRouter();
    let currentPath = router.pathname;
    const [tColor, setTColor] = useTransitionContext();

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
                    <HeaderTab tabId='tabHome' underlineColor='#ECEE81' destinationPath='/' currentPath={currentPath} waveSvgUrl={'./svgs/homeWave.svg'} onClickEvent={handleTabClick}>Home</HeaderTab>
                    <HeaderTab tabId='tabProjects' underlineColor='#56fcc2' destinationPath='/projects' currentPath={currentPath} waveSvgUrl={'./svgs/projectsWave.svg'} onClickEvent={handleTabClick}>Projects</HeaderTab>
                    <HeaderTab tabId='tabInterests' underlineColor='#82A0D8' destinationPath='/interests' currentPath={currentPath} waveSvgUrl={'./svgs/interestsWave.svg'} onClickEvent={handleTabClick}>Interests</HeaderTab>
                    <HeaderTab tabId='tabMusic' underlineColor='#EDB7ED' destinationPath='/music-likes' currentPath={currentPath} waveSvgUrl={'./svgs/musicWave.svg'} onClickEvent={handleTabClick}>Music Likes</HeaderTab>
                    <HeaderTab tabId='tabSocials' underlineColor='#AF62E3' destinationPath='/socials' currentPath={currentPath} waveSvgUrl={'./svgs/socialsWave.svg'} onClickEvent={handleTabClick}>Socials</HeaderTab>
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
        let tabContainer = document.getElementById('containerTabs');

        //get tabElement's size and position
        let tabComputedStyle = getComputedStyle(tabElement);
        let tabXcoord = tabElement.getBoundingClientRect().left;

        //create falling tab element that matches the visual of the clicked tab
        let fallingTab = document.createElement('div');
        fallingTab.className = styles.fallingTab;

        fallingTab.style.position = 'absolute';
        fallingTab.style.width = tabComputedStyle.width;

        fallingTab.textContent = tabElement.textContent;

        fallingTab.style.textDecoration = tabComputedStyle.textDecoration;
        fallingTab.style.textDecorationColor = tabComputedStyle.textDecorationColor;

        fallingTab.style.left = Math.max(0, tabXcoord) + 'px';

        //remove text and styling from clicked tab
        tabElement.style.color = 'transparent';
        tabElement.style.textDecoration = '';

        //when the animation of the falling tab ends, invoke the expanding circle transition function
        fallingTab.addEventListener('animationend', () => {
            transitionFunction(tabElement, fallingTab.style.textDecorationColor);
        });

        //attach the created falling tab element to the tab container
        tabContainer.appendChild(fallingTab);
    }
}