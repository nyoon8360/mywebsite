import styles from './headerTab.module.css';

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

    return (
        <div className={styles.mainContainer} onMouseEnter={tabMouseEnterEvent} onMouseLeave={tabMouseLeaveEvent}>
            <div 
                style={{textDecorationColor: underlineColor}}
                page-route={destinationPath} 
                className={styles.tab} 
                onClick={onClickEvent}>
                {children}
            </div>
            <div className={styles.cloudContainer} onMouseLeave={tabMouseLeaveEvent}>
                <div className={`${styles.cloudCircle} ${styles.cloudCirclePath1}`}/>
                <div className={`${styles.cloudCircle} ${styles.cloudCirclePath2}`}/>
                <div className={`${styles.cloudCircle} ${styles.cloudCirclePath3}`}/>
                <div className={`${styles.cloudCircle} ${styles.cloudCirclePath4}`}/>
                <div className={`${styles.cloudCircle} ${styles.cloudCirclePath5}`}/>
                <div className={`${styles.cloudCircle} ${styles.cloudCirclePath6}`}/>
            </div>
        </div>
    )

    //depending on tabState parameter, return corresponding tab element
    switch (tabState) {
        //tab that is selected as the current page
        case 'selected':
            return (
                <div className={styles.mainContainer}>
                    <div 
                        style={{textDecorationColor: underlineColor, backgroundColor: '#101010', cursor: 'default'}}
                        className={styles.tab}>
                        {children}
                    </div>
                </div>
            )

        //normal clickable tab element
        case 'normal':
            return (
                <div className={styles.mainContainer}>
                    <div className={styles.wave} style={{backgroundImage: backgroundSvgUri}}></div>
                    <div 
                        style={{textDecorationColor: underlineColor}}
                        page-route={destinationPath} 
                        className={styles.tab} 
                        onClick={onClickEvent}
                        onMouseEnter={tabMouseEnterEvent}
                        onMouseLeave={tabMouseLeaveEvent}>
                        {children}
                    </div>
                </div>
            )
        
        //disabled tab with normal styling but can not be clicked or interacted with
        case 'disabled':
            return (
                <div className={styles.mainContainer}>
                    <div 
                        style={{textDecorationColor: underlineColor, cursor: 'default'}}
                        page-route={destinationPath} 
                        className={styles.tab}>
                        {children}
                    </div>
                </div>
            )
    }
}

function tabMouseEnterEvent(event) {
    //console.log(event.target.children[1].children);
    let cloudCirclesCollection = event.target.children[1].children;

    for (let i = 0; i < cloudCirclesCollection.length; i++) {

        cloudCirclesCollection.item(i).style.transform = cloudCirclesTransformList[i];
        cloudCirclesCollection.item(i).style.opacity = '1';
    }
}

function tabMouseLeaveEvent(event) {
    let cloudCirclesCollection = event.target.children[1].children;

    for (let i = 0; i < cloudCirclesCollection.length; i++) {

        cloudCirclesCollection.item(i).style.transform = null;
        cloudCirclesCollection.item(i).style.opacity = '0';
    }
}