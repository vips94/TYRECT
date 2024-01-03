import React, {FC} from 'react';
import styles from './wowItem.module.scss';
import LottieVideo from '@/components/LottieVideo';

type BuildItemProps = {
    number?: number,
    title: string,
    subTitle?: string,
    isTextDark?: boolean,
}

const BuildItem:FC<BuildItemProps> = (props) => {
    const {number, title, subTitle='', isTextDark=false} = props;
    return (
        <div className={`${styles['list-content']}`}>
            <div className={styles['number-text']}>{number}</div>
            <div className={`${styles['content-text']}`} >
                <h1 className={`${styles['heading-one']} ${isTextDark ? styles['text-dark'] : ''}`}>
                    {title}
                </h1>
                {subTitle && (
                    <p className={`${styles['text-large']} ${isTextDark ? styles['text-dark'] : ''}`}>
                        {subTitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default BuildItem;
