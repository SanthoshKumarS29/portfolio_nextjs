"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import styles from "./Navbar.module.scss"
import MenuLinks from "./MenuLinks"



export default function Navbar() {

    const [open, setOpen] = useState(false);

    const handleMenuClick = () => {
        setOpen(!open);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.navPopupParent}>
                <div className={styles.navContainer}>
                    <div className={styles.navTxt}>
                        <h1>
                            <Link href="/">Portfolio</Link>
                        </h1>
                    </div>
                    <div className={styles.navCtaContainer}>
                        <div>
                            <Link href="/" className="CtaBtn-white-txt">Contact Me</Link>
                        </div>
                        <div className={styles.navmenuContainer} onClick={handleMenuClick}>
                            <button className={`${styles.menuBtn} ${open ? styles.menuActive : ""}`} type="button">
                                <span className={styles.menuline}></span>
                                <span className={styles.menuline}></span>
                            </button>
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    {open && (
                        <motion.div 
                            className= {styles.navMenuLinkPopup}
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -40, opacity: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut"
                            }}
                        >
                            <MenuLinks handleMenuClick={handleMenuClick} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}