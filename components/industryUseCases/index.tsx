'use client'
import React from 'react';
import styles from './industryUseCase.module.scss';
import LottieVideo from '../LottieVideo';
import { cloudBgVideo } from '@/public/LottieFiles/CloudBg';
import Section from '../section';
import SectionHeader from '../section/sectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Scrollbar, Autoplay } from 'swiper/modules';
import { homePage } from '@/constant/homePage';
import CommonCard from '../commonCard';


const IndustryUseCases = () => {
    return (
        <div className={styles['industry-use-case']}>
            <LottieVideo
                animationData={cloudBgVideo.cloud2Faster}
                wrapperClass={styles['lottie-animation']}
            />
            <Section wrapperClass={styles['header']}>
                <SectionHeader tag="INDUSTRY USE CASE" title='Unlock New Possibilities' color='#f0f8fe'/>
            </Section>
            <Section wrapperClass={styles['swiper-slider']}>
                <Swiper modules={[ Autoplay, Scrollbar]} slidesPerView='auto' initialSlide={0} autoplay={false} spaceBetween={32} scrollbar={{draggable: true}}>
                {
                    homePage?.industryUseCasesCards.map((data)=>(
                        <SwiperSlide>
                            <div>
                                <CommonCard
                                    wrapperClassName={styles.card}
                                    title={data.Title}
                                    content={data.content}
                                    imageName={data.image}
                                    linkUrl={data.linkUrl}
                                    allowCardClick={false}
                                    onCardClick={() => {console.log('cardclick')}}
                                    onButtonClick={() => {}}
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </Section>
        </div>
    );
};

export default IndustryUseCases;
