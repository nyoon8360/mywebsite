import MainHeader from '../components/mainHeader';
import styles from './layout.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTransitionXContext } from '../context/transitionX';
import { useTransitionYContext } from '../context/transitionY';
import { useEffect } from 'react';

var shrinkingCircleRadius;

//layout component to contain the header, transition animation div, and page content
export default function Layout({ children }) {

    const petalRotations = [
        'translate(-95%, 5px) rotate(70deg)',
        'translate(-105%, 5px) rotate(110deg)',
        'translate(-95%, 5px) rotate(50deg)',
        'translate(-105%, 5px) rotate(130deg)',
        'translate(-95%, 5px) rotate(30deg)',
        'translate(-105%, 5px) rotate(150deg)'
    ];
    const router = useRouter();
    const baseRippleSize = 2;
    const maxRippleSize = 50;
    const randomRippleInterval = 5000;
    var backgroundAnimationDuration = 0;

    const [transitionX, setTransitionX] = useTransitionXContext();
    const [transitionY, setTransitionY] = useTransitionYContext();
    
    //==============================
    //TRANSITION ANIMATION FUNCTIONS
    //==============================
    function expandCircle(destinationPath) {
        let expandingCircleElement = document.getElementById('expandingCircle');
        let expandingCircleRadius = Math.max(screen.width, screen.height) * 2;

        expandingCircleElement.style.top = '100vh';
        expandingCircleElement.style.left = `${transitionX}px`;
        expandingCircleElement.style.height = `${expandingCircleRadius}px`;
        expandingCircleElement.style.width = `${expandingCircleRadius}px`;

        setTimeout(() => {
            router.push(destinationPath);
        }, 800);
    }

    //==============
    //EVENT HANDLERS
    //==============

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

    //hide all main page content and show maximize button
    function handleMinimizeButtonClicked() {
        document.getElementById('contentMask').style.pointerEvents = 'none';
        document.getElementById('bottomContentBlocker').style.pointerEvents = 'none';

        let contentContainerElementStyle = document.getElementById('contentContainer').style;

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

    //show all main page content and hide maximize button
    function handleMaximizeButtonClicked() {
        document.getElementById('contentMask').style.pointerEvents = null;
        document.getElementById('bottomContentBlocker').style.pointerEvents = null;

        let contentContainerElementStyle = document.getElementById('contentContainer').style;

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

    //play little ripple effect on lake click
    function handleLakeMouseDown(event) {
        let ripplesContainerElement = document.getElementById('ripplesContainer');

        let lakeHeight = parseInt(getComputedStyle(event.currentTarget).height);
        let yOffset = event.clientY - lakeHeight;
        let ratio = yOffset / lakeHeight;

        let rippleBox = document.createElement('div');
        rippleBox.className = styles.rippleBox;
        rippleBox.style.left = `${event.clientX}px`;
        rippleBox.style.top = `${yOffset}px`;

        let ripple = document.createElement('div');
        ripple.className = styles.ripple;
        ripple.style.width = `${Math.floor((ratio * (maxRippleSize - baseRippleSize)) + baseRippleSize)}px`;
        ripple.style.height = `${Math.floor(((ratio * (maxRippleSize - baseRippleSize)) + baseRippleSize) * 0.8)}px`;

        ripple.addEventListener('animationend', (event) => {
            event.target.parentElement.remove();
        });

        rippleBox.appendChild(ripple);

        ripplesContainerElement.appendChild(rippleBox);
    }

    //play ripple effect even while content mask is clickable in front of lake
    function handleObstructionMouseDown(event) {
        let lakeElement = document.getElementById('lake');
        let lakeHeight = parseInt(getComputedStyle(lakeElement).height);

        //if click is out of bounds of lake then return
        if (event.clientY < lakeHeight) {
            return;
        }

        handleLakeMouseDown({currentTarget: lakeElement, clientX: event.clientX, clientY: event.clientY});
    }

    //give firefly wings a new random horizontal path
    function handleFireflyWingsTransitionEnd(event) {
        let fireflyWingsElement = event.currentTarget;

        let randomDuration = parseInt(Math.random()*5) + 7;

        //generate random amount of units to move
        let randomMovementAmount = (Math.round(Math.random()*20) + 10) * (Math.random() > .5 ? -1 : 1);
        
        //constrain firefly's new location to < 95vw and > 5vw
        let newLocation = parseInt(fireflyWingsElement.style.left) + randomMovementAmount;
        if (newLocation > 95 || newLocation < 5) {
            newLocation = parseInt(fireflyWingsElement.style.left) + (randomMovementAmount * -1);
        }

        fireflyWingsElement.style.left = `${newLocation}vw`;
        fireflyWingsElement.style.transitionDuration = `${randomDuration}s`;
    }

    //give firefly a new random vertical path
    function handleFireflyTransitionEnd(event) {
        let fireflyElement = event.currentTarget;

        let randomDuration = parseInt(Math.random()*5) + 7;

        //generate random amount of units to move
        let randomMovementAmount = (Math.round(Math.random()*20) + 10) * (Math.random() > 0.5 ? -1 : 1);
        
        //constrain firefly's new location to < 95vh and > 5vh
        let newLocation = parseInt(fireflyElement.style.top) + randomMovementAmount;
        if (newLocation > 95 || newLocation < 5) {
            newLocation = parseInt(fireflyElement.style.top) + (randomMovementAmount * -1);
        }

        fireflyElement.style.top = `${newLocation}vh`;
        fireflyElement.style.transitionDuration = `${randomDuration}s`;
    }

    //===============
    //OTHER FUNCTIONS
    //===============

    //play appearing animation for maximize button
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

    //play hiding animation for maximize button
    function hideMaximizeButton() {
        let maxButton = document.getElementById('maxButtonContainer');
        let petalElements = document.getElementById('petalContainer').children;

        maxButton.removeAttribute('style');
        for (let i = 0; i < petalElements.length; i++) {

            petalElements.item(i).removeAttribute('style');
        }
    }

    function stopEventProp(event) {
        event.stopPropagation();
    }
    
    //=====
    //HOOKS
    //=====

    //set vars that can not be set before mount
    useEffect(() => {
        backgroundAnimationDuration = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--background-animation-duration').slice(0, -1));
        if (transitionX != 0) {
            let shrinkingCircleElement = document.getElementById('shrinkingCircle');
            shrinkingCircleElement.style.width = null;
            shrinkingCircleElement.style.height = null;
        }

        shrinkingCircleRadius = Math.max(screen.width, screen.height) * 2;

        //set interval for random ripples on lake
        const interval = setInterval(() => {
            let lakeElement = document.getElementById('lake');
            let lakeHeight = parseInt(getComputedStyle(lakeElement).height);
            let lakeWidth = parseInt(getComputedStyle(lakeElement).width);

            let randX = Math.floor(lakeWidth * Math.random());
            let randY = Math.floor(lakeHeight * Math.random()) + lakeHeight;

            handleLakeMouseDown({currentTarget: lakeElement, clientX: randX, clientY: randY});
        }, randomRippleInterval);

        //initiate random paths for fireflies and random blink delay
        let fireflies = document.getElementById('fireflyContainer').children;

        for (let i = 0; i < fireflies.length; i++) {
            handleFireflyWingsTransitionEnd({currentTarget: fireflies[i]});
            handleFireflyTransitionEnd({currentTarget: fireflies[i].children[0]});

            fireflies[i].children[0].style.animationDelay = `-${Math.round(Math.random()*40)/10}s`;
        }

        return () => {
            clearInterval(interval);
        };
    });

    return (
        <div>
            <div className={styles.backgroundContainer}>
                <div className={`${styles.sky} ${styles.animatedTimeElement}`}>
                    <div className={`${styles.skyFilter} ${styles.animatedTimeElement}`}>

                    </div>
                </div>
                <div id='lake' className={`${styles.lake} ${styles.animatedTimeElement}`} onMouseDown={handleLakeMouseDown}>
                    <div className={`${styles.lakeFilter} ${styles.animatedTimeElement}`}/>
                    <div className={`${styles.lakeMoonReflection} ${styles.animatedTimeElement}`}/>
                    <div id='ripplesContainer' className={styles.ripplesContainer}>
                        
                    </div>
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

                    <div className={styles.foliage}>
                        <div className={`${styles.baseGrassBlade} ${styles.grassBladeLeftBend}`} style={{left: '17vh', bottom: '-10vh', animationDelay: '-9s', backgroundColor: 'rgb(0, 172, 0)', zIndex: '1'}}/>
                        <div className={`${styles.baseGrassBlade} ${styles.grassBladeLeftBend}`} style={{left: '13.5vh', bottom: '-7vh', animationDelay: '-4s', backgroundColor: 'rgb(0, 134, 0)', zIndex: '1'}}/>
                        <div className={`${styles.baseGrassBlade} ${styles.grassBladeLeftBend}`} style={{left: '10vh', bottom: '-5vh', animationDelay: '-7s', backgroundColor: 'rgb(0, 95, 0)', zIndex: '2'}}/>
                        <div className={`${styles.baseGrassBlade} ${styles.grassBladeLeftBend}`} style={{left: '6.7vh',bottom: '-3vh', backgroundColor: 'rgb(1, 73, 1)', zIndex: '3'}}/>
                        <div className={`${styles.baseGrassBlade} ${styles.grassBladeRightBend}`} style={{left: '8.5vh',bottom: '-6vh', animationDelay: '-5s', backgroundColor: 'rgb(0, 95, 0)', zIndex: '2'}}/>
                        <div className={`${styles.baseGrassBlade} ${styles.grassBladeRightBend}`} style={{left: '5vh',bottom: '-8vh', animationDelay: '-2s', backgroundColor: 'rgb(0, 134, 0)', zIndex: '1'}}/>
                    </div>

                    <div className={styles.shoreContainer}>
                        <div className={styles.shoreLeft}>

                        </div>
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
                <div id='fireflyContainer' className={`${styles.fireflyContainer} ${styles.animatedTimeElement}`}>

                    <div className={styles.fireflyWings} style={{left: '10vw'}} onTransitionEnd={handleFireflyWingsTransitionEnd}>
                        <div className={`${styles.baseFirefly} ${styles.fireflySmall}`} style={{top: '10vh'}} onTransitionEnd={handleFireflyTransitionEnd}></div>
                    </div>

                    <div className={styles.fireflyWings} style={{left: '40vw'}} onTransitionEnd={handleFireflyWingsTransitionEnd}>
                        <div className={`${styles.baseFirefly} ${styles.fireflySmall}`} style={{top: '40vh'}} onTransitionEnd={handleFireflyTransitionEnd}></div>
                    </div>

                    <div className={styles.fireflyWings} style={{left: '50vw'}} onTransitionEnd={handleFireflyWingsTransitionEnd}>
                        <div className={`${styles.baseFirefly} ${styles.fireflySmall}`} style={{top: '50vh'}} onTransitionEnd={handleFireflyTransitionEnd}></div>
                    </div>

                    <div className={styles.fireflyWings} style={{left: '10vw'}} onTransitionEnd={handleFireflyWingsTransitionEnd}>
                        <div className={`${styles.baseFirefly} ${styles.fireflyMedium}`} style={{top: '70vh'}} onTransitionEnd={handleFireflyTransitionEnd}></div>
                    </div>

                    <div className={styles.fireflyWings} style={{left: '80vw'}} onTransitionEnd={handleFireflyWingsTransitionEnd}>
                        <div className={`${styles.baseFirefly} ${styles.fireflyMedium}`} style={{top: '30vh'}} onTransitionEnd={handleFireflyTransitionEnd}></div>
                    </div>

                    <div className={styles.fireflyWings} style={{left: '60vw'}} onTransitionEnd={handleFireflyWingsTransitionEnd}>
                        <div className={`${styles.baseFirefly} ${styles.fireflyMedium}`} style={{top: '20vh'}} onTransitionEnd={handleFireflyTransitionEnd}></div>
                    </div>

                    <div className={styles.fireflyWings} style={{left: '70vw'}} onTransitionEnd={handleFireflyWingsTransitionEnd}>
                        <div className={`${styles.baseFirefly} ${styles.fireflyMedium}`} style={{top: '90vh'}} onTransitionEnd={handleFireflyTransitionEnd}></div>
                    </div>
                    
                </div>
            </div>
            <MainHeader expandCircleFunction={expandCircle}></MainHeader>
            <div id='contentMask' className={styles.contentMask} onMouseDown={handleObstructionMouseDown}>
                <div id='contentContainer' className={styles.contentContainer} onMouseDown={stopEventProp}>
                    <div id='bottomContentBlocker' className={styles.bottomContentBlocker} onMouseDown={handleObstructionMouseDown}></div>
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
            <div id='transitionContainer' className={styles.transitionContainer}>
                <div id='shrinkingCircle' className={styles.shrinkingCircle} style={{left: transitionX, top: transitionY, height: shrinkingCircleRadius, width: shrinkingCircleRadius, visibility: transitionX == 0 ? 'hidden' : 'visible'}}></div>
                <div id='expandingCircle' className={styles.expandingCircle}></div>
            </div>
        </div>
    );
}