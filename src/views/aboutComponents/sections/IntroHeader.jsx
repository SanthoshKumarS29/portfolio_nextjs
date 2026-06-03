import Link from 'next/link'
import styles from '../About.module.scss'
import AnimatedHeader from '@/views/components/TextAnimations/AnimatedHeader'

export default function IntroHeader(){
    return(
        <>
            <div className={styles.introHeader}>
                <div className={styles.introTextContent}>
                    <p>I have worked with businesses of all sizes to create stunning websites and designs that capture their brand's identity.</p>
                    <Link href="/about" className="CtaBtn-black-txt">Mail Me</Link>
                </div>
            </div>
            <AnimatedHeader text = "My Story" />
        </>
    )
}