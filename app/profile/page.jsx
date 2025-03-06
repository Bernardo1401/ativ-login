import styles from '../../styles/Profile.module.css';
import Input from '../../components/Input';

export default function Initial() {
    return (
        <div className={styles.container}>
            <div className={styles.perfil}>
            <div className={styles.image}>
                <img src="https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg"  alt="" />
            </div>
            </div>
        </div>
    )
}