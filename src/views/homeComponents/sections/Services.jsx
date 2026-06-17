import Link from 'next/link';
import styles from '../Banner.module.scss';
import AnimatedHeader from '@/views/components/TextAnimations/AnimatedHeader';
import Image from 'next/image';

// Image and Icon
import card from "@/assets/images/home/cardMd.webp"

// array
const serviceContent = [
    {
        no: "001",
        head: "Web Design",
        para: "This includes creating unique designs that reflect a company's identity and"
    },
    {
        no: "002",
        head: "Interaction design",
        para: "The process involves understanding the client's requirements, analyzing"
    },
    {
        no: "003",
        head: "Web development",
        para: "This involves designing user interfaces, such as buttons, menus"
    }
]


export default function Services() {
    return (
        <>
            <div className={styles.servicesHeader}>
                <div className={styles.servicesTextContent}>
                    <p>I have worked with businesses of all sizes to create stunning websites and designs that capture their brand's identity.</p>
                    <Link href="/about" className="CtaBtn-black-txt">Mail Me</Link>
                </div>
            </div>
            <AnimatedHeader text = "My Service" />
            <div className={styles.serviceContainerParent}>
                {serviceContent.map((contents, i) => (
                    <div className={styles.serviceChild} key={i}>
                        <div className={styles.serviceContent}>
                            <p>{contents.no}</p>
                            <h3>{contents.head}</h3>
                            <p>{contents.para}</p>
                            <div className={styles.serviceContentImg}>
                                <Image src={card} alt='Service Card' width={550} height={250} className='fluid'/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}