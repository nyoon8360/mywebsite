import MainHeader from '../components/mainHeader';
import styles from './layout.module.css';

//layout component to contain the header, transition animation div, and page content
export default function Layout({ children }) {

    return (
        <div>
            <div className={styles.mainContainer}>
                <MainHeader transitionFunction={transition}></MainHeader>
                <div className={styles.transitionContainer} id='transitionContainer'>
                </div>
            </div>
            <div className={styles.contentContainer}>
                {children}
            </div>
        </div>
    );
}

//function creating and playing transition animation
function transition(clickedTabEle) {
    let tabXcoord = clickedTabEle.getBoundingClientRect().left;
    let tabComputedStyle = getComputedStyle(clickedTabEle);

    let transitionContainer = document.getElementById('transitionContainer');

    let circle = document.createElement('div');
    circle.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);

    circle.style.left = (Math.max(0, tabXcoord) + (parseFloat(tabComputedStyle.width.slice(0, -2))/2)) + "px";

    circle.className = styles.divCircle;

    transitionContainer.appendChild(circle);
    transitionContainer.style.zIndex = 2;
}