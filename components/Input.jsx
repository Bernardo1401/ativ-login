import styles from "../styles/Input.module.css"

export default function Input( { text, tipo, id }) {
    return (
        <div>
            <input id={id} className={styles.input}  type = {tipo}  placeholder= {text} />
        </div>
    )
}