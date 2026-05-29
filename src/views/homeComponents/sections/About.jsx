
import Link from "next/link"
import styles from "../Banner.module.scss";
import AnimatedHeader from "@/views/components/TextAnimations/AnimatedHeader";

// icons
import { FaArrowDown } from "react-icons/fa6";
import UpperDivImage from "@/assets/images/divUpperImage.webp";
import Image from "next/image";


export default function About(){
    return(
        <section className="padding-lr">
            <div className={styles.whiteContainer}>
                <div className={styles.aboutParent}>
                    <div className={styles.aboutChild}>
                        <p>With years of experience in the industry, I have worked with businesses of all sizes.</p>
                        <Link href="/about" className="CtaBtn-black-txt">Explore my Story</Link>
                    </div>
                </div>
                <AnimatedHeader text = "Since 2024" />
                {/* <div className={styles.downArrow}>
                    <Link href="#about">
                        <Image src={UpperDivImage} alt="UpperDivImage" width={397} height={250} />
                    </Link>
                </div> */}
            </div>
        </section>
    )
}