import Link from 'next/link';
import styles from './mainHeader.module.css';

var transitionFunction;

export default function MainHeader(props) {
    transitionFunction = props.transitionFunction;

    return (
        <div id='mainContainer'>
            <div className={styles.headerContainer}>
                <div className={styles.title}>
                    <Link className={styles.titleText} href='/'>Nicholas Yoon</Link>
                </div>
                <div id="tabContainer" className={styles.tabContainer}>
                    <div id="tabHome" className={styles.tab} onClick={(event) => handleTabClick(event, 'tabHome')} href='/'>Home</div>
                    <div id="tabProjects" className={styles.tab} onClick={(event) => handleTabClick(event, 'tabProjects')} href='/'>Projects</div>
                    <div id="tabResume" className={styles.tab} onClick={(event) => handleTabClick(event, 'tabResume')} href='/'>Resume</div>
                    <div id="tabMusic" className={styles.tab} onClick={(event) => handleTabClick(event, 'tabMusic')} href='/'>Music Likes</div>
                    <div id="tabSocials" className={styles.tab} onClick={(event) => handleTabClick(event, 'tabSocials')} href='/'>Socials</div>
                </div>
            </div>
        </div>
    );
}

function handleTabClick(event, tabId) {
    let tabElement = document.getElementById(tabId);
    let tabContainer = document.getElementById('tabContainer');

    //get tabElement's size and position
    let tabComputedStyle = getComputedStyle(tabElement);
    let tabXcoord = tabElement.getBoundingClientRect().left;

    //remove text from clicked tab
    tabElement.style.color = 'transparent';

    //spawn new element
    let fallingTab = document.createElement('div');
    fallingTab.className = styles.fallingTab;

    fallingTab.style.position = 'absolute';
    fallingTab.style.width = tabComputedStyle.width;

    fallingTab.textContent = tabElement.textContent;

    fallingTab.style.left = Math.max(0, tabXcoord);

    fallingTab.addEventListener('animationend', () => {
        transitionFunction(tabElement);
    });

    tabContainer.appendChild(fallingTab);
}