import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";

function Player() {
    const [video, setVideo] = useState();
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/NetoRusso/cinetag-api/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(...dados);
            })
    }, [])
  

    if (!video) {
        return <NaoEncontrada />
    }

    console.log(video);
    return (
        <>
            <Banner imagem="player" />
            <Titulo >
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container} >
                <iframe
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                />
                <h2>{video.titulo}</h2>
            </section>
        </>
    )
}

export default Player
