import '../styles/global.css'
import { TransitionProvider } from '../context/transition'

export default function MyApp({ Component, pageProps }) {
    return (
        <TransitionProvider>
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
            <Component {...pageProps} />
        </TransitionProvider>
    )
}