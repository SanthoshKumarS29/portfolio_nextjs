import AnimatedHeader from '../TextAnimations/AnimatedHeader'
import styles from './Question.module.scss'

// Images and icons
import { FaPlus } from "react-icons/fa";


export default function Questions(){
    return(
        <div className={styles.questionPaddingBottom}>
           <AnimatedHeader text= "Question" />
           <div className={styles.questionPaddingLR}>
                <div className={styles.questionBtnContainer}>
                    <div className={styles.questionBtn}>
                        <p className={styles.questionTxt}>001 <span>How long do projects typically take?</span></p>
                        <span className={styles.plusBtn}><FaPlus /></span>
                    </div>
                </div>
                <div className={styles.questionBtnContainer}>
                    <div className={styles.questionBtn}>
                        <p className={styles.questionTxt}>021 <span>How long do projects typically take?</span></p>
                        <span className={styles.plusBtn}><FaPlus /></span>
                    </div>
                </div>
                <div className={styles.questionBtnContainer}>
                    <div className={styles.questionBtn}>
                        <p className={styles.questionTxt}>031 <span>How long do projects typically take?</span></p>
                        <span className={styles.plusBtn}><FaPlus /></span>
                    </div>
                </div>
           </div>
        </div>
    )
}