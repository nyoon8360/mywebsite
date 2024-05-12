import styles from './headerTab.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

import raindrop from '../public/svgs/rain-drop.svg';

const cloudCirclesTransformList = [
    "translate(-40px, -2px)",
    "translate(40px, -2px)",
    "translate(-12px, -14px)",
    "translate(16px, -16px)",
    "translate(-12px, 10px)",
    "translate(14px, 8px)"
]

export default function headerTab({tabState, underlineColor, destinationPath, onClickEvent, children}) {
    //throw error if component has child that is not just inner text
    if (typeof children != 'string') throw new Error('Children must only be inner text.');

    const router = useRouter();

    function mouseClickEvent() {
        router.push(destinationPath);
    }

    return (
        <div className={styles.mainContainer} onMouseEnter={tabMouseEnterEvent} onMouseLeave={tabMouseLeaveEvent} onClick={mouseClickEvent}>
            <div 
                style={{textDecorationColor: underlineColor}}
                page-route={destinationPath} 
                className={styles.tab} 
                onClick={onClickEvent}>
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
            <Image className={styles.rainDrop} src={raindrop} height={30} width={30} alt='raindrop' />
        </div>
    )
}

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