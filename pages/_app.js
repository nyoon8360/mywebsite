import '../styles/global.css'
import { TransitionXProvider } from '../context/transitionX';
import { TransitionYProvider } from '../context/transitionY';

export default function MyApp({ Component, pageProps }) {
    return (
        <TransitionYProvider>
            <TransitionXProvider>
                <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
                <Component {...pageProps} />
            </TransitionXProvider>
        </TransitionYProvider>
    )
}