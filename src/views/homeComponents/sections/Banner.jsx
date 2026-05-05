import styles from "../Banner.module.scss"
import AnimatedText from "../uiElements/BgText";
import Card from "../uiElements/Card";

export default function Banner(){
    return(
        <div className={styles.bannerContainer}>
            <AnimatedText />
            <div className={styles.cardContainer}>
                <Card />
            </div>
        </div>
    )
}