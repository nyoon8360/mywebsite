import styles from './headerTab.module.css';
import Image from 'next/image';

export default function headerTab({tabId, underlineColor, destinationPath, currentPath, onClickEvent, waveSvgUrl, children}) {
    //throw error if component has child that is not just inner text
    if (typeof children != 'string') throw new Error('Children must only be inner text.');

    //tab style definition of a tab that is active as the current page
    let tabStyle = {
        backgroundColor: '#78bfe8',
        cursor: 'default',
        textDecorationColor: underlineColor
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.wave} style={{backgroundImage: `url('${waveSvgUrl}')`}}></div>
            <div 
                id={tabId} 
                style={currentPath == destinationPath ? tabStyle : {textDecorationColor: underlineColor}}
                page-route={destinationPath} 
                className={styles.tab} 
                onClick={currentPath == destinationPath ? null : onClickEvent}
                onMouseEnter={tabMouseEnterEvent}
                onMouseLeave={tabMouseLeaveEvent}>
                {children}
            </div>
        </div>
    )
}

function tabMouseEnterEvent(event) {
    event.target.previousSibling.style.top = '0px';
}

function tabMouseLeaveEvent(event) {
    event.target.previousSibling.style.top = '30px';
}