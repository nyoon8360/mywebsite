import Link from 'next/link';
import styles from './mainHeader.module.css';
import { useRouter } from 'next/router';
import { useTransitionContext } from '../context/transition';

var transitionFunction;
let blockTabClickEvent = false;

export default function MainHeader(props) {
    const router = useRouter();
    let currentPath = router.pathname;
    const [tColor, setTColor] = useTransitionContext();

    transitionFunction = props.transitionFunction;
    blockTabClickEvent = false;

    return (
        <div>
            <div className={styles.headerContainer}>
                <div className={styles.title}>
                    <Link className={styles.titleText} href='/' onClick={() => {setTColor('#ECEE81')}}>Nicholas Yoon</Link>
                </div>
                <div id="containerTabs" className={styles.tabContainer}>
                    {tabBuilder('Home', 'tabHome', '#ECEE81', '/', currentPath)}
                    {tabBuilder('Projects', 'tabProjects', '#8DDFCB', '/projects', currentPath)}
                    {tabBuilder('Resume', 'tabResume', '#82A0D8', '/resume', currentPath)}
                    {tabBuilder('Music Likes', 'tabMusic', '#EDB7ED', '/music-likes', currentPath)}
                    {tabBuilder('Socials', 'tabSocials', '#AF62E3', '/socials', currentPath)}
                </div>
            </div>
        </div>
    );
}

function tabBuilder(name, id, underlineColor, path, currentPath) {
    let tabStyle = {
        backgroundColor: '#393939',
        cursor: 'default',
        textDecorationColor: underlineColor
    }
    return (
        <div id={id} style={currentPath == path ? tabStyle : {textDecorationColor: underlineColor}} page-route={path} className={styles.tab} onClick={currentPath == path ? null : () => handleTabClick(id)}>{name}</div>
    )
}

function handleTabClick(tabId) {
    if (!blockTabClickEvent) {
        blockTabClickEvent = true;

        let tabElement = document.getElementById(tabId);
        let tabContainer = document.getElementById('containerTabs');

        //get tabElement's size and position
        let tabComputedStyle = getComputedStyle(tabElement);
        let tabXcoord = tabElement.getBoundingClientRect().left;

        //spawn new element
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

        fallingTab.addEventListener('animationend', () => {
            transitionFunction(tabElement, fallingTab.style.textDecorationColor);
        });

        tabContainer.appendChild(fallingTab);
    }
}