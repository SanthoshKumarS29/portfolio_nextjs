"use client";

import { motion } from "framer-motion";
import styles from "../Banner.module.scss";

export default function AnimatedText() {
    return (
        <div className={styles.bgTextParent}>
            <MyText>Santhosh</MyText>
            <MyText>Kumar</MyText>
        </div>
    )
}

const Duration = 0.65;
const Stagger = 0.100;

const MyText = ({ children }) => {
    return ( 
        <motion.div className={styles.txtContainer}>
            {children.split("").map((l, i) => (
                <motion.span
                    key={i}
                    initial={{ y: "170%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: Duration,
                        ease: "easeInOut",
                        delay: Stagger * i,
                    }}
                    className={styles.text}
                >
                    {l}
                </motion.span>
            ))}
        </motion.div>
    )
}