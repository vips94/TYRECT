'use client'
import React, {FC} from 'react';
import styles from './sectionHeader.module.scss';
import HeadingWithDash from '@/components/HeadingWithDash';

type SectionHeaderProps = {
    tag: any
    title: string
    color?: string
    rightDash?: any
    subTitle?: string
    isTextDark?: boolean
}

const SectionHeader:FC<SectionHeaderProps> = (props) => {
    const {tag, isTextDark, title, color='black', rightDash, subTitle} = props
    return (
        <div className={styles['section-header']}>
            {tag && (
                <HeadingWithDash color={color} rightDash={rightDash}>{tag}</HeadingWithDash>
            )}
            <h1 className={`${styles['heading-two']} ${isTextDark ? styles['text-dark'] : ''}`}>{title}</h1>
            {subTitle && (
                <p className={styles['text-macro']}>{subTitle}</p>
            )}
        </div>
    );
};

export default SectionHeader;
