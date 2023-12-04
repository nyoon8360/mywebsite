import styles from './headerTab.module.css';

export default function headerTab({tabState, underlineColor, destinationPath, onClickEvent, children}) {
    //throw error if component has child that is not just inner text
    if (typeof children != 'string') throw new Error('Children must only be inner text.');

    let backgroundSvgUri = `url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 585'%3E%3Cpath fill='%23${underlineColor.substring(1)}' fill-opacity='1' d='M 0 32 L 24 48 C 48 64 96 96 144 138.7 C 192 181 240 235 288 229.3 C 336 224 384 160 432 160 C 480 160 528 224 576 218.7 C 624 213 672 139 720 90.7 C 768 43 816 21 864 42.7 C 912 64 960 128 1008 165.3 C 1056 203 1104 213 1152 192 C 1200 171 1248 117 1296 85.3 C 1344 53 1392 43 1416 37.3 L 1440 32 L 1440 585 L 1416 585 C 1392 585 1344 585 1296 585 C 1248 585 1200 585 1152 585 C 1104 585 1056 585 1008 585 C 960 585 912 585 864 585 C 816 585 768 585 720 585 C 672 585 624 585 576 585 C 528 585 480 585 432 585 C 384 585 336 585 288 585 C 240 585 192 585 144 585 C 48.9 585 158.9 585 24 585 L 0 585 L 0 32 Z'%3E%3C/path%3E%3C/svg%3E")`;

    //depending on tabState parameter, return corresponding tab element
    switch (tabState) {
        //tab that is selected as the current page
        case 'selected':
            return (
                <div className={styles.mainContainer}>
                    <div 
                        style={{textDecorationColor: underlineColor, backgroundColor: '#A2D4F0', cursor: 'default'}}
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
    event.target.previousSibling.style.top = '0px';
}

function tabMouseLeaveEvent(event) {
    event.target.previousSibling.style.top = '30px';
}