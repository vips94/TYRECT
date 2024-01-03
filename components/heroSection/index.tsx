import React, {FC, useState} from 'react';
import styles from './heroSection.module.scss';
import HeadingWithDash from '../HeadingWithDash';
import Button from '../elements/button';
import LottieVideo from '../LottieVideo';
import { cloudBgVideo } from '@/public/LottieFiles/CloudBg';

type HeroSectionProps = {
    backgroundProps?: any,
    linkProps?: any,
    clickProps?: any,
    tagProps?: any,
    title?: string,
    subTitle?: string,
    imageName?: any,
    isAnimatedImage? : boolean,
    isTextDark?: boolean,
    hideBtn?: boolean,
}

const HeroSection:FC<HeroSectionProps> = (props) => {
    const {backgroundProps, linkProps, clickProps, tagProps, title, subTitle, imageName, isTextDark, hideBtn, isAnimatedImage} = props;
    const[isVideoLoaded, setIsVideoLoaded] = useState(true)

    const handleVideoCanPlay = () => {
        setIsVideoLoaded(true);
    }
    
    return (
        <div className={backgroundProps?.type === 'image' ? `${styles['hero-section']} ${styles['hero-section-img']}` : styles['hero-section']}>
            {
                backgroundProps?.type === 'video' && (
                    <video
                        src={`/video/${backgroundProps?.fileName}`}
                        className={styles['hero-video']}
                        muted
                        loop
                        autoPlay
                        playsInline
                        onCanPlay={handleVideoCanPlay}
                    />
                )
            }
            {
                backgroundProps?.type === 'lottie' && (
                    <LottieVideo 
                        animationData = {backgroundProps?.fileName || cloudBgVideo.cloud2Faster}
                        wrapperClass = {styles['hero-lottie']}
                    />
                )
            }
            {
                backgroundProps?.type === 'image' && (
                    <div className={styles['hero-bgImage']}>
                        <img src={backgroundProps?.fileName} alt=""/>
                    </div>
                )
            }
            {
                (isVideoLoaded || backgroundProps?.type === 'image' || backgroundProps?.type === 'lottie') && (
                    <>
                        {isVideoLoaded && backgroundProps?.type === 'video' && (
                            <div className={styles['hero-video-overlay']}></div>
                        )}
                        {isVideoLoaded && backgroundProps?.type === 'image' && (
                            <div className={styles['hero-image-overlay']}></div>
                        )}
                        <div className={styles['hero-content']}>
                            <div className={styles['hero-text']}>
                                {
                                    tagProps && (
                                        <HeadingWithDash color={tagProps?.color}>
                                        {tagProps?.text}
                                        </HeadingWithDash>
                                    )
                                }
                                <h1 className={`${styles['heading-one']} ${isTextDark ? styles['text-dark'] : ''}`}>
                                    {title}
                                </h1>
                                {subTitle && (
                                    <p className={`${styles['text-large']} ${isTextDark ? styles['large-dark'] : ''}`}>
                                        {subTitle}
                                    </p>
                                )}
                                {!hideBtn && (
                                    clickProps ? (
                                        <Button onClick={clickProps?.onClick}>
                                            {clickProps?.label || 'Try For Free'}
                                        </Button>
                                    ):(
                                        <Button linkProps={{
                                            path: linkProps?.href || '#',
                                            target: linkProps?.target || "_self"
                                        }}>
                                            {linkProps?.label || 'Try For Free'}
                                        </Button>
                                    )
                                )}
                                
                            </div>
                            {
                                    imageName && ( isAnimatedImage ? 
                                        <LottieVideo 
                                            animationData = {imageName}
                                            wrapperClass = {styles['hero-image']}
                                        />
                                        : 
                                        <img
                                            src={imageName}
                                            alt='more'
                                            className={styles['hero-image']}
                                        />
                                    )
                                }
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default HeroSection;
