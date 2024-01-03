'use client'
import React, {FC} from 'react';
import Button from '../elements/button';
import Link from 'next/link';
import styles from './commonCard.module.scss';
// import '@/styles/global.css';

type CommonCardProps = {
    wrapperClassName: string,
    imageName: string,
    title: string,
    content: any,
    linkUrl: string,
    allowCardClick: boolean,
    onCardClick: any,
    onButtonClick: any,
}

const CommonCard:FC<CommonCardProps> = (props) => {
    const {wrapperClassName, imageName, title, content, linkUrl, allowCardClick=false, onCardClick, onButtonClick} = props
    
    const handleCardClick = () => {
        if(allowCardClick) onCardClick();
    }
    
    return (
        <Link href={linkUrl ? linkUrl : ''} className={`${styles['common-card']} ${wrapperClassName ? wrapperClassName : ''} ${allowCardClick && linkUrl ? styles['pointer']: ''}`} onClick={handleCardClick}>
            <div className={styles['image']}>
                <img src={imageName} alt='card image'/>
            </div>
            <div className={`heading-five ${styles['title']}`}>{title}</div>
            <div className={`text-small ${styles.content}`}>{content}</div>
            {
                linkUrl && <Button onClick={()=>onButtonClick()} btnType= 'link' linkProps={{path: linkUrl, target: '_self'}} arrowIcon>
                    Learn More
                </Button>
            }
        </Link>
    );
};

export default CommonCard;
