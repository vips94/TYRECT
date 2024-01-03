'use client'
import React,{FC, useState} from 'react';
import styles from './section.module.scss';
import LottieVideo from '../LottieVideo';
import { cloudBgVideo } from '@/public/LottieFiles/CloudBg';

type SectionProps = {
    children?: any;
    backgroundProps?: any;
    wrapperClass?:string;
}

const Section:FC<SectionProps> = (props) => {
    const {children, backgroundProps, wrapperClass} = props;
    const [image, setImage] = useState('')
    return (
        <section className={`${styles['section']} ${backgroundProps ? styles['section-relative'] : ''}`}>
            {
                backgroundProps?.type === 'lottie' && (
                    <LottieVideo
                        animationData={backgroundProps?.fileName || cloudBgVideo.cloud2Faster}
                        wrapperClass={`${styles.bg} ${backgroundProps?.dark && styles['bg-dark']}`}
                    />
                )
            }
            {
                backgroundProps?.type === 'image' && (
                    <img
                        src={backgroundProps?.fileName || image}
                        className={`${styles.bg} ${backgroundProps?.dark && styles['bg-dark']}`}
                    />
                )
            }
            <div className={`${styles['section-padding']} ${wrapperClass ? wrapperClass : ''}`}>
                <div className={styles['section-padding-content']}>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;
