import '../styles/global.css'
import { TransitionXProvider } from '../context/transitionX';
import { TransitionYProvider } from '../context/transitionY';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function MyApp({ Component, pageProps }) {
    return (
        <TransitionYProvider>
            <TransitionXProvider>
                <SpeedInsights />
                <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
                <Component {...pageProps} />
            </TransitionXProvider>
        </TransitionYProvider>
    )
}