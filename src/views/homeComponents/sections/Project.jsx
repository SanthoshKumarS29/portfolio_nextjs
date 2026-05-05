import Link from "next/link"
import Image from "next/image"
import styles from '../Banner.module.scss'

// Images
import card from "@/assets/images/banner/card.png"

export default function Projects() {
    return(
        <div className="padding-lr padding-tb">
            <div className={styles.projectTxtContainer}>
                <p>I have worked with businesses of all sizes to create stunning websites and designs that capture their brand's identity.</p>
                <Link href='/' className="CtaBtn-white-txt">View my Portfolio</Link>
            </div>
            <div className={styles.projectParent}>
                <Link href='/' className={styles.projectChild}>
                    <div className={styles.projectName}>
                        <h3>Airtable</h3>
                    </div>
                    <div className={styles.projectCategory}>
                        <p>Graphic Design</p>
                    </div>
                    <div className={styles.projectImage}>
                        <Image src={card} alt="Airtable" width={300} height={400}/>
                    </div>
                </Link>
            </div>
        </div>
    )
}