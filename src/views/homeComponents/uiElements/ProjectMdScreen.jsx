import Link from "next/link";
import Image from "next/image";
import styles from '../Banner.module.scss';
import { Projects } from "@/utils/ProjectData";

// Imags and icons
import card from "@/assets/images/home/cardMd.webp";


export default function ProjectMdScreen(){
    return(
        <section className="padding-lr padding-tb">
            <div className={styles.projectTxtContainer}>
                <p>
                    I have worked with businesses of all sizes to create stunning websites
                    and designs that capture their brand's identity.
                </p>
                <Link href="/" className="CtaBtn-white-txt">
                    View my Portfolio
                </Link>
            </div>
            {Projects.map((project) => (
                <div key={project.title}>
                    <Link href={`/works/${project.slug}`} className={styles.projectChildMD}>

                        <div className={styles.projectName}>
                            <h3>{project.title}</h3>
                        </div>

                        <div className={styles.projectCategory}>
                            <p>{project.category}</p>
                        </div>

                        <div
                            className={styles.projectImage}>
                            <Image src={project.homeImage2} alt={project.title} width={756} height={225} className="fluid"/>
                        </div>
                    </Link>
                </div>
            ))}
        </section>
    )
}