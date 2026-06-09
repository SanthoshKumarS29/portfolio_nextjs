import styles from  '../About.module.scss';
import Image from 'next/image';


import card from '@/assets/images/home/card.png'


export default function IntroBody() {
    return(
        <div className={styles.gridCols}>
            <div className={styles.leftSection}>
                <div className={styles.imgContainer}>
                    <Image src={card} alt='Its me' width={300} height={400} className='fluid' />
                </div>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.contentContainer}>
                    <span>About Me</span>
                    <h3>Designer based in Madurai, TamilNadu</h3>
                    <p>Janet was a creative freelancer based in New York City who specialized in app design and web design. She had years of experience under her belt, and had the unique skillset needed to craft stunning websites that captured each client's individual brand identity.</p>
                    <p>When it came to designing mobile or web-based applications, Janet had a deep understanding of UX principles, such as interaction design, visual design, animation. She also had the ability to create custom user interfaces and experiences tailored specifically to each client's needs.</p>
                </div>
            </div>
        </div>
    )
}