import styles from "./Navigation.module.scss"
import socialsData from "../../data/socials/socials.json"

const Navigation = () => {
    return(
        <nav>
            <div className={styles.logo}>
                <img src={"/icons/logo.png"} alt={"logo"}></img>
            </div>
            <div className={styles.socials}>
                {socialsData.socialIcons.map((socialIcon) => (
                    <a href={socialIcon.url} target={"_blank"}>
                        <img src={socialIcon.icon} alt={socialIcon.name}></img>
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default Navigation