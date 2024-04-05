import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/index.module.css';
import {Reveal} from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import Link from 'next/link';

export default function HomePage() {

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

    return (
        
        <Layout> 
            <p>hallo</p>
        </Layout>
        
    )
}

//calculate age from birthday
function calc_age(bday) {
    let curDate = new Date(Date.now());

    let age = (curDate.getFullYear() - bday.getFullYear());

    let monthDiff = curDate.getMonth() - bday.getMonth();

    if (monthDiff < 0 || (monthDiff == 0 && curDate.getDate() < bday.getDate())) {
        age--;
    }

    return age;
}