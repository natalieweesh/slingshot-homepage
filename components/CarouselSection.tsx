
import cn from 'classnames';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import styles from './CarouselSection.module.scss';
import 'react-multi-carousel/lib/styles.css';

const CustomRightArrow = ({ onClick }) => {
  return <button className={styles.rightButtonBigger} onClick={() => onClick()} />;
};

const CustomLeftArrow = ({ onClick }) => {
  return <button className={styles.leftButtonBigger} onClick={() => onClick()} />;
};

export const CarouselSection = () => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.leftArrow}><Image src="/images/arrow.png" width={84} height={127} /></div>
      <Carousel infinite responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1000 },
          items: 5
        },
        tablet: {
          breakpoint: {min: 850, max: 1000},
          items: 4
        },
        portraitMobile: {
          breakpoint: {min: 600, max: 850},
          items: 3
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 2
        }
      }} customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow />}>
        <div className={styles.person}><Image src="/images/person1.png" width={211} height={644} /></div>
        <div className={styles.person}><Image src="/images/person2.png" width={211} height={644} /></div>
        <div className={styles.person}><Image src="/images/person3.png" width={211} height={644} /></div>
        <div className={styles.person}><Image src="/images/person4.png" width={211} height={644} /></div>
        <div className={styles.person}><Image src="/images/person5.png" width={211} height={644} /></div>
      </Carousel>
      <div className={styles.rightArrow}><Image src="/images/arrow.png" width={84} height={127} /></div>
      <div className={styles.overlay}>
        <div className={styles.bigNumber}><Image src="/images/2099.png" width={1341} height={416} /></div>
        <div className={styles.numbers}>
          <header className={cn(styles.header2, styles.greenNumber)}>10,000<span className={styles.numberUnder}>bags</span></header>
          <header className={cn(styles.header2, styles.greenNumber)}>139<span className={styles.numberUnder}>unique items</span></header>
          <header className={cn(styles.header2, styles.greenNumber)}>800,000<span className={styles.numberUnder}>unique combinations</span></header>
        </div>
      </div>
    </div>
  )
}