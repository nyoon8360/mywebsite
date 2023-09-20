import Link from 'next/link';
import styles from './mainHeader.module.css';
import { useRouter } from 'next/router';

var transitionFunction;

let blockTabClickEvent = false;

const selectedTabStyle = {
    backgroundColor: '#393939',
    cursor: 'default'
};

export default function MainHeader(props) {
    const router = useRouter();
    let currentPath = router.pathname;

    transitionFunction = props.transitionFunction;
    blockTabClickEvent = false;

    return (
        <div>
            <div className={styles.headerContainer}>
                <div className={styles.title}>
                    <Link className={styles.titleText} href='/'>Nicholas Yoon</Link>
                </div>
                <div id="containerTabs" className={styles.tabContainer}>
                    <div id="tabHome" style={currentPath == '/' ? selectedTabStyle : {}} page-route='/' className={styles.tab} onClick={currentPath == '/' ? null : () => handleTabClick('tabHome')} href='/'>Home</div>
                    <div id="tabProjects" style={currentPath == '/projects' ? selectedTabStyle : {}}  page-route='/projects' className={styles.tab} onClick={currentPath == '/projects' ? null : () => handleTabClick('tabProjects')} href='/'>Projects</div>
                    <div id="tabResume" style={currentPath == '/resume' ? selectedTabStyle : {}} page-route='/resume' className={styles.tab} onClick={currentPath == '/resume' ? null : () => handleTabClick('tabResume')} href='/'>Resume</div>
                    <div id="tabMusic" style={currentPath == '/music-likes' ? selectedTabStyle : {}} page-route='/music-likes' className={styles.tab} onClick={currentPath == '/music-likes' ? null : () => handleTabClick('tabMusic')} href='/'>Music Likes</div>
                    <div id="tabSocials" style={currentPath == '/socials' ? selectedTabStyle : {}} page-route='/socials' className={styles.tab} onClick={currentPath == '/socials' ? null : () => handleTabClick('tabSocials')} href='/'>Socials</div>
                </div>
            </div>
        </div>
    );
}

function handleTabClick(tabId) {
    if (!blockTabClickEvent) {
        blockTabClickEvent = true;

        let tabElement = document.getElementById(tabId);
        let tabContainer = document.getElementById('containerTabs');

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

        fallingTab.style.left = Math.max(0, tabXcoord) + 'px';

        fallingTab.addEventListener('animationend', () => {
            transitionFunction(tabElement);
        });

        tabContainer.appendChild(fallingTab);
    }
}