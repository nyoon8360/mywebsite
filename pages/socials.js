import { useEffect } from 'react';
import Layout from '../components/layout';
import styles from '../styles/socials.module.css';
import Script from 'next/script';

export default function Socials() {

    //Due to behavior of navigation in Next.Js, need to employ useEffect to load 3rd party script successfully
    //before attempting to render embed components
    useEffect(() => {
        const script = document.createElement("script");

        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    });

    return (
        <Layout>
            <h3 className={styles.socialTitle} style={{marginTop: '30px'}}>LinkedIn</h3>
            <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="nyoon8360" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/nyoon8360?trk=profile-badge"></a></div>
            <hr className={styles.divider}></hr>
        </Layout>
    )
}