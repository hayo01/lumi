import React from 'react';
import styles from '@/styles/Home.module.css';

export default function Title({ keyword, title }) {
  return (
    <div className={styles.titleWrap}>
      <small className={styles.titleKey}>{keyword}</small>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
