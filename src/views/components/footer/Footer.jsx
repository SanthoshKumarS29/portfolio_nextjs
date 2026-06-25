import Link from 'next/link'
import styles from './footer.module.scss'

export default function Footer() {
    return (
        <div className="padding-lr">
            <div className={styles.footerHeader}>
                <p>Whether you need design or tweak some code, I have the skills and creativity needed to take your project to the next level.
                </p>
                <Link href='/contact-us' className='CtaBtn-white-txt'>Mail Me</Link>
            </div>
            <div className={styles.footerBodyFlex}>
                <Link href='/' className={styles.footerLeftLink}>Portfolio</Link>
                <div className={styles.footerRightLinkContainer}>
                    <Link href='/about' className={styles.footerRightLink}>About</Link>
                    <Link href='/works' className={styles.footerRightLink}>Work</Link>
                    <Link href='/contact-us' className={styles.footerRightLink}>Contact Us</Link>
                </div>
            </div>
        </div>
    )
}