import styles from "../styles/Input.module.css"

export default function Input({ text }) {
    return (
        <div>
            <input className={styles.input} type="text" placeholder= {text} />
        </div>
    )
}