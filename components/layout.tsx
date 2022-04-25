import cn from 'classnames';
import Image from 'next/image';
import { CardsSection } from './CardsSection';
import { CarouselSection } from './CarouselSection';
import { StatsSection } from './StatsSection';
import { TwitterSection } from './TwitterSection';
import styles from './layout.module.scss';

export default function Layout() {
  return (
    <div>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="https://slingshot.finance"><span className={styles.logoSmaller}><Image src="/images/logo-condensed.svg" alt="Slingshot" width={40.59} height={32} /></span></a>
          <div>
            <a className={styles.navLink} href="/">Trade</a>
            <a className={styles.navLink} href="https://app.slingshot.finance/markets/m">Markets</a>
            <a className={styles.navLink} href="/">Shop</a>
            <a className={styles.connectWallet} href="/">Connect Wallet</a>
          </div>
        </nav>

        <div className={styles.heroOuter}>
        <div className={styles.innerContainer}>
          <div className={styles.hero}>
            <header className={cn(styles.header1, styles.center, styles.maxWidth)}>The fast, smooth, social way to trade crypto</header>
            <p className={cn(styles.headerText, styles.center, styles.maxWidth)}>Slingshot is a web3 trading platform that lets you trade 7500+ crypto tokens at the best prices at lightning fast speed</p>
            <a href="/" className={cn(styles.button, styles.center)}>Start Trading</a>
            <div className={styles.icons}><Image src="/images/icons.png" width={343} height={77} /></div>
            <div className={styles.downArrow}><Image className={styles.downArrowImage} src="/images/arrow.png" width={84} height={127} /></div>
          <StatsSection />
          </div>

        </div>
        </div>
        <div className={styles.innerContainer}>
        </div>

        <div className={cn(styles.textAndImageOuter, styles.textAndImageOuter1)}>
          <div className={styles.innerContainer}>
          <div className={styles.textAndImageSection}>
            <div className={styles.textSection}>
              <header className={cn(styles.header2, styles.smallCenter)}>Built for Web3</header>
              <p className={cn(styles.headerText, styles.smallCenter)}>Connect your wallet and start trading right away. Keep your personal info private and maintain full control over your assets.</p>
              <a className={cn(styles.textLink, styles.headerText, styles.smallCenter)} href="/">Launch App</a>
            </div>
            <div className={styles.imageSection}>
              <Image src={"/images/chart.png"} width={841} height={582} />
            </div>
          </div>
          </div>
        </div>

        <CardsSection />

        <div className={cn(styles.textAndImageOuter, styles.textAndImageOuter2)}>
          <div className={styles.innerContainer}>
          <div className={styles.textAndImageSection}>
            <div className={styles.textSection}>
              <header className={cn(styles.header2, styles.smallCenter)}>Real-time charts for every token</header>
              <p className={cn(styles.headerText, styles.smallCenter)}>We don't rely on 3rd-party providers here. Slingshot runs blockchain nodes for each liquidity zone supported, giving you access to trading data in real-time.</p>
            </div>
            <div className={styles.imageSection}>
              <Image src={"/images/chart2.png"} width={1605} height={812} />
            </div>
          </div>
          </div>
        </div>

        <div className={cn(styles.textAndImageOuter, styles.textAndImageOuter3)}>
          <div className={styles.innerContainer}>
          <div className={styles.textAndImageSection}>
            <div className={cn(styles.textSection, styles.bigRightAlign)}>
              <header className={cn(styles.header2, styles.smallCenter, styles.bigRightAlign)}>Chat while you trade</header>
              <p className={cn(styles.headerText, styles.smallCenter, styles.bigRightAlign)}>Live chat with traders all over the world, while trading tokens. Change your avatar to your fav NFT, or build your own in the Slingshot 2099 Marketplace.</p>
            </div>
            <div className={styles.imageSection}>
              <Image src={"/images/chat.jpg"} width={845} height={698} />
            </div>
          </div>
          </div>
        </div>

        <CarouselSection />
        <div className={styles.innerContainer}>
          <p className={cn(styles.headerText, styles.center)}>Mix and match Slingshot 2009 NFTs to find your fresh fit.<br/>Available to buy in the 2099 Marketplace.</p>
          <a href="/" className={cn(styles.button, styles.center, styles.checkItOut)}>Check it out</a>
          <header className={cn(styles.header2, styles.center)}>People already loving Slingshot</header>
        </div>
        <TwitterSection />
        <div className={styles.innerContainer}>
          <a href="/" className={cn(styles.button, styles.center, styles.checkItOut)}>Start Trading</a>
        </div>
      </div>
    </div>
  )
}