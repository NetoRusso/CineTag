import styles from "./NaoEncontrada.module.css";
import quadro from "./homer.png";

function NaoEncontrada () {
    return (
        <section className={styles.container}>
            <h2>Ops!!</h2>
            <img src={quadro} alt="Quadro do homer escondendo" />
            <p>O conteúdo que você procurava não foi encontrado!</p>
        </section>
    )
}

export default NaoEncontrada;
