import React from 'react';
import styles from './StatsSection.module.scss';

export const StatsSection = () => {
  return (
    <div className={styles.grid}>
      <div>
        <header className={styles.header3}>$1.8B+</header>
        <p className={styles.iconText}>Total volume</p>
      </div>
      <div>
        <header className={styles.header3}>1.5M+</header>
        <p className={styles.iconText}>Total trades</p>
      </div>
      <div>
        <header className={styles.header3}>200k+</header>
        <p className={styles.iconText}>Total traders</p>
      </div>
      <div>
        <header className={styles.header3}>1B+</header>
        <p className={styles.iconText}>Total liquidity</p>
      </div>
    </div>
  )
}