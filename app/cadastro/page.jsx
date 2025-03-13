"use client";

import styles from "./cadastro.css"
import Input from "../../components/Input"
import { useState } from "react";
import { useRouter } from "next/navigation"

export default function Cadastro() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [match, setMatch] = useState(null)
    const [error, setError] = useState(null);

    const handleCheck = () => {
        if (password === confirmPass && password !== "") {
        setMatch(false);
        setError("As senhas não coincidem");
        } else if (password.length < 8) {
            setMatch(false);
            setError("A senha deve ter no minimo 8 caracteres");
        }
        else {
            setMatch(true);
            setError("/profile");
        }
    }

    return (
        <div className="container">
        <div className="login">
            <h1>CADASTRO</h1>
            <h3>Crie ja sua conta e aproveite ao maximo</h3>
            <Input tipo="text" text="Username" />
            <Input id={password} tipo="password" text="Password" onChange={(e) => setPassword(e.target.value)} />
            <Input id={confirmPass} tipo="password" text="Confirm Password" onChange={(e) => setConfirmPass(e.target.value)} />
            <button onClick={handleCheck}>Verificar</button>
            {match !== null && <p></p> }
            <button className= "button" onClick={() => router.push("/")}>Cadastre-se</button>
            <nav>
                <p>Já tem uma conta? <button className="cadastro" onClick={() => router.push("/")}> Faça login</button></p>
        </nav>
        </div>
    </div>
    ) 
}