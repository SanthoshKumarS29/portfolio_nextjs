"use client"

import Link from "next/link"
import Image from "next/image"
import styles from '../Banner.module.scss'
import { useRef } from "react"
import { motion, useAnimation, useMotionValue, useSpring, useTransform } from "framer-motion"

// Images
import card from "@/assets/images/home/card.png"

const projects = [
    { name: "Airtable", category: "Graphic Design", href: "/", image: card },
    { name: "Delta Airlines", category: "Branding", href: "/", image: card },
    { name: "Samsung", category: "Interaction Design", href: "/", image: card },
    { name: "Fovera Health", category: "Interaction Design", href: "/", image: card },
    { name: "McDonalds", category: "Strategy", href: "/", image: card },
]

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
            <Link href={project.href} className={styles.projectChild}>

                <div className={styles.projectName}>
                    <h3>{project.name}</h3>
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
                    <Image src={project.image} alt={project.name} width={225} height={325} />
                </motion.div>

            </Link>
        </div>
    )
}

export default function ProjectLgScreen(){
    return(
        <section className="padding-lr padding-tb">
            <div className={styles.projectTxtContainer}>
                <p>
                    I have worked with businesses of all sizes to create stunning websites
                    and designs that capture their brand&apos;s identity.
                </p>
                <Link href="/" className="CtaBtn-white-txt">
                    View my Portfolio
                </Link>
            </div>

            {projects.map((project) => (
                <ProjectRow key={project.name} project={project} />
            ))}
        </section>
    )
}