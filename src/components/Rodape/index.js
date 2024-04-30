import { Link } from "react-router-dom";
import styles from "./Rodape.module.css";
import donuts from "./Simbolo_completo.png";

export const Rodape = () => {
  return (
    <footer className={styles.footer} >
      <h3> Desenvolvido em aula na Alura </h3>
      <div className={styles.assinatura} >
        <Link to="http://www.donutstech.com.br" target="_blank" ><img className={styles.donuts} src={donuts} alt="Logo da Donuts Tech" /></Link>
        <h3>Feito por Neto Russo</h3>
      </div>
    </footer>
  )
}
