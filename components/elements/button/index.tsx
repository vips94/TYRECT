import React, {FC} from 'react';
import styles from './button.module.scss';
import Link from 'next/link';
import { Button as AntButton } from 'antd'; 
import { arrowRight } from '@/components/icons/svgIcons';

type ButtonProps = {
    children: any,
    linkProps?: any,
    arrowIcon?: boolean,
    disabled?: boolean,
    loading?: boolean,
    btnType?: any,
    htmlType?: any,
    onClick?: any,
    onKeyUp?: any,
}

const Button:FC<ButtonProps> = (props) => {
    const {children, linkProps, arrowIcon, disabled=false, loading, btnType="default", htmlType="button", onClick, onKeyUp} = props;
    return linkProps ? (
        !disabled ? (
            <Link
                href={{
                    pathname: linkProps?.path,
                    ...(linkProps?.state && {state: linkProps.state})
                }}
                target={linkProps?.target || '_self'}
                className={btnType !== 'link' ? `${styles['btn-round']} ${styles['round-link']}` : `${styles['btn-link']}`}
                onClick={onClick}

            >
                {children}
                {arrowIcon && <div className={styles['link-arrow']}>{arrowRight}</div>}
            </Link>
        ) : (
            <div className={styles['link-disabled-wrapper']}>
            <Link
                href={{
                    pathname: linkProps?.path,
                    ...(linkProps?.state && {state: linkProps.state})
                }}
                target={linkProps?.target || '_self'}
                className={btnType !== 'link' ? `${styles['btn-round']} ${styles['round-link']}` : `${styles['btn-link']}`}
                onClick={onClick}

            >
                {children}
                {arrowIcon && <div className={styles['link-arrow']}>{arrowRight}</div>}
            </Link>
            </div>
        )
    ) : (
        <AntButton
            type={btnType}
            htmlType={htmlType}
            onClick={onClick}
            onKeyUp={onKeyUp}
            disabled={disabled}
            loading={loading}
            className={btnType !== 'link' ? `${styles['btn-round']} ${styles['round-border']}` : `${styles['btn-link']} ${disabled && styles['btn-round-disabled']}`}

        >
            {children}
            {arrowIcon && <div className={styles['link-arrow']}>{arrowRight}</div>}
        </AntButton>
    )
};

export default Button;
