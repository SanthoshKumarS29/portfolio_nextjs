import styles from "./Navbar.module.scss";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export default function MenuLinks(){
    return(
        <div className={styles.menuLinkContainer}>
            <div>
                <Link href='/about' className={styles.menuLink}>
                    <span className={styles.menuLinkTxt}>About</span>
                    <span><FaAngleRight /></span>
                </Link>
            </div>
            <div>
                <Link href='/work' className={styles.menuLink}>
                    <span className={styles.menuLinkTxt}>Work</span>
                    <span><FaAngleRight /></span>
                </Link>
            </div>
            <div>
                <Link href='/contact-us' className={styles.menuLink}>
                    <span className={styles.menuLinkTxt}>Contact Us</span>
                    <span><FaAngleRight /></span>
                </Link>
            </div>
        </div>
    )
}