import styles from './collapsible.module.css';
import Image from 'next/image';

export default function Collapsible({ title, children }) {
    return (
        <div className={styles.collapsibleContainer}>
            <button className={styles.collapsible} onClick={toggleCollapsible}>
                <div className={styles.spaceHolder}></div>
                <p className={styles.buttonTitle}>{title}</p>
                <Image className={styles.collapsibleSvg} src='/svgs/down-arrow.svg' height={50} width={50} alt='arrow'/>
            </button>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

function toggleCollapsible(event) {
    let collapsibleElement = event.target;
    let contentContainer = collapsibleElement.nextElementSibling;
    
    //collapsibleElement.classList.toggle('.activeCollapsible');

    collapsibleElement.children[2].src = collapsibleElement.children[2].getAttribute('src') == '/svgs/down-arrow.svg' ? '/svgs/up-arrow.svg' : '/svgs/down-arrow.svg';

    if (contentContainer.style.maxHeight) {
        contentContainer.style.maxHeight = null;
    } else {
        contentContainer.style.maxHeight = contentContainer.scrollHeight + 'px';
    }
}