import Banner from "components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo";
// import videos from "json/db.json";
import Card from "components/Card";

function Favoritos() {
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container} >
                <Card id='1' titulo='Gato Bonifacio' capa='https://m.media-amazon.com/images/I/61qt2UDK35L._AC_UF1000,1000_QL80_.jpg' />
                <Card id='2' titulo='Gato Anastacio' capa='https://img.freepik.com/fotos-premium/um-gato-de-olhos-verdes-esta-segurando-uma-luva-de-boxe_927978-979.jpg' />
            </section>
        </>
    )
}

export default Favoritos
