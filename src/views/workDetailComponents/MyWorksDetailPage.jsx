
import Link from 'next/link'
import Image from 'next/image';
import style from './MyWorksDetailPage.module.scss';
import { Projects } from '@/utils/ProjectData';
import { notFound } from 'next/navigation';

// images
import { VscChevronRight } from "react-icons/vsc";

import projectDiv from '@/assets/images/project/projectFrame.png'

export default async function MyWorksDetailPage({ slug }){

    const projects = Projects.find(
        (item) => item.slug === slug
    );

    if(!projects){
        notFound();
    }



    return(
        <div className='padding-lr'>
            <div className={style.projectDetailHeader}>
                <h1>{projects.title}</h1>
                <p>{projects.description}</p>
            </div>
            <div className='padding-tb max-width'>
                <div className={style.whiteContainer}>
                    <div className={style.flexHorizontal}>
                        <div className={style.text}>
                            <p>{projects.category}</p>
                        </div>
                        <div className={style.text}>
                            <p>{projects.date}</p>
                        </div>
                        <div className={style.linkTxt}>
                            <Link href={projects.liveLink}>View live project</Link>
                            <span><VscChevronRight /></span>
                        </div>
                    </div>
                    <div className={style.flexVertical}>
                        {projects.sampleHuvImages.map(imgs => (
                            <div className={style.projectImageDiv} key={imgs.imageName}>
                                <div className={style.projectImage}>
                                    <Image src={imgs.images} alt='hello world' width={750} height={450} className='fluid'/>
                                </div>
                            </div>
                        ))}
                        <div className={style.projectImageDiv}>
                            <div className={style.projectImage}>
                                <Image src={projectDiv} alt='hello world' width={750} height={450} className='fluid'/>
                            </div>
                        </div>
                        <div className={style.projectImageDiv}>
                            <div className={style.projectImage}>
                                <Image src={projectDiv} alt='hello world' width={750} height={450} className='fluid'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}