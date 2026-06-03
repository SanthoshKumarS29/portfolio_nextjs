import Link from 'next/link'
import styles from '../About.module.scss'

export default function Banner(){
    return(
        <section>
            <div className="padding-lr">
                <div className={styles.aboutBanner}>
                    <div className={styles.aboutHeadTxtLoopContainer}>
                        <h1 className={styles.aboutHeadTxtLoop}>
                            <span className={styles.aboutHeadTxt}>About Me</span>
                            <span className={styles.aboutHeadTxt} aria-hidden="true">About Me</span>
                            
                            {/* Duplicate */}
                            <span className={styles.aboutHeadTxt} aria-hidden="true">About Me</span>
                            <span className={styles.aboutHeadTxt} aria-hidden="true">About Me</span>
                        </h1>
                    </div>
                    <div className={styles.aboutDescription}>
                        <p>With years of experience in the industry, I have worked with businesses of all sizes.</p>
                        <Link href='/' className='CtaBtn-white-txt'>View My Projects</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}