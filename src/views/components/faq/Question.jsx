"use client"

import { useRef, useState } from 'react';
import AnimatedHeader from '../TextAnimations/AnimatedHeader'
import styles from './Question.module.scss'

// Images and icons
import { FaPlus } from "react-icons/fa";


export default function Questions() {
    const [faqOpen, setFaqOpen] = useState(null);
    const contentRef = useRef([]);

    const faqData = [
        {
            id: "001",
            question: "How long do projects typically take?",
            answer:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            id: "002",
            question: "What technologies do you use?",
            answer:
                "I mainly work with React, Next.js, SCSS, Bootstrap, Node.js and MongoDB.",
        },
        {
            id: "003",
            question: "Do you provide support after delivery?",
            answer:
                "Yes. Depending on the project requirements, I provide maintenance and support after deployment.",
        },
    ];

    const handleFaqClick = (index) => {
        setFaqOpen(faqOpen === index ? null : index)
    };

    return (
        <div className={styles.questionPaddingBottom}>
            <AnimatedHeader text="Question" />
            <div className={styles.questionPaddingLR}>
                {faqData.map((qns, id) => (
                    <div className={styles.questionBtnContainer} key={qns.id}>
                        <div className={styles.questionBtn} onClick={() => handleFaqClick(id)}>
                            <p className={styles.questionTxt}>{qns.id} <span>{qns.question}</span></p>
                            <span className={`${styles.plusBtn} ${ faqOpen ? styles.activeIcon : "" }`}><FaPlus /></span>
                        </div>
                        <div className={styles.answerContainer} style={{
                            maxHeight: faqOpen === id ? `${contentRef.current[id]?.scrollHeight || 0}px` : "0px"
                        }}>
                            <div ref={(el) => (contentRef.current[id] = el)}>
                                <p>{qns.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}