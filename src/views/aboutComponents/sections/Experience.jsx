import Image from 'next/image'
import styles from  '../About.module.scss';

import card from '@/assets/images/home/card.png'


export default function Experience() {
    const experiences = [
        {
            id: 1,
            company: "Samsung",
            role: "Frontend Developer",
            duration: "2014 - 2016",   
            description: "When it came to designing mobile or web-based applications, Janet had a deep skills with UX principles, such as interaction design, visual design, animation.",
            img: card
        },
        {
            id: 2,
            company: "Google",
            role: "Senior Frontend Developer",
            duration: "2016 - 2020",
            description: "At Google, Janet led the development of several high-impact web applications, focusing on performance optimization and user experience.",
            img: card
        },
        {
            id: 3,
            company: "Apple",
            role: "Senior Frontend Developer",
            duration: "2016 - 2020",
            description: "At Apple, Janet led the development of several high-impact web applications, focusing on performance optimization and user experience.",
            img: card
        }
    ];
    return(
        <>
            <div className={styles.experienceHeader}>
                <span>My Timeline</span>
                <h3>Over 1.6 years as a Web Developer</h3>
            </div>
            {experiences.map((exp) => (
                <div className={`${styles.gridCols} ${styles.sticky}`} key={exp.id}>
                    <div className={styles.leftSection}>
                        <div className={styles.imgContainer}>
                            <Image src={exp.img} alt={exp.company} width={300} height={400} className='fluid' />
                        </div>
                    </div>
                    <div className={styles.rightSection}>
                        <div className={styles.contentContainer}>
                            <span>{exp.duration}</span>
                            <h4>{exp.company}</h4>
                            <p>{exp.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}