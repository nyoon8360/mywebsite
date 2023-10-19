import MainHeader from '../components/mainHeader';
import styles from './layout.module.css';
import { useRouter } from 'next/router';
import { useTransitionContext } from '../context/transition';

var blockFadeIn = false;
var fadeColor = 'transparent';
var transitionContainerOnAnimEnd;

//layout component to contain the header, transition animation div, and page content
export default function Layout({ children }) {
    const router = useRouter();
    const [tColor, setTColor] = useTransitionContext();

    //function creating and playing expanding circle transition animation
    function transition(clickedTabEle, transitionColor) {
        //get styles and coords from passed tab element
        let tabXcoord = clickedTabEle.getBoundingClientRect().left;
        let tabComputedStyle = getComputedStyle(clickedTabEle);

        blockFadeIn = true;
    
        //get ripple transition div
        let rippleTransitionDiv = document.getElementById('rippleTransition');
        let rippleTransitionRingDiv = document.getElementById('rippleTransitionRing');

        rippleTransitionDiv.style.left = `${(Math.max(0, tabXcoord) + (parseFloat(tabComputedStyle.width.slice(0, -2))/2))}px`;
        rippleTransitionDiv.style.width = '9000px';
        rippleTransitionDiv.style.height = '4500px';
        rippleTransitionDiv.style.background = `radial-gradient(circle at 50% 100%,${transitionColor} 20%, rgba(162, 212, 240, 0) 70%)`

        rippleTransitionRingDiv.style.left = `${(Math.max(0, tabXcoord) + (parseFloat(tabComputedStyle.width.slice(0, -2))/2))}px`;
        rippleTransitionRingDiv.style.width = '9000px';
        rippleTransitionRingDiv.style.height = '4500px';
        rippleTransitionRingDiv.style.background = `radial-gradient(circle at 50% 100%, rgba(162, 212, 240, 0) 65%, ${transitionColor} 70%)`

        rippleTransitionDiv.addEventListener('transitionend', () => {
            setTColor(transitionColor);
            router.push(clickedTabEle.getAttribute('page-route'));
        })
    }

    //if navigated to current page through transition animation, play fade in animation using color of clicked tab
    /* if (tColor && !blockFadeIn) {
        fadeColor = tColor;
        transitionContainerZ = 2;
        fadePlaying = true;
    } */

    if (tColor) {
        fadeColor = tColor;
    } 

    return (
        <div>
            <div className={styles.overlay} onAnimationEnd={transitionContainerOnAnimEnd} id='overlay'>
                <div id='rippleTransition' className={styles.rippleTransition}></div>
                <div id='rippleTransitionRing' className={styles.rippleTransitionRing}></div>
                <div id='fadeTransition' className={styles.fadeTransition} style={{backgroundColor: fadeColor}}></div>
            </div>
            <MainHeader transitionFunction={transition}></MainHeader>
            <div className={styles.contentContainer}>
                {children}
            </div>
        </div>
    );
}