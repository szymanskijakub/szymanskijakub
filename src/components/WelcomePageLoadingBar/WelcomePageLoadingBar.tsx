import styles from './WelcomePageLoadingBar.module.scss'
import {useEffect, useState} from "react";

const THREE_DOTS_CHANGE_SPEED = 1000
const WelcomePageLoadingBar = () => {
    const [dotsCount, setDotsCount] = useState<number>(0)

    useEffect(() => {
        setTimeout(updateDotsCount, THREE_DOTS_CHANGE_SPEED)
    }, [dotsCount]);

    const updateDotsCount = () => {
        if(dotsCount >= 3){
            setDotsCount(0)
            return
        }
        setDotsCount(prevValue => prevValue + 1)

    }
    return(
        <header className={styles.container}>
            <h1 className={styles.infoText}>SOON{".".repeat(dotsCount)}</h1>
            <div className={styles.bottomLine}/>
        </header>
    )
}

export default WelcomePageLoadingBar