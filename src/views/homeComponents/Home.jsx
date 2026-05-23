import "./Banner.module.scss"
import About from "./sections/About";
import Banner from "./sections/Banner";
import Projects from "./sections/Projects";

export default function HomePage() {

    return(
        <>
            <Banner />
            <About />
            <Projects />
        </>
    )
}