import styles from "../styles/Home.module.css"
import Input from "../components/Input"
import Button from "../components/Button"

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <h1>LOGIN</h1>
                <h3>Bem-vindo de volta</h3>
                <Input text="Username" />
                <Input text="Password" />
                <Button text="Login" />
            </div>
        </div>
    )
}