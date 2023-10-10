import MainHeader from '../components/mainHeader';
import styles from './layout.module.css';
import { useRouter } from 'next/router';
import { useTransitionContext } from '../context/transition';

var blockFadeIn = false;
var fadeColor = 'transparent';
var transitionContainerZ = -2;
var fadePlaying = false;
var transitionContainerOnAnimEnd;

//layout component to contain the header, transition animation div, and page content
export default function Layout({ children }) {
    const router = useRouter();
    const [tColor, setTColor] = useTransitionContext();

    //function creating and playing expanding circle transition animation
    function transition(clickedTabEle, transitionColor) {
        //get styles and coords from passed tab element
        let tabXcoord = clickedTabEle.getBoundingClientRect().left;
        let tabComputedStyle = getComputedStyle(clickedTabEle);

        blockFadeIn = true;
    
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
        //let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        ctx.fillStyle = transitionColor;
        setTColor(transitionColor);
        ctx.fill();
    
        //add styles to canvas then append to and display transition container
        canvas.className = styles.circle;
    
        transitionContainer.appendChild(canvas);
    
        transitionContainer.style.zIndex = 2;

        //reset transition container's animation fill mode and background color
        transitionContainer.style.animationFillMode = 'none';
        transitionContainer.style.backgroundColor = 'transparent';
    
        //navigate to clicked tab's page after transition animation completes
        canvas.addEventListener('animationend', () => {
            router.push(clickedTabEle.getAttribute('page-route'));
            blockFadeIn = false;
        });
    }

    //if navigated to current page through transition animation, play fade in animation using color of clicked tab
    if (tColor && !blockFadeIn) {
        fadeColor = tColor;
        transitionContainerZ = 2;
        fadePlaying = true;

        //on fade-in animation end, push transition container behind page's content
        transitionContainerOnAnimEnd = (event) => {
            if (event.animationName == styles.fadeIn) {
                document.getElementById('transitionContainer').style.zIndex = -2;
            }
        }
    }

    return (
        <div>
            <div className={styles.overlayContainer}>
                <MainHeader transitionFunction={transition}></MainHeader>
                <div className={styles.transitionContainer} onAnimationEnd={transitionContainerOnAnimEnd} id='transitionContainer' style={{backgroundColor: fadeColor, animationPlayState: fadePlaying ? 'running' : 'paused', zIndex: transitionContainerZ}}>
                </div>
            </div>
            <div className={styles.contentContainer}>
                {children}
            </div>
        </div>
    );
}