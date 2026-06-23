import styles from '../Contact.module.scss';
import Link from 'next/link';

// Images and icons
import { RiTelegram2Line } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";



export default function ContactInfo(){

    const links =[
        {
            id: 1,
            name: 'Email',
            url: 'mailto',
            urlName:'santhosh@example.com',
            icon: <MdOutlineEmail />
        },
        {
            id: 2,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/your-profile',
            urlName:'linkedin.com/in/your-profile',
            icon: <FaLinkedinIn />
        },
        {
            id: 3,
            name: 'GitHub',
            url: 'https://github.com/your-profile',
            urlName:'github.com/your-profile',
            icon: <FaGithub />
        }
    ]

    return(
        <div className={styles.contactInfoContainer}>
            <div className={styles.contactInfo}>
                <div className={styles.contactInfoHeader}>
                    <div className={styles.contactInfoIcon}>
                        <RiTelegram2Line size={30} />
                    </div>
                    <h2 className={styles.contactInfoHeadTxt}>Let's Create Something Amazing!</h2>
                    <p className={styles.contactInfoHeadDesc}>I'm a Frontend Developer passionate about creating beautiful and functional web applications.</p>
                </div>
                <div className={styles.contactInfoBody}>
                    {links.map(urls => (
                        <div className={styles.contactInfoItem} key={urls.id}>
                            <div className={styles.contactInfoItemIcon}>
                                {urls.icon}
                            </div>
                            <div className={styles.contactInfoItemContent}>
                                <p>{urls.name}</p>
                                <Link href={urls.url} target="_blank" rel="noopener noreferrer">
                                    {urls.urlName}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.contactInfoFooter}>
                    <p className={styles.contactInfoFooterTxt}>Available for freelance work and Part-time opportunities</p>
                    <div className={styles.contactInfoFooterLink}>
                        <Link href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className={styles.contactInfoFooterLinkBtn}>
                            Get in Touch
                        </Link>
                        <span className={styles.contactInfoFooterLinkIcon}>
                            <FaArrowRight size={20} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}