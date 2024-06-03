import styles from './headerTab.module.css';
import Image from 'next/image';

import raindrop from '../public/svgs/rain-drop.svg';
import { useTransitionContext } from '../context/transition';
import { useState } from 'react';

const cloudCirclesTransformList = [
    "translate(-40px, -2px)",
    "translate(40px, -2px)",
    "translate(-12px, -14px)",
    "translate(16px, -16px)",
    "translate(-12px, 10px)",
    "translate(14px, 8px)"
];

function tabMouseEnterEvent(event) {
    let cloudCirclesCollection = event.target.children[1].children;

    event.target.children[1].style.opacity = '1';

    for (let i = 0; i < cloudCirclesCollection.length; i++) {
        cloudCirclesCollection.item(i).style.transform = cloudCirclesTransformList[i];
    }
}

function tabMouseLeaveEvent(event) {
    let cloudCirclesCollection = event.target.children[1].children;

    event.target.children[1].style.opacity = null;

    for (let i = 0; i < cloudCirclesCollection.length; i++) {

        cloudCirclesCollection.item(i).style.transform = null;
    }
}

export default function headerTab({destinationPath, expandCircleFunction, disabled, children}) {
    //throw error if component has child that is not just inner text
    if (typeof children != 'string') throw new Error('Children must only be inner text.');

    const [transition, setTransition] = useTransitionContext();
    const [isTabClicked, setIsTabClicked] = useState(false);

    function handleTabClicked(event) {
        let currentTarget = event.currentTarget;

        currentTarget.children[2].style.top = '100vh';
        currentTarget.children[2].style.visibility = 'visible';

        setIsTabClicked(true);
        setTransition({
            xLocation: currentTarget.offsetLeft + (parseInt(getComputedStyle(currentTarget).width)/2),
            yLocation: currentTarget.offsetTop + 15,
            runBefore: transition.runBefore
        });
    }

    function handleRaindropTransitionEnd(event) {
        //ensure function only fires for 'top' property transition
        if (event.propertyName != 'top') return;

        expandCircleFunction(destinationPath);
    }

    if (!isTabClicked) {
        return (
            <div className={styles.mainContainer} onMouseEnter={disabled ? null : tabMouseEnterEvent} onMouseLeave={disabled ? null :tabMouseLeaveEvent} onClick={disabled ? null : handleTabClicked} style={disabled ? {cursor: 'default'} : null}>
                <div className={styles.tab}>
                    {children}
                </div>
                <div className={styles.cloudContainer}>
                    <div className={`${styles.cloudCircle} ${styles.cloudCirclePath1}`}/>
                    <div className={`${styles.cloudCircle} ${styles.cloudCirclePath2}`}/>
                    <div className={`${styles.cloudCircle} ${styles.cloudCirclePath3}`}/>
                    <div className={`${styles.cloudCircle} ${styles.cloudCirclePath4}`}/>
                    <div className={`${styles.cloudCircle} ${styles.cloudCirclePath5}`}/>
                    <div className={`${styles.cloudCircle} ${styles.cloudCirclePath6}`}/>
                </div>
                <Image className={styles.rainDrop} src={raindrop} height={30} width={30} alt='raindrop' onTransitionEnd={handleRaindropTransitionEnd}/>
            </div>
        )
    } else {
        return (
            <div className={styles.mainContainer} style={{cursor: 'default'}}>
                <div className={styles.tab}>
                    {children}
                </div>
                <div className={styles.cloudContainer}>
                    <div className={`${styles.cloudCircle}`} style={{transform: "translate(-40px, -2px)", opacity: "1"}}/>
                    <div className={`${styles.cloudCircle}`} style={{transform: "translate(40px, -2px)", opacity: "1"}}/>
                    <div className={`${styles.cloudCircle}`} style={{transform: "translate(-12px, -14px)", opacity: "1"}}/>
                    <div className={`${styles.cloudCircle}`} style={{transform: "translate(16px, -16px)", opacity: "1"}}/>
                    <div className={`${styles.cloudCircle}`} style={{transform: "translate(-12px, 10px)", opacity: "1"}}/>
                    <div className={`${styles.cloudCircle}`} style={{transform: "translate(14px, 8px)", opacity: "1"}}/>
                </div>
                <Image className={styles.rainDrop} src={raindrop} height={30} width={30} alt='raindrop' onTransitionEnd={handleRaindropTransitionEnd}/>
            </div>
        )
    }
    
}