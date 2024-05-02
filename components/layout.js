import MainHeader from '../components/mainHeader';
import styles from './layout.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTransitionContext } from '../context/transition';
import { useEffect } from 'react';

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
    const petalRotations = [
        'translate(-95%, 5px) rotate(70deg)',
        'translate(-105%, 5px) rotate(110deg)',
        'translate(-95%, 5px) rotate(50deg)',
        'translate(-105%, 5px) rotate(130deg)',
        'translate(-95%, 5px) rotate(30deg)',
        'translate(-105%, 5px) rotate(150deg)'
    ];
    var backgroundAnimationDuration = 0;

    //change background time to sunrise
    function handleSunriseButtonClicked() {
        let animatedTimeElementCollection = document.getElementsByClassName(styles.animatedTimeElement);

        let newDelay = Math.floor((-2/3) * backgroundAnimationDuration);

        document.documentElement.style.setProperty('--background-animation-delay', `${newDelay}s`);

        for (let i = 0; i < animatedTimeElementCollection.length; i++) {
            animatedTimeElementCollection.item(i).style.animation = 'none';
            animatedTimeElementCollection.item(i).offsetHeight;
            animatedTimeElementCollection.item(i).style.animation = null;
        }
    }

    //change background time to moonrise
    function handleMoonriseButtonClicked() {
        let animatedTimeElementCollection = document.getElementsByClassName(styles.animatedTimeElement);

        let newDelay = Math.floor(-0.21 * backgroundAnimationDuration);

        document.documentElement.style.setProperty('--background-animation-delay', `${newDelay}s`);

        for (let i = 0; i < animatedTimeElementCollection.length; i++) {
            animatedTimeElementCollection.item(i).style.animation = 'none';
            animatedTimeElementCollection.item(i).offsetHeight;
            animatedTimeElementCollection.item(i).style.animation = null;
        }
    }

    function handleMinimizeButtonClicked() {
        let contentContainerElementStyle = document.getElementById('contentContainer').style;
        document.getElementById('scrollContainer').style.pointerEvents = 'none';

        contentContainerElementStyle.transition = 'all 1s cubic-bezier(.25,-0.08,.87,.43)';
        contentContainerElementStyle.minHeight = '0px';
        contentContainerElementStyle.height = '0px';
        contentContainerElementStyle.marginTop = '95vh';
        contentContainerElementStyle.marginBottom = '0';
        contentContainerElementStyle.padding = '0 40px 0 40px';

        setTimeout(() => {
            contentContainerElementStyle.transition = null;
            showMaximizeButton();
        }, 1000);
    }

    function showMaximizeButton() {
        let maxButton = document.getElementById('maxButtonContainer');
        let petalElements = document.getElementById('petalContainer').children;
        
        maxButton.style.opacity = 1;
        maxButton.style.transform = 'translate(-50%, -50%)';
        maxButton.style.pointerEvents = 'all';
        for (let i = 0; i < petalElements.length; i++) {

            petalElements.item(i).style.transform = petalRotations[i];
        }
    }

    function handleMaximizeButtonClicked() {
        let contentContainerElementStyle = document.getElementById('contentContainer').style;
        document.getElementById('scrollContainer').style.pointerEvents = null;

        contentContainerElementStyle.transition = 'all 1s cubic-bezier(.11,.83,.58,.98)';
        contentContainerElementStyle.minHeight = null;
        contentContainerElementStyle.height = null;
        contentContainerElementStyle.marginTop = null;
        contentContainerElementStyle.marginBottom = null;
        contentContainerElementStyle.padding = null;

        hideMaximizeButton();
        setTimeout(() => {
            contentContainerElementStyle.transition = null;
        }, 1000);
    }

    function hideMaximizeButton() {
        let maxButton = document.getElementById('maxButtonContainer');
        let petalElements = document.getElementById('petalContainer').children;

        maxButton.removeAttribute('style');
        for (let i = 0; i < petalElements.length; i++) {

            petalElements.item(i).removeAttribute('style');
        }
    }
    
    //get --background-animation-delay and --background-animation-duration css var
    useEffect(() => {
        backgroundAnimationDuration = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--background-animation-duration').slice(0, -1));
    });

    return (
        <div>
            <div className={styles.backgroundContainer}>
                <div className={`${styles.sky} ${styles.animatedTimeElement}`}>
                    <div className={`${styles.skyFilter} ${styles.animatedTimeElement}`}>

                    </div>
                </div>
                <div className={`${styles.lake} ${styles.animatedTimeElement}`}>
                    <div className={`${styles.lakeFilter} ${styles.animatedTimeElement}`}/>
                    <div className={`${styles.lakeMoonReflection} ${styles.animatedTimeElement}`}/>
                    <div id='maxButtonContainer' className={styles.maximizeButtonContainer} onClick={handleMaximizeButtonClicked}>
                        <div className={styles.lilypad}>
                            
                        </div>
                        <div className={`${styles.lotusPetal} ${styles.lotusPetalMiddle}`}/>
                        <div id='petalContainer'>
                            <div className={`${styles.lotusPetal} ${styles.lotusPetalLeft1}`}/>
                            <div className={`${styles.lotusPetal} ${styles.lotusPetalRight1}`}/>
                            <div className={`${styles.lotusPetal} ${styles.lotusPetalLeft2}`}/>
                            <div className={`${styles.lotusPetal} ${styles.lotusPetalRight2}`}/>
                            <div className={`${styles.lotusPetal} ${styles.lotusPetalLeft3}`}/>
                            <div className={`${styles.lotusPetal} ${styles.lotusPetalRight3}`}/>
                        </div>
                    </div>

                    <div className={styles.folliage}>

                    </div>
                    
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
                    <div className={`${styles.sun} ${styles.animatedTimeElement}`}/>
                    <Image className={`${styles.moon} ${styles.animatedTimeElement}`} src="/images/background/moon.png" alt="moon" height={200} width={200}/>
                </div>
            </div>
            <MainHeader></MainHeader>
            <div id='scrollContainer' className={styles.scrollContainer}>
                <div className={styles.contentMask}>
                    <div id='contentContainer' className={styles.contentContainer}>
                        <div className={styles.contentOverflowContainer}>
                            <div className={styles.controlsContainer}>
                                <div className={styles.controlButtons} onClick={handleSunriseButtonClicked}>
                                    <Image className={styles.buttonImage} src="/images/buttons/SunRiseButton.jpg" alt="sunrise button" height={200} width={200}/>
                                </div>
                                <div className={styles.controlButtons} onClick={handleMinimizeButtonClicked}>
                                    <Image className={styles.buttonImage} src="/images/buttons/MinimizeButton.jpg" alt="minimize button" height={200} width={200}/>
                                </div>
                                <div className={styles.controlButtons} onClick={handleMoonriseButtonClicked}>
                                    <Image className={styles.buttonImage} src="/images/buttons/MoonRiseButton.jpg" alt="moonrise button" height={200} width={200}/>
                                </div>
                            </div>
                            { children }
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}