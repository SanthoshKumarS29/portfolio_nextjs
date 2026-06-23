"use client"

import Link from "next/link"
import Image from "next/image"
import styles from '../Banner.module.scss'
import { useRef } from "react"
import { motion, useAnimation, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Projects } from "@/utils/ProjectData"


function ProjectRow({ project }) {
    const controls = useAnimation()

    const handleMouseEnter = () => {
        controls.start({
            opacity: 1,
            rotateY: [0, -360],
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        })
    }

    const handleMouseLeave = () => {
        controls.start({
            opacity: 0,
            rotateY: 0,
            transition: { duration: 0.25, ease: "easeIn" },
        })
    }

    const rowRef = useRef(null);
    
    const y = useMotionValue(0);
    const smoothY = useSpring(y, {
        stiffness: 120,
        damping: 14,
    })

    const translateY = useTransform(
        smoothY,
        [-0.5, 0.5],
        [-80, 80]
    )

    const handleMouseMove = (e) => {
        const rect = rowRef.current.getBoundingClientRect()
        const mouseY = e.clientY - rect.top
        const yPct = mouseY / rect.height - 0.5
        y.set(yPct)
    }

    return (
        <div
            ref={rowRef}
            className={styles.projectParent}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            <Link href={`/works/${project.slug}`} className={styles.projectChild}>

                <div className={styles.projectName}>
                    <h3>{project.title}</h3>
                </div>

                <div className={styles.projectCategory}>
                    <p>{project.category}</p>
                </div>

                {/* Card fixed at right side, spins on Y axis (coin flip) */}
                <motion.div
                    className={styles.projectImage}
                    animate={controls}
                    initial={{ opacity: 0, rotateY: 0 }}
                    style={{
                        position: "absolute",
                        right: "5%",
                        top: "-30%",
                        translateY: translateY,
                        pointerEvents: "none",
                        transformPerspective: 800,
                    }}
                >
                    <Image src={project.homeImage1} alt={project.title} width={225} height={325} />
                </motion.div>

            </Link>
        </div>
    )
}

export default function ProjectLgScreen(){
    return(
        <section className="padding-lr padding-tb max-width">
            <div className={styles.projectTxtContainer}>
                <p>
                    I have worked with businesses of all sizes to create stunning websites
                    and designs that capture their brand&apos;s identity.
                </p>
                <Link href="/" className="CtaBtn-white-txt">
                    View my Portfolio
                </Link>
            </div>

            {Projects.map((project) => (
                <ProjectRow key={project.title} project={project} />
            ))}
        </section>
    )
}