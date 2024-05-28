import { useEffect } from 'react';
import Layout from '../components/layout';
import styles from '../styles/socials.module.css';
import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';
import InstagramEmbed from '../components/instagramEmbed';

export default function Socials() {

    const fadeUpAnimation = keyframes`
        from {
            opacity: 0;
            transform: translateY(5px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    `;

    //Due to behavior of navigation in Next.Js, need to employ useEffect to load 3rd party script successfully
    //before attempting to hydrate embed components
    useEffect(() => {
        const instagramScript = document.createElement("script");
        const linkedinScript = document.createElement("script");

        linkedinScript.src = 'https://platform.linkedin.com/badges/js/profile.js';
        linkedinScript.async = true;

        instagramScript.src = '//www.instagram.com/embed.js';
        instagramScript.async = true;

        document.head.appendChild(linkedinScript);
        document.head.appendChild(instagramScript);

        return () => {
            document.head.removeChild(linkedinScript);
            document.head.removeChild(instagramScript);

            if (window.instgrm) delete window.instgrm;
        }
    });

    return (
      <Layout>
        <h3 className={styles.socialTitle}>
          LinkedIn
        </h3>
        <Reveal keyframes={fadeUpAnimation} duration={2000} triggerOnce='true'>
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="large"
            data-theme="dark"
            data-type="HORIZONTAL"
            data-vanity="nyoon8360"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link"
              href="https://www.linkedin.com/in/nyoon8360?trk=profile-badge"
            ></a>
          </div>
        </Reveal>
        
        <hr className={styles.divider}></hr>

        <h3 className={styles.socialTitle}>
          Instagram
        </h3>
        <Reveal keyframes={fadeUpAnimation} duration={2000} triggerOnce='true'>
          <div className={styles.instagramEmbedContainer}>
              <InstagramEmbed displayName='Nicholas Yoon' username='nick_yoon98'/>
          </div>
        </Reveal>
      </Layout>
    );
}