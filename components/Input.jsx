import styles from "../styles/Input.module.css"

export default function Input( { text, tipo }) {
    return (
        <div>
            <input className={styles.input}  type = {tipo}  placeholder= {text} />
        </div>
    )
}