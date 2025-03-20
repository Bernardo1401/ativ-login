"use client";

import styles from "./cadastro.css"
import Input from "../../components/Input"
import { useState } from "react";
import { useRouter } from "next/navigation"

export default function Cadastro() {
    const router = useRouter();
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [match, setMatch] = useState(null);
    const [error, setError] = useState(null);

    const handleCheck = () => {
        if (input1 !== input2) {
            setMatch(false);
            setError("As senhas não coincidem");
        }
        else if (input1.length === 0) {
            setMatch(false);
            setError("Preencha o campo de senha");
        }
        else if (input2.length === 0) {
            setMatch(false);
            setError("Preencha o campo de repetir senha");
        }
        else {
            setMatch(true);
            setError("sucesso");
        };
    };
    return (
        <div className="container">
            <div className="login">
                <h1>CADASTRO</h1>
                <h3>Crie ja sua conta e aproveite ao maximo</h3>
                <Input tipo="text" text="Username" />
                <input
                    className="input"
                    title="Senha:"
                    value={input1}
                    placeholder="Password"
                    onChange={(e) => setInput1(e.target.value)}
                />
                <input
                    className="input"
                    title="Repita a senha:"
                    value={input2}
                    placeholder="Repeat password"
                    onChange={(e) => setInput2(e.target.value)}
                />
                <button  className="button" onClick={handleCheck}>Cadastre-se</button>{" "}
                {match !== null && <p>{error}</p>}{" "}
                <nav>
                    <p>Já tem uma conta? <button className="cadastro" onClick={() => router.push("/")}> Faça login</button></p>
                </nav>
            </div>
        </div>
    )
}