import Banner from "./sections/Banner";
import styles from './About.module.scss'
import IntroHeader from "./sections/IntroHeader";

export default function AboutPage() {
    return(
        <>
            <Banner />
            <section>
                <div className="padding-lr padding-tb">
                    <div className={styles.whiteContainer}>
                        <IntroHeader />
                    </div>
                </div>
            </section>
        </>
    )
}