import Banner from "./sections/Banner";
import styles from './About.module.scss'
import IntroHeader from "./sections/IntroHeader";
import IntroBody from "./sections/IntroBody";
import Experience from "./sections/Experience";

export default function AboutPage() {
    return(
        <>
            <Banner />
            <section>
                <div className="padding-lr padding-tb">
                    <div className={styles.whiteContainer}>
                        <IntroHeader />
                        <IntroBody />
                        <Experience />
                    </div>
                </div>
            </section>
        </>
    )
}