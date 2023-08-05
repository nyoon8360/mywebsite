import MainHeader from '../components/mainHeader';
import styles from './layout.module.css';

//layout component to contain the header, transition animation div, and page content
export default function Layout({ children }) {

    return (
        <div>
            <div className={styles.mainContainer}>
                <MainHeader transitionFunction={transition}></MainHeader>
                <div className={styles.transitionContainer} id='transitionContainer'>
                </div>
            </div>
            <div className={styles.contentContainer}>
                {children}
            </div>
        </div>
    );
}

//function creating and playing transition animation
function transition(clickedTabEle) {
    //get styles and coords from passed tab element
    let tabXcoord = clickedTabEle.getBoundingClientRect().left;
    let tabComputedStyle = getComputedStyle(clickedTabEle);

    //get transition container
    let transitionContainer = document.getElementById('transitionContainer');

    //create canvas with initial width + height
    let canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1000;

    //center the expansion point to center of the circle then move canvas to the bottom of the page and below clicked tab
    canvas.style.transform = `translate(-50%, -50%) translateY(100vh) translateX(${(Math.max(0, tabXcoord) + (parseFloat(tabComputedStyle.width.slice(0, -2))/2))}px)`;

    //draw circle
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(500, 500, 500, 0, 2 * Math.PI);
    ctx.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);
    ctx.fill();

    //add styles to canvas then append to and display transition container
    canvas.className = styles.circle;

    transitionContainer.appendChild(canvas);

    transitionContainer.style.zIndex = 2;

    /*
    let tabXcoord = clickedTabEle.getBoundingClientRect().left;
    let tabComputedStyle = getComputedStyle(clickedTabEle);

    let transitionContainer = document.getElementById('transitionContainer');

    let circle = document.createElement('div');
    circle.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);

    circle.style.left = (Math.max(0, tabXcoord) + (parseFloat(tabComputedStyle.width.slice(0, -2))/2)) + "px";

    circle.className = styles.divCircle;

    transitionContainer.appendChild(circle);
    transitionContainer.style.zIndex = 2;
    */
}