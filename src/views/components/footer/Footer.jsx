import Link from 'next/link'
import styles from './footer.module.scss'

export default function Footer() {
    return (
        <div className="padding-lr">
            <div className={styles.footerHeader}>
                <p>Whether you need design or tweak some code, I have the skills and creativity needed to take your project to the next level.
                </p>
                <Link href='/' className='CtaBtn-white-txt'>Mail Me</Link>
            </div>
            <div className={styles.footerBodyFlex}>
                <Link href='/' className={styles.footerLeftLink}>Portfolio</Link>
                <div className={styles.footerRightLinkContainer}>
                    <Link href='/' className={styles.footerRightLink}>About</Link>
                    <Link href='/' className={styles.footerRightLink}>Work</Link>
                    <Link href='/' className={styles.footerRightLink}>Contact Us</Link>
                </div>
            </div>
        </div>
    )
}