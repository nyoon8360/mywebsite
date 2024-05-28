import '../styles/global.css'
import { TransitionXProvider } from '../context/transitionX';
import { TransitionYProvider } from '../context/transitionY';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function MyApp({ Component, pageProps }) {
    return (
        <TransitionYProvider>
            <TransitionXProvider>
                <Component {...pageProps} />
            </TransitionXProvider>
        </TransitionYProvider>
    )
}