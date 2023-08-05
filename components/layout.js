import MainHeader from '../components/mainHeader';
import styles from './layout.module.css';

export default function Layout({ children }) {

    return (
        <div>
            <div className={styles.mainContainer}>
                <MainHeader transitionFunction={transition}></MainHeader>
                <div className={styles.transitionContainer} id='transitionContainer'>
                </div>
            </div>
            <div className={styles.contentContainer}>
                <p>hai</p>
            </div>
        </div>
    );
}

function transition(clickedTabEle) {
    let tabXcoord = clickedTabEle.getBoundingClientRect().left;
    let tabComputedStyle = getComputedStyle(clickedTabEle);

    let transitionContainer = document.getElementById('transitionContainer');

    let circle = document.createElement('div');
    circle.style.width = '500px';
    circle.style.height = '500px';
    circle.style.background = '#3f51b5';
    circle.style.overflow = 'hidden';
    circle.style.borderRadius = '100%';

    circle.style.top = '100vh';
    circle.style.left = (Math.max(0, tabXcoord) + (parseFloat(tabComputedStyle.width.slice(0, -2))/2)) + "px";

    circle.className = styles.divCircle;

    transitionContainer.appendChild(circle);
    transitionContainer.style.zIndex = 2;
}