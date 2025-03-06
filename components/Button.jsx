import styles from "../styles/Button.module.css"

export default function Button({text}) {
    return (
        <button className={styles.button}>{text}</button>
    )
}