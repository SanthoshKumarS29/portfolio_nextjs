import Questions from '../components/faq/Question';
import ContactTxtBg from './section/ContactTxtBg';
import styles from './Contact.module.scss'

export default function ContactPage() {
    return (
        <>
            <ContactTxtBg />
            <section className='padding-lr padding-tb'>
                <div className={styles.whiteContainer}>
                    <Questions />
                </div>
            </section>
        </>
    )
}