import styles from "../styles/Card.module.css"

export default function Card({title, text, image}) {
    return (
        <div className={styles.card}>
            <h1>{title}</h1>
            <p>{text}</p>
            <image> {image} </image>
        </div>
    )
}                              