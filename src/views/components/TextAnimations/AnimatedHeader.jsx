"use client";

import { motion } from "framer-motion";
import styles from "./AnimatedHeader.module.scss";

const AnimatedHeader = ({ 
    text,
    as: Tag = "h2",
    once = true,
    amount = 0.5,
    duration = 0.6,
    stagger = 0.08,
}) => {
    return(
        <motion.div className = {styles.headTxtParent}
            initial = "hidden"
                whileInView = "visible"
                viewport = {{ once, amount }}
                variants = {{
                    visible: {
                        transition: {
                            staggerChildren: stagger,
                        }
                    }
                }}
        >
            <Tag className = {styles.headTxtContainer}>
                {text.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        className={styles.text}
                        variants={{
                            hidden: { y: "170%", opacity: 0},
                            visible: { y: 0, opacity: 1 }
                        }}
                        transition={{
                            duration,
                            ease: "easeInOut",
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </Tag>
        </motion.div>
    )
}

export default AnimatedHeader;