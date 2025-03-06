"use client";

import styles from "../../styles/Cadastro.module.css"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useRouter } from "next/navigation"


export default function Cadastro() {
    const router = useRouter();
    return (
        <div className={styles.container}>
        <div className={styles.login}>
            <h1>CADASTRO</h1>
            <h3>Crie ja sua conta e aproveite ao maximo</h3>
            <Input text="Username" />
            <Input text="Password" />
            <Input text="Confirm Password" />
            <Button text="Cadastro" />
            <nav>
                <p>Já tem uma conta? <button className={styles.cadastro} onClick={() => router.push("/")}> Faça login</button></p>
        </nav>
        </div>
    </div>
    ) 
}