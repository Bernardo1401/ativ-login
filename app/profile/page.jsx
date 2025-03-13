import styles from './profile.css';
import Card from '../../components/Card';

export default function Initial() {
    return (
        <div className="container">
            <div className="perfil">
            <div className="image">
                <img src="https://avatars.githubusercontent.com/u/158209610?v=4"  alt="" />
                <p>Bernardo Gabriel de Moraes Marques</p>
            </div>
            <Card title={"Descrição"} text={"Olá meu nome é Bernardo, tenho 16 anos, atualmente estou cursando Desenvolvimento de sistema no Senai Valinhos na turma 2TDS1, e também o Ensino Médio no Sesi Valinhos."} />
            <Card title={"Hobbies"} text={"Meus hobbie são treinar e competir Muay Thai, além de tocar instrumentos musicais, principalmente de percussão."} />
            <Card title={"Sonhos"} text={"Para meu futruo eu sonho em seguir profissionalemnte no mundo da luta sendo lutador ou um eximio treinador da arte, mas como segundo plano penso em seguir na area de computação, pois sou apaixonado na área."} />
            <Card title={"Especialidades"} text={"-CSS -javaScript -html -MySql"} />
            </div>
        </div>
    )
}