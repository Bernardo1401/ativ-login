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
            <Card title={"Especialidades"}  image={<div className="skillsContainer" style={{ display: "flex", gap: "10px", heigth: "80px" }}>  
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="" />
                </div>}/>
            </div>
        </div>
    )
}