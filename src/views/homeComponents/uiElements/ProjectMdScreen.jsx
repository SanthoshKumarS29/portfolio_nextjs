import Link from "next/link";
import Image from "next/image";
import styles from '../Banner.module.scss';

// Imags and icons
import card from "@/assets/images/home/cardMd.webp";

const projects = [
    { name: "Airtable", category: "Graphic Design", href: "/", image: card },
    { name: "Delta Airlines", category: "Branding", href: "/", image: card },
    { name: "Samsung", category: "Interaction Design", href: "/", image: card },
    { name: "Fovera Health", category: "Interaction Design", href: "/", image: card },
    { name: "McDonalds", category: "Strategy", href: "/", image: card },
]

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
            {projects.map((project, i) => (
                <div key={i}>
                    <Link href={project.href} className={styles.projectChildMD}>

                        <div className={styles.projectName}>
                            <h3>{project.name}</h3>
                        </div>

                        <div className={styles.projectCategory}>
                            <p>{project.category}</p>
                        </div>

                        <div
                            className={styles.projectImage}>
                            <Image src={project.image} alt={project.name} width={756} height={225} className="fluid"/>
                        </div>

                    </Link>
                </div>
            ))}
        </section>
    )
}