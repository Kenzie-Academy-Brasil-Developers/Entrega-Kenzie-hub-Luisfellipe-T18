import  Logo  from "../../assets/Logo.svg"
import styles from "./style.module.scss"

export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={Logo} alt="LogoKenzieHub" />
        </header>
    )
}