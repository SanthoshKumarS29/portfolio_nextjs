import "./Banner.module.scss"
import About from "./sections/About";
import Banner from "./sections/Banner";
import Projects from "./sections/Project";

export default function HomePage() {
    return(
        <div>
            <Banner />
            <About />
            <Projects />
        </div>
    )
}