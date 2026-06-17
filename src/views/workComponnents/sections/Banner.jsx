import styles from '../Works.module.scss'
import Link from 'next/link'
import MyWorks from './MyWorks'

export default function Banner(){
    return(
        <section>
            <div className="padding-lr">
                <div className={styles.workContainer}>
                    <div className={styles.workBanner}>
                        <div className={styles.workHeadTxtLoopContainer}>
                            <h1 className={styles.workHeadTxtLoop}>
                                <span className={styles.workHeadTxt}>Projects</span>
                                <span className={styles.workHeadTxt} aria-hidden="true">Projects</span>
                                
                                {/* Duplicate */}
                                <span className={styles.workHeadTxt} aria-hidden="true">Projects</span>
                                <span className={styles.workHeadTxt} aria-hidden="true">Projects</span>
                            </h1>
                        </div>
                        <div className={styles.workDescription}>
                            <p>With years of experience in the industry, I have worked with businesses of all sizes.</p>
                            <Link href='/' className='CtaBtn-white-txt'>View My Projects</Link>
                        </div>
                    </div>
                    <div className={styles.myWorks}>
                        <MyWorks />
                    </div>
                </div>
            </div>
        </section>
    )
}