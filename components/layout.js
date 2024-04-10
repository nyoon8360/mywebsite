import MainHeader from '../components/mainHeader';
import styles from './layout.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTransitionContext } from '../context/transition';

var fadeColor = 'transparent';
var transitionContainerOnAnimEnd;

//layout component to contain the header, transition animation div, and page content
export default function Layout({ children }) {
    /*
    const router = useRouter();
    const [tColor, setTColor] = useTransitionContext();

    //function creating and playing expanding circle transition animation
    function transition(clickedTabEle, clickedTabEleXCoord, clickedTabEleWidth, transitionColor) {
        //get styles and coords from passed tab element
        console.log(clickedTabEleWidth);
    
        //get ripple transition div
        let rippleTransitionDiv = document.getElementById('rippleTransition');
        let rippleTransitionRingDiv = document.getElementById('rippleTransitionRing');

        console.log(`${(Math.max(0, clickedTabEleXCoord) + (parseFloat(clickedTabEleWidth.slice(0, -2))/2))}px`);

        rippleTransitionDiv.style.left = `${(Math.max(0, clickedTabEleXCoord) + (parseFloat(clickedTabEleWidth.slice(0, -2))/2))}px`;
        rippleTransitionDiv.style.width = '9000px';
        rippleTransitionDiv.style.height = '4500px';
        rippleTransitionDiv.style.background = `radial-gradient(circle at 50% 100%,${transitionColor} 20%, rgba(162, 212, 240, 0) 70%)`

        rippleTransitionRingDiv.style.left = `${(Math.max(0, clickedTabEleXCoord) + (parseFloat(clickedTabEleWidth.slice(0, -2))/2))}px`;
        rippleTransitionRingDiv.style.width = '9000px';
        rippleTransitionRingDiv.style.height = '4500px';
        rippleTransitionRingDiv.style.background = `radial-gradient(circle at 50% 100%, rgba(162, 212, 240, 0) 65%, ${transitionColor} 70%)`

        rippleTransitionDiv.addEventListener('transitionend', () => {
            setTColor(transitionColor);
            router.push(clickedTabEle.getAttribute('page-route'));
        })
    }

    if (tColor) {
        fadeColor = tColor;
    } 
    */

    return (
        <div>
            <div className={styles.backgroundContainer}>
                <div className={styles.sky}>
                    <div className={styles.skyFilter}>

                    </div>
                </div>
                <div className={styles.lake}>
                    <div className={styles.folliage}>

                    </div>
                    <div className={styles.lakeFilter}/>
                    <div className={styles.lakeMoonReflection}/>
                </div>
                <div className={styles.mountainsContainer}>
                    <div className={styles.leftMountain}>
                        <div className={styles.leftMountainSnow}></div>
                    </div>
                    <div className={styles.rightMountain}>
                        <div className={styles.rightMountainSnow}></div>
                    </div>
                </div>
                <div className={styles.sunMoonContainer}>
                    <div className={styles.sun}/>
                    <Image className={styles.moon} src="/images/background/moon.png" alt="moon" height={200} width={200}/>
                </div>
            </div>
            <MainHeader></MainHeader>
            <div className={styles.scrollContainer}>
                <div className={styles.contentMask}>
                    <div className={styles.contentContainer}>
                        { children }
                    </div>
                </div>
            </div>
        </div>
    );
}