import styles from './headerTab.module.css';

export default function headerTab({tabId, underlineColor, destinationPath, currentPath, onClickEvent, children}) {
    //throw error if component has child that is not just inner text
    if (typeof children != 'string') throw new Error('Children must only be inner text.');

    //tab style definition of a tab that is active as the current page
    let tabStyle = {
        backgroundColor: '#393939',
        cursor: 'default',
        textDecorationColor: underlineColor
    }
    
    return (
        <div id={tabId} style={currentPath == destinationPath ? tabStyle : {textDecorationColor: underlineColor}}
         page-route={destinationPath} className={styles.tab} onClick={currentPath == destinationPath ? null : () => onClickEvent(tabId)}>{children}
         </div>
    )
}
