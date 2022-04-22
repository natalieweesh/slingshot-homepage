import React from 'react';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import { TwitterCard, TwitterCardContent } from './TwitterCard';
import 'react-multi-carousel/lib/styles.css';
import styles from './TwitterSection.module.scss';

const fakeTwitterData: TwitterCardContent[] = [
  {
    name: 'One Last',
    username: 'firstlast',
    img: '/images/profile.jpeg',
    text: '@slingshot is everything I\'ve ever wanted from a web wallet. If it\'s a sign of what\'s to come, Solana UX will dwarf Ethereum.',
    date: 'March 21, 2021 • 7:54am'
  },
  {
    name: 'Two Last',
    username: 'firstlast',
    img: '/images/profile.jpeg',
    text: '@slingshot is everything I\'ve ever wanted from a web wallet. If it\'s a sign of what\'s to come, Solana UX will dwarf Ethereum.',
    date: 'March 21, 2021 • 7:54am'
  },
  {
    name: 'Three Last',
    username: 'firstlast',
    img: '/images/profile.jpeg',
    text: '@slingshot is everything I\'ve ever wanted from a web wallet. If it\'s a sign of what\'s to come, Solana UX will dwarf Ethereum.',
    date: 'March 21, 2021 • 7:54am'
  },
  {
    name: 'Four Last',
    username: 'firstlast',
    img: '/images/profile.jpeg',
    text: '@slingshot is everything I\'ve ever wanted from a web wallet. If it\'s a sign of what\'s to come, Solana UX will dwarf Ethereum.',
    date: 'March 21, 2021 • 7:54am'
  },
  {
    name: 'Five Last',
    username: 'firstlast',
    img: '/images/profile.jpeg',
    text: '@slingshot is everything I\'ve ever wanted from a web wallet. If it\'s a sign of what\'s to come, Solana UX will dwarf Ethereum.',
    date: 'March 21, 2021 • 7:54am'
  },
  {
    name: 'Six Last',
    username: 'firstlast',
    img: '/images/profile.jpeg',
    text: '@slingshot is everything I\'ve ever wanted from a web wallet. If it\'s a sign of what\'s to come, Solana UX will dwarf Ethereum.',
    date: 'March 21, 2021 • 7:54am'
  },
]

const CustomRightArrow = ({ onClick }) => {
  return <button className={styles.rightButtonBigger} onClick={() => onClick()} />;
};

const CustomLeftArrow = ({ onClick }) => {
  return <button className={styles.leftButtonBigger} onClick={() => onClick()} />;
};

export const TwitterSection = () => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.leftArrow}><Image src="/images/arrow.png" width={84} height={127} /></div>
      <Carousel centerMode infinite responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1000 },
          items: 3
        },
        tablet: {
          breakpoint: {min: 850, max: 1000},
          items: 2
        },
        portraitMobile: {
          breakpoint: {min: 600, max: 850},
          items: 1
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1
        }
      }} customLeftArrow={<CustomLeftArrow onClick />} customRightArrow={<CustomRightArrow onClick />}>
      {fakeTwitterData.map((card) => {
        return <TwitterCard card={card} />
      })}
      </Carousel>
      <div className={styles.rightArrow}><Image src="/images/arrow.png" width={84} height={127} /></div>
    </div>
  )
}