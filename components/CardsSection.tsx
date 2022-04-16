import cn from 'classnames';
import React from 'react';
import Image from 'next/image';
import styles from './CardsSection.module.scss';

const fakeCardData = [
  {
    img: '/images/profile.jpeg',
    name: 'Ethereum',
    price: 7.89,
    change: 675.49
  },
  {
    img: '/images/profile.jpeg',
    name: 'Polygon',
    price: 7.89,
    change: -675.49
  },
  {
    img: '/images/profile.jpeg',
    name: 'Solana',
    price: 7.89,
    change: 675.49
  },
  {
    img: '/images/profile.jpeg',
    name: 'Avalanche',
    price: 7.89,
    change: 675.49
  },
  {
    img: '/images/profile.jpeg',
    name: 'Luna',
    price: 7.89,
    change: 675.49
  },
  {
    img: '/images/profile.jpeg',
    name: 'Apecoin',
    price: 7.89,
    change: 675.49
  },
  {
    img: '/images/profile.jpeg',
    name: 'Apecoin',
    price: 7.89,
    change: 675.49
  },
  {
    img: '/images/profile.jpeg',
    name: 'Apecoin',
    price: 7.89,
    change: 675.49
  },
  {
    img: '/images/profile.jpeg',
    name: 'Apecoin',
    price: 7.89,
    change: 675.49
  },
];

export const CardsSection = () => {
  return (
    <div className={styles.cardsSection}>
      <div className={styles.cardsSectionText}>
        <header className={cn(styles.header2, styles.smallCenter, styles.bigRightAlign)}>Trade any token at the best price</header>
        <p className={cn(styles.headerText, styles.smallCenter, styles.bigRightAlign)}>Slingshot works like a search engine. If a token exists with on-chain liquidity, we'll make it available to trade at the best price possible. Plus, any positive slippage is yours to keep.</p>
        <a className={cn(styles.textLink, styles.smallCenter, styles.bigRightAlign)} href="/">Check the markets</a>
      </div>
      <div className={styles.cardsOuter}>
        <div className={styles.cards}>
          {fakeCardData.map((card) => {
            return <div className={styles.card}>
              <Image className={styles.coinImage} src={card.img} alt={card.name} width={60} height={60} />
              <span className={styles.coinTitle}><strong>{card.name}</strong></span>
              <span className={styles.coinPrice}>${card.price}</span>
              <p><div className={cn({[styles.arrowContainer]: true, [styles.upsideDown]: card.change < 0})}><Image className={styles.arrow} src="/images/arrow.svg" alt='arrow' width='100%' height='100%' layout='responsive' /></div>{' '}{card.change}%</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}