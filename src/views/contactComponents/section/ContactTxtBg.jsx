import styles from '../Contact.module.scss';
import ContactInfo from './ContactInfo';

export default function ContactTxtBg(){
    return(
        <section>
            <div className='padding-lr'>
                <div className={styles.contactContainer}>
                    <div className={styles.contactBg}>
                        <div className={styles.contactBgTxtLoopContainer}>
                            <h1 className={styles.contactBgTxtLoop}>
                                <span className={styles.contactBgTxt}>Contact Me</span>
                                <span className={styles.contactBgTxt} aria-hidden="true">Contact Me</span>
                                
                                {/* Duplicate */}
                                <span className={styles.contactBgTxt} aria-hidden="true">Contact Me</span>
                                <span className={styles.contactBgTxt} aria-hidden="true">Contact Me</span>
                            </h1>
                        </div>
                    </div>
                    <ContactInfo />
                </div>
            </div>
        </section>
    )
}