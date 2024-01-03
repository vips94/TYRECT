import React,{FC} from 'react';
import styles from './HeadingWithDash.module.scss';

type HeadingWithDashProps = {
    children : any,
    color: string,
    rightDash?: boolean
}

const HeadingWithDash:FC<HeadingWithDashProps> = (props) => {
    const {children, color="#2d6ee8", rightDash} = props
    return (
        <div className={styles['heading-with-dash']}>
            <div style={{backgroundColor: color}} className={styles['dash-line']}/>
                <p style={{color}} className={styles['heading-seven']}>
                    {children}
                </p>
                {
                    rightDash && (
                        <div style={{backgroundColor: color}} className={styles['dash-line']}/>
                    )
                }
            </div>
    );
};

export default HeadingWithDash;
