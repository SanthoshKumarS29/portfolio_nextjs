"use client";

import Image from 'next/image';
import styles from '../Banner.module.scss';
import { useRef } from 'react';

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


// Images and Icons
import card from '@/assets/images/home/cardMd.webp';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


export default function Quote() {
    const slideRef = useRef()

    const quoteData = [
        {
            id: 1,
            quote: "Her custom website designs, coding solutions, branding strategies, graphic design and app design were all top notch.",
            author: "Emil Herily",
            company: "Ariable",
        },
        {
            id: 2,
            quote: "Amazing frontend work and smooth animations. Everything was pixel perfect and responsive.",
            author: "John Carter",
            company: "DesignFlow",
        },
        {
            id: 3,
            quote: "Professional communication and excellent coding quality throughout the entire project.",
            author: "Sarah Smith",
            company: "TechNova",
        },
    ];

    const slideOptions = {
        type: "slide",
        perPage: 1,
        perMove: 1,
        arrows: false,
        pagination: false,
        autoplay: false,
        drag: false,
        speed: 800,
    }

    const handleLeft = () => {
        slideRef.current?.splide.go("<")
    }

    const handleRight = () => {
        slideRef.current?.splide.go(">")
    }

    return (
        <div className={styles.quotePaddigTb}>
            <div className={styles.quoteParent}>
                <div className={styles.sliderParent}>
                    <div className={styles.sliderContentContainer}>
                        <Splide options = {slideOptions} aria-label = "Slider" ref={slideRef}
>
                            {quoteData.map((item) => (
                                <SplideSlide key={item.id}>
                                    <div className={styles.sliderContent}>
                                        <p>{item.quote}</p>
                                        <div className={styles.sliderAuthor}>
                                            <Image src={card} alt='Card Image' width={54} height={54} className='fluid' />
                                            <p className={styles.saAuthorTxt}>{item.author} <span>{item.company}</span></p>
                                        </div>
                                    </div>
                                </SplideSlide>
                            ))}
                        </Splide>
                        <div className={styles.sliderBtn}>
                            <button className={styles.sliderBtnLeft} onClick={handleLeft}><FaAngleLeft /> Prev</button>
                            <button className={styles.sliderBtnRight} onClick={handleRight}>Next <FaAngleRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}