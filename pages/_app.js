import '../styles/global.css'
import { TransitionProvider } from '../context/transition'

export default function MyApp({ Component, pageProps }) {
    return (
        <TransitionProvider>
            <Component {...pageProps} />
        </TransitionProvider>
    )
}