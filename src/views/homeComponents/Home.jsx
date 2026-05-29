import Questions from "../components/faq/Question";
import styles from "./Banner.module.scss"
import About from "./sections/About";
import Banner from "./sections/Banner";
import Projects from "./sections/Projects";
import Quote from "./sections/Quote";
import Services from "./sections/Services";

export default function HomePage() {

    return(
        <>
            <Banner />
            <About />
            <Projects />
            <section>
                <div className="padding-lr padding-tb">
                    <div className={styles.whiteContainer}>
                        <Services />
                        <Quote />
                        <Questions />
                    </div>
                </div>
            </section>
        </>
    )
}