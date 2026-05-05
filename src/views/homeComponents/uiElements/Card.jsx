"use client";

import { useMotionValue, useSpring, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import styles from "../Banner.module.scss";

import cardImage from "@/assets/images/banner/card.png"


export default function Card(){

    const cardRef = useRef(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 });
    const smoothY = useSpring(mouseY, {stiffness: 150, damping: 20});

    const handleMouseMove = (e) => {
        const bounds = cardRef.current.getBoundingClientRect();

        const offsetX = e.clientX - bounds.left - bounds.width / 2;
        const offsetY = e.clientY - bounds.top - bounds.height / 2;

        mouseX.set(offsetX * 0.45);
        mouseY.set(offsetY * 0.45);
    }

    const resetPosition = () => {
        mouseX.set(0);
        mouseY.set(0);
    }

    return(
        <div className={styles.cardParent}>
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
            >
                <motion.div
                    ref = {cardRef}
                    onMouseMove = {handleMouseMove}
                    onMouseLeave = {resetPosition}
                    className = {styles.cardChild}
                    style={{ x: smoothX, y: smoothY }}
                    initial = {{ y: 500, rotateY: 200, opacity: 0 }}
                    animate = {{ y: 0, rotateY: 0, opacity: 1 }}
                    transition = {{ type: "spring", stiffness: 80, damping: 30, delay: 0.3}}
                >
                    <Image src={cardImage} alt="Portfolio Holder" className={styles.card} fill  sizes="(max-width: 768px) 175px, (max-width: 1024px) 200px, 275px"/>

                </motion.div>

            </motion.div>
        </div>
    )
}