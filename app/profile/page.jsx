import styles from '../../styles/Profile.module.css';
import Card from '../../components/Card';

export default function Initial() {
    return (
        <div className={styles.container}>
            <div className={styles.perfil}>
            <div className={styles.image}>
                <img src="https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg"  alt="" />
                <p>Bernardo Gabriel de Moraes Marques</p>
            </div>
            <Card title={"Descrição"} text={"Olá meu nome é Bernardo, tenho 16 anos, atualmente estou cursando Desenvolvimento de sistema no Senai Valinhos e também o Ensino Médio no Sesi Valinhos"} />
            <Card title={"Descrição"} text={"Desenvolvedor Full Stack"} />
            <Card title={"Descrição"} text={"Desenvolvedor Full Stack"} />
            <Card title={"Descrição"} text={"Desenvolvedor Full Stack"} />
            </div>
        </div>
    )
}