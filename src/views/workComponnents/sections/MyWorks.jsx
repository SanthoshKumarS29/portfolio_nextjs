import styles from '../Works.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Projects } from '@/utils/ProjectData';

// Images
import card from '../../../assets/images/home/cardMd.webp';
import { BsArrowRightSquareFill } from "react-icons/bs";


export default function MyWorks() {

    const projects = [
        {
            id:1,
            title: 'Project Title',
            description: 'Project Description',
            img: card,
            href: '/'
        },
        {
            id:2,
            title: 'Project Title',
            description: 'Project Description',
            img: card,
            href: '/'
        },
        {
            id:3,
            title: 'Project Title',
            description: 'Project Description',
            img: card,
            href: '/'
        },
        {
            id:4,
            title: 'Project Title',
            description: 'Project Description',
            img: card,
            href: '/'
        }
    ]

    return (
        <div className={styles.myworksContainer}>
            <div className={styles.myworksHeader}>
                <p>All Projects</p>
            </div>
            <div className={styles.myworksBody}>
                <div className={styles.myworksBodyHeader}>
                    <p>My aim is to help my Clients maximize their potential.</p>
                </div>
                <div className={styles.myworksBodyContent}>
                    {Projects.map((project) => (
                        <Link href={`/works/${project.slug}`} key={project.title} className={styles.myworksCard}>
                            <Image src={project.homeImage2} alt={project.title} width={600} height={600} className='fluid'/>
                            <div className={styles.flexHoriz}>
                                <div className={styles.myworksCardContent}>
                                    <h3>{project.title}</h3>
                                    <p>{project.category}</p>
                                </div>
                                <div className={styles.myworksCardArrow}>
                                    <span><BsArrowRightSquareFill size={25}/></span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}