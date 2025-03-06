"use client";
import styles from "../styles/Home.module.css"
import Input from "../components/Input"
import { useRouter } from "next/navigation"


export default function Home() {
    const router = useRouter();
        return (
        <div className={styles.container}>
            <div className={styles.login}>
                <h1>LOGIN</h1>
                <h3>Bem-vindo de volta</h3>
                <Input tipo="text" text="Username" />
                <Input tipo="password" text="Password"  />
                <p>Esqueceu sua senha?</p>
                <button className={styles.button} onClick={() => router.push("/profile")}>Login</button>
                <nav>
                <p>Não tem uma conta? <button className={styles.cadastro} onClick={() => router.push("/cadastro")}>Cadastre-se</button></p>
                </nav>
            </div>
        </div>
    )
}