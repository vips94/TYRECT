import React, {FC} from 'react';
import styles from './faqItem.module.scss';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

type FAQItemProps = {
    title: string,
    content: any,
    isTextDark: boolean
}

const FAQItem:FC<FAQItemProps> = (props) => {
    const { title, content, isTextDark } = props;

    const items: CollapseProps['items'] = [
        {
          key: '1',
          label: title,
          children: content,
        },
      ];

    return (
        <div className={styles['faq-item-section']}>
            <Collapse accordion items={items} />
        </div>
    );
};

export default FAQItem;
