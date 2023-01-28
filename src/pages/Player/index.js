import Banner from 'components/Banner'
import style from './Player.module.css'
import { useEffect, useState } from 'react'
import Titulo from 'components/Titulo'
import videos from 'json/db.json'
import { useParams } from 'react-router-dom'
import NaoEncontrada from 'pages/NaoEncontrada'

export default function Player() {

    //variavel para pegar os dados json por api:
    const [video, setVideo] = useState([]);

    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/monicahillman/cinetag-api/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(...dados)
            })
    }, [])

    //com o arquivo db.json local:
    // const video = videos.find((video) => {
    //     return video.id === Number(parametros.id)
    // })

    if (!video) {
        return <NaoEncontrada />
    }
    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1> Player </h1>
            </Titulo>
            <section className={style.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </section>
        </>
    )
}
